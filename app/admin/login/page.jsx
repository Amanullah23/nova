"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      setError(
        authError.message === "Invalid login credentials"
          ? "Incorrect email or password."
          : authError.message,
      );
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen w-full bg-surface flex items-center justify-center px-6 py-16 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Its own fixed corner element — no longer stacked above the centered card fighting its alignment */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-1.5 text-steel hover:text-ink font-mono text-[11px] font-medium tracking-wide transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Website
      </Link>

      <div className="relative z-10 w-full max-w-sm">
        <div className="bg-white border border-steel-light rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          <Link href="/" className="flex flex-col items-center gap-3">
            <Image
              src="/logo-new.png"
              alt="NOVA INC."
              width={52}
              height={52}
              className="object-contain w-[52px] h-[52px]"
            />
            <div className="text-center">
              <p className="font-display text-ink font-bold text-[15px] tracking-[0.1em] uppercase">
                Nova Inc.
              </p>
              <p className="font-mono text-brand-dark text-[10px] tracking-[0.25em] uppercase mt-1">
                Admin Console
              </p>
            </div>
          </Link>

          <div className="h-px bg-steel-light" />

          <div>
            <h1 className="font-display text-ink font-bold text-xl tracking-tight mb-1">
              Sign in
            </h1>
            <p className="text-steel text-[13px]">
              Access the NOVA INC. content dashboard.
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <p className="text-red-700 text-[13px] font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="admin@nova.inc"
                  className="w-full pl-10 pr-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-steel hover:text-ink transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 w-full py-[13px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-steel/60 font-mono text-[11px] mt-6">
          NOVA INC. internal tool — authorized staff only
        </p>
      </div>
    </main>
  );
}
