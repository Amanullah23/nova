"use client";
import { useState } from "react";
import { User, Mail, Lock, Save, Camera } from "lucide-react";

export default function AdminProfilePage() {
  // TEMPORARY: seeded with placeholder admin data — replace with the
  // logged-in user's real record from Supabase Auth in the next phase.
  const [profile, setProfile] = useState({
    name: "Amanullah Yawari",
    email: "admin@nova.inc",
    phone: "+93 74 944 2276",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileSaved(false);

    // TEMPORARY: no backend yet — simulates a save.
    // Replace with a Supabase update to the admin's user record.
    await new Promise((r) => setTimeout(r, 500));

    setSavingProfile(false);
    setProfileSaved(true);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSaved(false);

    if (passwords.next.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }
    if (passwords.next !== passwords.confirm) {
      setPasswordError("New password and confirmation don't match.");
      return;
    }

    setSavingPassword(true);

    // TEMPORARY: no backend yet — simulates a save.
    // Replace with supabase.auth.updateUser({ password }) in the next phase.
    await new Promise((r) => setTimeout(r, 500));

    setSavingPassword(false);
    setPasswordSaved(true);
    setPasswords({ current: "", next: "", confirm: "" });
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Profile
        </h1>
        <p className="text-steel text-[13px] mt-1">
          Manage your admin account details.
        </p>
      </div>

      {/* Avatar + basic info */}
      <form
        onSubmit={handleProfileSubmit}
        className="bg-white border border-steel-light rounded-2xl p-6 md:p-8 flex flex-col gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center">
              <User className="w-9 h-9 text-brand-dark" />
            </div>
            <button
              type="button"
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-steel-light flex items-center justify-center text-steel hover:text-ink hover:border-brand/40 transition-colors"
              aria-label="Change photo"
              title="Photo upload isn't wired up yet"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
          <div>
            <p className="font-display text-ink font-bold text-lg tracking-tight">
              {profile.name}
            </p>
            <p className="text-steel text-[13px]">{profile.email}</p>
          </div>
        </div>

        {profileSaved && (
          <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-brand-dark text-[13px] font-semibold">
              Profile updated.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
            <input
              type="text"
              required
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
            <input
              type="email"
              required
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Phone Number
          </label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          disabled={savingProfile}
          className="flex items-center justify-center gap-2 w-fit px-6 py-[11px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          {savingProfile ? "Saving..." : "Save Changes"}
        </button>
      </form>

      {/* Password change */}
      <form
        onSubmit={handlePasswordSubmit}
        className="bg-white border border-steel-light rounded-2xl p-6 md:p-8 flex flex-col gap-5"
      >
        <div>
          <h2 className="font-display text-ink font-bold text-lg tracking-tight">
            Change Password
          </h2>
          <p className="text-steel text-[13px] mt-1">
            Choose a strong password you're not using elsewhere.
          </p>
        </div>

        {passwordError && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <p className="text-red-700 text-[13px] font-medium">
              {passwordError}
            </p>
          </div>
        )}
        {passwordSaved && (
          <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-brand-dark text-[13px] font-semibold">
              Password updated.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Current Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
            <input
              type="password"
              required
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              New Password
            </label>
            <input
              type="password"
              required
              value={passwords.next}
              onChange={(e) =>
                setPasswords({ ...passwords, next: e.target.value })
              }
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={savingPassword}
          className="flex items-center justify-center gap-2 w-fit px-6 py-[11px] border border-steel-light hover:border-brand/40 text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {savingPassword ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}
