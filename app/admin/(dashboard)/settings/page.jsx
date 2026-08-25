"use client";
import { useEffect, useState } from "react";
import { Save, Bell } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const toCamel = (row) => ({
  companyName: row.company_name,
  tagline: row.tagline,
  email: row.email,
  phone: row.phone,
  address: row.address,
  facebook: row.facebook ?? "",
  twitter: row.twitter ?? "",
  instagram: row.instagram ?? "",
  linkedin: row.linkedin ?? "",
});

const NOTIFICATION_COLUMN = {
  newApplication: "notify_new_application",
  newMessage: "notify_new_message",
  weeklyDigest: "notify_weekly_digest",
};

export default function AdminSettingsPage() {
  const [siteInfo, setSiteInfo] = useState(null);
  const [notifications, setNotifications] = useState({
    newApplication: true,
    newMessage: true,
    weeklyDigest: false,
  });
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [savingSite, setSavingSite] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [siteSaved, setSiteSaved] = useState(false);
  const [notifError, setNotifError] = useState("");

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .eq("id", 1)
        .maybeSingle();

      if (error) {
        setLoadError(error.message);
      } else if (data) {
        setSiteInfo(toCamel(data));
        setNotifications({
          newApplication: data.notify_new_application ?? true,
          newMessage: data.notify_new_message ?? true,
          weeklyDigest: data.notify_weekly_digest ?? false,
        });
      } else {
        setLoadError(
          "No site settings row found — check that the site_settings table was seeded.",
        );
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleSiteSubmit = async (e) => {
    e.preventDefault();
    setSaveError("");
    setSavingSite(true);
    setSiteSaved(false);

    const supabase = createClient();
    const { error } = await supabase
      .from("site_settings")
      .update({
        company_name: siteInfo.companyName,
        tagline: siteInfo.tagline,
        email: siteInfo.email,
        phone: siteInfo.phone,
        address: siteInfo.address,
        facebook: siteInfo.facebook,
        twitter: siteInfo.twitter,
        instagram: siteInfo.instagram,
        linkedin: siteInfo.linkedin,
      })
      .eq("id", 1);

    if (error) {
      setSaveError(error.message);
      setSavingSite(false);
      return;
    }

    setSavingSite(false);
    setSiteSaved(true);
  };

  // Toggles save immediately on click — no separate submit button, matching
  // how status changes work elsewhere in the admin panel (Applications, Messages).
  const toggleNotification = async (key) => {
    const nextValue = !notifications[key];
    setNotifications((prev) => ({ ...prev, [key]: nextValue })); // optimistic
    setNotifError("");

    const supabase = createClient();
    const { error } = await supabase
      .from("site_settings")
      .update({ [NOTIFICATION_COLUMN[key]]: nextValue })
      .eq("id", 1);

    if (error) {
      setNotifications((prev) => ({ ...prev, [key]: !nextValue })); // revert
      setNotifError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <p className="text-steel text-[13px]">Loading settings...</p>
      </div>
    );
  }

  if (loadError && !siteInfo) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p className="text-red-700 text-[13px] font-medium">{loadError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Settings
        </h1>
        <p className="text-steel text-[13px] mt-1">
          Site information and notification preferences.
        </p>
      </div>

      {/* Site info */}
      <form
        onSubmit={handleSiteSubmit}
        className="bg-white border border-steel-light rounded-2xl p-6 md:p-8 flex flex-col gap-5"
      >
        <div>
          <h2 className="font-display text-ink font-bold text-lg tracking-tight">
            Site Information
          </h2>
          <p className="text-steel text-[13px] mt-1">
            Shown in the footer and contact section of the public site.
          </p>
        </div>

        {siteSaved && (
          <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-brand-dark text-[13px] font-semibold">
              Settings saved — the public site will reflect this on next load.
            </p>
          </div>
        )}
        {saveError && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <p className="text-red-700 text-[13px] font-medium">{saveError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Company Name
            </label>
            <input
              type="text"
              value={siteInfo.companyName}
              onChange={(e) =>
                setSiteInfo({ ...siteInfo, companyName: e.target.value })
              }
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Tagline
            </label>
            <input
              type="text"
              value={siteInfo.tagline}
              onChange={(e) =>
                setSiteInfo({ ...siteInfo, tagline: e.target.value })
              }
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Contact Email
          </label>
          <input
            type="email"
            value={siteInfo.email}
            onChange={(e) =>
              setSiteInfo({ ...siteInfo, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
          <p className="text-steel/60 text-[11px] mt-0.5">
            This is also where notification emails below are sent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Phone
            </label>
            <input
              type="text"
              value={siteInfo.phone}
              onChange={(e) =>
                setSiteInfo({ ...siteInfo, phone: e.target.value })
              }
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Address
            </label>
            <input
              type="text"
              value={siteInfo.address}
              onChange={(e) =>
                setSiteInfo({ ...siteInfo, address: e.target.value })
              }
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="border-t border-steel-light pt-5 flex flex-col gap-4">
          <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Social Links
          </p>
          {[
            { key: "facebook", label: "Facebook" },
            { key: "twitter", label: "Twitter / X" },
            { key: "instagram", label: "Instagram" },
            { key: "linkedin", label: "LinkedIn" },
          ].map(({ key, label }) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="text-steel text-[12px] font-medium">
                {label}
              </label>
              <input
                type="url"
                value={siteInfo[key]}
                onChange={(e) =>
                  setSiteInfo({ ...siteInfo, [key]: e.target.value })
                }
                placeholder="https://..."
                className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={savingSite}
          className="flex items-center justify-center gap-2 w-fit px-6 py-[11px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          {savingSite ? "Saving..." : "Save Settings"}
        </button>
      </form>

      {/* Notifications */}
      <div className="bg-white border border-steel-light rounded-2xl p-6 md:p-8 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-brand-dark" />
          <h2 className="font-display text-ink font-bold text-lg tracking-tight">
            Notifications
          </h2>
        </div>
        <p className="text-steel text-[13px] -mt-3">
          Choose what triggers an email to {siteInfo.email || "your site email"}
          .
        </p>

        {notifError && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <p className="text-red-700 text-[13px] font-medium">{notifError}</p>
          </div>
        )}

        <div className="flex flex-col divide-y divide-steel-light">
          {[
            {
              key: "newApplication",
              label: "New job application received",
              caption: null,
            },
            {
              key: "newMessage",
              label: "New contact message received",
              caption: null,
            },
            {
              key: "weeklyDigest",
              label: "Weekly summary digest",
              caption: "Not wired up yet — requires a separate scheduled job.",
            },
          ].map(({ key, label, caption }) => (
            <div
              key={key}
              className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 gap-4"
            >
              <div>
                <span className="text-ink text-[13px] font-medium">
                  {label}
                </span>
                {caption && (
                  <p className="text-steel/60 text-[11px] mt-0.5">{caption}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => toggleNotification(key)}
                disabled={key === "weeklyDigest"}
                role="switch"
                aria-checked={notifications[key]}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${
                  notifications[key] ? "bg-brand" : "bg-steel-light"
                } ${key === "weeklyDigest" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    notifications[key] ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
