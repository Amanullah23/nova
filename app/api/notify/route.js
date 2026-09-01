import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const TABLE_BY_TYPE = { application: "applications", message: "messages" };
const TOGGLE_COLUMN_BY_TYPE = {
  application: "notify_new_application",
  message: "notify_new_message",
};

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      // Fails this one request, not the whole build — a missing key here
      // must never be able to break deployment of the entire site again.
      return NextResponse.json(
        { error: "Email service not configured (missing RESEND_API_KEY)" },
        { status: 500 },
      );
    }

    const { type, id } = await request.json();

    if (!TABLE_BY_TYPE[type] || !id) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const supabase = createAdminClient();

    const { data: settings } = await supabase
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    if (
      !settings ||
      !settings[TOGGLE_COLUMN_BY_TYPE[type]] ||
      !settings.email
    ) {
      return NextResponse.json({ skipped: true });
    }

    const { data: row, error: rowError } = await supabase
      .from(TABLE_BY_TYPE[type])
      .select("*")
      .eq("id", id)
      .single();

    if (rowError || !row) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 },
      );
    }

    const subject =
      type === "application"
        ? `New Job Application — ${row.position || "General"}`
        : "New Contact Message";

    const adminPath =
      type === "application" ? "/admin/applications" : "/admin/messages";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

    const html =
      type === "application"
        ? `<h2>New Job Application</h2>
           <p><strong>Name:</strong> ${escapeHtml(row.name)}</p>
           <p><strong>Email:</strong> ${escapeHtml(row.email)}</p>
           <p><strong>Phone:</strong> ${escapeHtml(row.phone || "—")}</p>
           <p><strong>Position:</strong> ${escapeHtml(row.position || "General Application")}</p>
           <p><strong>Message:</strong><br/>${escapeHtml(row.message).replace(/\n/g, "<br/>")}</p>
           <p><a href="${siteUrl}${adminPath}">View in Admin Panel</a></p>`
        : `<h2>New Contact Message</h2>
           <p><strong>Name:</strong> ${escapeHtml(row.name)}</p>
           <p><strong>Email:</strong> ${escapeHtml(row.email)}</p>
           <p><strong>Phone:</strong> ${escapeHtml(row.phone || "—")}</p>
           <p><strong>Message:</strong><br/>${escapeHtml(row.message).replace(/\n/g, "<br/>")}</p>
           <p><a href="${siteUrl}${adminPath}">View in Admin Panel</a></p>`;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from:
        process.env.NOTIFY_FROM_EMAIL || "NOVA INC. <onboarding@resend.dev>",
      to: settings.email,
      subject,
      html,
    });

    if (sendError) {
      return NextResponse.json({ error: sendError.message }, { status: 502 });
    }

    return NextResponse.json({ sent: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
