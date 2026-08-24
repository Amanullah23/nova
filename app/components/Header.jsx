"use client";
import Image from "next/image";
import headerImg from "@/public/header2.jpg";
import { motion, useReducedMotion } from "framer-motion";
import { Cog } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const reduce = useReducedMotion();

  const fade = (delay = 0, y = 20) =>
    reduce
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-surface overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-0 right-[38%] w-px h-full bg-gradient-to-b from-transparent via-brand/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <motion.div {...fade(0)} className="flex items-center gap-2 w-fit">
              <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand-dark font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
                <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
                Est. Kabul, Afghanistan
              </span>
            </motion.div>

            <div className="flex flex-col gap-1">
              {["Where", "Innovation", "Meets Trust."].map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.h1
                    initial={reduce ? false : { y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight ${
                      word === "Innovation" ? "text-brand-dark" : "text-ink"
                    }`}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              {...fade(0.5)}
              className="text-steel text-base md:text-lg leading-relaxed max-w-md"
            >
              A leading construction and engineering company delivering
              innovative, sustainable, and high-quality infrastructure solutions
              that shape modern cities and resilient communities.
            </motion.p>

            <motion.div {...fade(0.6)} className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="px-7 py-[13px] bg-brand hover:bg-brand-dark text-ink text-[14px] font-bold tracking-wide rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_rgba(126,199,66,0.3)] active:scale-95"
              >
                Start a Project
              </Link>
              <Link
                href="/#projects"
                className="px-7 py-[13px] border border-steel-light hover:border-brand/50 text-steel hover:text-ink text-[14px] font-medium tracking-wide rounded-lg transition-all duration-200 bg-white hover:bg-black/[0.02] active:scale-95"
              >
                View Our Work →
              </Link>
            </motion.div>

            <motion.div
              {...fade(0.7)}
              className="flex gap-8 pt-6 border-t border-steel-light"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "80+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fade(0.75 + i * 0.1, 12)}
                  className="flex flex-col gap-1"
                >
                  <span className="font-display text-2xl font-bold text-ink">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] text-steel tracking-wide uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              animate={reduce ? {} : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] md:w-[560px] md:h-[560px] pointer-events-none z-0 opacity-[0.12]"
            >
              <Cog
                className="w-full h-full text-brand-dark"
                strokeWidth={0.5}
              />
            </motion.div>
            <motion.div
              animate={reduce ? {} : { rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none z-0 opacity-[0.1]"
            >
              <Cog className="w-full h-full text-steel" strokeWidth={0.6} />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-full h-full max-w-lg rounded-2xl border border-brand/25 pointer-events-none z-0"
            />

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              <motion.div
                initial={reduce ? false : { scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={headerImg}
                  alt="NOVA INC Construction"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  priority
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />

              {/* Small dark chip on the photo — kept dark for legibility over the image, not a theme choice */}
              <motion.div
                {...fade(1.0, 16)}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="flex items-center gap-3 bg-ink/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-brand animate-pulse motion-reduce:animate-none shrink-0" />
                  <div>
                    <p className="text-white text-[13px] font-semibold">
                      Currently Active
                    </p>
                    <p className="text-steel-light text-[11px]">
                      Accepting new construction projects
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute top-5 right-5"
              >
                <div className="bg-brand text-ink font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-[5px] rounded-lg">
                  Since 2014
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute left-[-16px] top-1/3 z-20 hidden lg:block"
            >
              <div className="bg-white border border-steel-light rounded-xl px-4 py-3 shadow-xl">
                <p className="font-display text-brand-dark text-xl font-bold">
                  80+
                </p>
                <p className="font-mono text-steel text-[10px] tracking-wide uppercase mt-[2px]">
                  Projects Done
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
