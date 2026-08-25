"use client";
import Link from "next/link";
import {
  Newspaper,
  Briefcase,
  Users,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

// MOCK DATA — replace with Supabase queries in the next phase.
const stats = [
  {
    label: "Published Articles",
    value: 6,
    icon: Newspaper,
    href: "/admin/news",
  },
  { label: "Open Positions", value: 5, icon: Briefcase, href: "/admin/jobs" },
  {
    label: "New Applications",
    value: 3,
    icon: Users,
    href: "/admin/applications",
    highlight: true,
  },
  {
    label: "Unread Messages",
    value: 7,
    icon: MessageSquare,
    href: "/admin/messages",
    highlight: true,
  },
];

const recentApplications = [
  {
    id: 1,
    name: "Zahra Ahmadi",
    position: "Site Engineer",
    date: "Aug 24, 2026",
  },
  {
    id: 2,
    name: "Omid Rahimi",
    position: "Project Manager",
    date: "Aug 23, 2026",
  },
  {
    id: 3,
    name: "Farida Noori",
    position: "Junior Civil Engineer",
    date: "Aug 21, 2026",
  },
];

const recentMessages = [
  {
    id: 1,
    name: "Kabul Development Group",
    subject: "Civil infrastructure inquiry",
    date: "Aug 24, 2026",
  },
  {
    id: 2,
    name: "Marwa Hassani",
    subject: "Residential project quote",
    date: "Aug 23, 2026",
  },
  {
    id: 3,
    name: "Sadiq Karimi",
    subject: "Partnership proposal",
    date: "Aug 22, 2026",
  },
];

export default function AdminOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Overview
        </h1>
        <p className="text-steel text-[13px] mt-1">
          Welcome back — here's what's happening across the site.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="group bg-white border border-steel-light rounded-2xl p-5 flex flex-col gap-3 hover:border-brand/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    s.highlight
                      ? "bg-brand/15"
                      : "bg-paper border border-steel-light"
                  }`}
                >
                  <Icon
                    className={`w-4.5 h-4.5 ${s.highlight ? "text-brand-dark" : "text-steel"}`}
                  />
                </div>
                <ArrowUpRight className="w-4 h-4 text-steel/40 group-hover:text-brand-dark transition-colors duration-200" />
              </div>
              <div>
                <p className="font-display text-ink font-bold text-2xl leading-none">
                  {s.value}
                </p>
                <p className="font-mono text-steel text-[11px] uppercase tracking-wide mt-1.5">
                  {s.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-steel-light rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-ink font-bold text-[15px] tracking-tight">
              Recent Applications
            </h2>
            <Link
              href="/admin/applications"
              className="font-mono text-[11px] text-brand-dark tracking-wide uppercase hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-steel-light">
            {recentApplications.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-ink text-[13px] font-semibold">{a.name}</p>
                  <p className="text-steel text-[12px]">{a.position}</p>
                </div>
                <span className="font-mono text-steel/60 text-[11px]">
                  {a.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-steel-light rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-ink font-bold text-[15px] tracking-tight">
              Recent Messages
            </h2>
            <Link
              href="/admin/messages"
              className="font-mono text-[11px] text-brand-dark tracking-wide uppercase hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-steel-light">
            {recentMessages.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-ink text-[13px] font-semibold">{m.name}</p>
                  <p className="text-steel text-[12px]">{m.subject}</p>
                </div>
                <span className="font-mono text-steel/60 text-[11px]">
                  {m.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
