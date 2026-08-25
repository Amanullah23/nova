"use client";
import { useState } from "react";
import { Save, Bell } from "lucide-react";

export default function AdminSettingsPage() {
  // TEMPORARY: seeded with the same values currently hardcoded in Footer.jsx
  // and Contact.jsx. There's no connection yet — changing these here does not
  // update the public site. Once Supabase is wired in, the site's footer/contact
  // components should read from this same settings table instead of hardcoded values.
  const [siteInfo, setSiteInfo] = useState({
    companyName: "NOVA INC.",
    tagline: "Construction",
    email: "nova.inc.cc@gmail.com",
    phone: "+93 74 944 2276",
    address: "Dasht-e Barchi, Kabul — Afghanistan",
    facebook: "https://www.facebook.com/nova.inc.construction",
    twitter: "https://www.twitter.com/NovaIncCC",
    instagram: "https://www.instagram.com/nova.inc.construction",
    linkedin: "https://www.linkedin.com/company/nova-inc-construction/",
  });

  const [notifications, setNotifications] = useState({
    newApplication: true,
    newMessage: true,
    weeklyDigest: false,
  });

  const [savingSite, setSavingSite] = useState(false);
  const [siteSaved, setSiteSaved] = useState(false);

  const handleSiteSubmit = async (e) => {
    e.preventDefault();
    setSavingSite(true);
    setSiteSaved(false);

    // TEMPORARY: no backend yet — simulates a save.
    // Replace with a Supabase update to a `site_settings` table in the next phase.
    await new Promise((r) => setTimeout(r, 500));

    setSavingSite(false);
    setSiteSaved(true);
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              Settings saved.
            </p>
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
                className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
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
          Choose what triggers an email to your admin inbox.
          <span className="block text-steel/60 text-[12px] mt-1">
            Not wired up yet — requires an email-sending service once the
            backend is connected.
          </span>
        </p>

        <div className="flex flex-col divide-y divide-steel-light">
          {[
            { key: "newApplication", label: "New job application received" },
            { key: "newMessage", label: "New contact message received" },
            { key: "weeklyDigest", label: "Weekly summary digest" },
          ].map(({ key, label }) => (
            <div
              key={key}
              className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
            >
              <span className="text-ink text-[13px] font-medium">{label}</span>
              <button
                type="button"
                onClick={() => toggleNotification(key)}
                role="switch"
                aria-checked={notifications[key]}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                  notifications[key] ? "bg-brand" : "bg-steel-light"
                }`}
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
