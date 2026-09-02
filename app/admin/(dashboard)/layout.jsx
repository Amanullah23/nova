"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  MessageCircle,
  Building2,
  Layers,
  Briefcase,
  Users2,
  Users,
  MessageSquare,
  Menu,
  X,
  LogOut,
  UserCircle,
  Settings,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "News", href: "/admin/news", icon: Newspaper },
  { name: "Comments", href: "/admin/comments", icon: MessageCircle },
  { name: "Projects", href: "/admin/projects", icon: Building2 },
  { name: "Business Overview", href: "/admin/overview", icon: Layers },
  { name: "Job Postings", href: "/admin/jobs", icon: Briefcase },
  { name: "Team", href: "/admin/team", icon: Users2 },
  { name: "Applications", href: "/admin/applications", icon: Users },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
];

const accountItems = [
  { name: "Profile", href: "/admin/profile", icon: UserCircle },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminDashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2.5 px-5 py-6">
        <Image
          src="/logo-new.png"
          alt="NOVA INC."
          width={36}
          height={36}
          className="object-contain w-9 h-9"
        />
        <div>
          <p className="font-display text-ink font-bold text-[13px] tracking-[0.08em] uppercase leading-none">
            Nova Inc.
          </p>
          <p className="font-mono text-brand-dark text-[9px] tracking-[0.2em] uppercase mt-1">
            Admin
          </p>
        </div>
      </div>

      <nav className="flex-1 px-3 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 ${
                active
                  ? "bg-brand/10 text-ink border border-brand/30"
                  : "text-steel hover:bg-black/[0.03] hover:text-ink border border-transparent"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${active ? "text-brand-dark" : "text-steel"}`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-steel-light flex flex-col gap-1">
        {accountItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 ${
                active
                  ? "bg-brand/10 text-ink border border-brand/30"
                  : "text-steel hover:bg-black/[0.03] hover:text-ink border border-transparent"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${active ? "text-brand-dark" : "text-steel"}`}
              />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="px-3 pb-5 pt-1">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-steel hover:bg-black/[0.03] hover:text-ink transition-all duration-150"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-paper flex">
      <aside className="hidden lg:flex w-[240px] shrink-0 bg-white border-r border-steel-light">
        <SidebarContent />
      </aside>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[260px] bg-white border-r border-steel-light transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden flex items-center justify-between px-5 h-[64px] bg-white border-b border-steel-light">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-new.png"
              alt="NOVA INC."
              width={28}
              height={28}
              className="object-contain w-7 h-7"
            />
            <span className="font-display text-ink font-bold text-[13px] tracking-wide uppercase">
              Admin
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg text-steel hover:text-ink hover:bg-black/[0.04] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        <main className="flex-1 p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
