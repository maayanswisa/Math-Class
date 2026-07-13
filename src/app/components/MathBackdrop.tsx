const symbols = [
  { text: "π", top: "8%", right: "12%", size: "text-5xl", color: "text-amber-300/80", delay: "math-float-a" },
  { text: "∑", top: "18%", left: "8%", size: "text-4xl", color: "text-sky-300/75", delay: "math-float-b" },
  { text: "√", top: "12%", left: "22%", size: "text-3xl", color: "text-rose-300/70", delay: "math-float-c" },
  { text: "∫", bottom: "22%", right: "10%", size: "text-5xl", color: "text-fuchsia-300/70", delay: "math-float-b" },
  { text: "∞", top: "28%", right: "22%", size: "text-3xl", color: "text-orange-200/75", delay: "math-float-a" },
  { text: "Δ", bottom: "28%", left: "14%", size: "text-4xl", color: "text-emerald-300/75", delay: "math-float-c" },
  { text: "θ", top: "42%", left: "6%", size: "text-3xl", color: "text-cyan-200/70", delay: "math-float-a" },
  { text: "x²", bottom: "14%", right: "24%", size: "text-2xl", color: "text-yellow-200/75", delay: "math-float-b" },
  { text: "÷", top: "55%", right: "8%", size: "text-4xl", color: "text-pink-300/75", delay: "math-float-c" },
  { text: "≈", bottom: "38%", left: "28%", size: "text-2xl", color: "text-lime-200/65", delay: "math-float-a" },
  { text: "ƒ", top: "70%", left: "10%", size: "text-4xl", color: "text-violet-200/70", delay: "math-float-b" },
  { text: "±", top: "15%", right: "38%", size: "text-2xl", color: "text-teal-200/65", delay: "math-float-c" },
  { text: "∠", bottom: "18%", left: "40%", size: "text-3xl", color: "text-amber-200/70", delay: "math-float-a" },
  { text: "a/b", top: "62%", right: "30%", size: "text-xl", color: "text-sky-200/65", delay: "math-float-b" },
  { text: "Σ", bottom: "48%", right: "16%", size: "text-3xl", color: "text-rose-200/65", delay: "math-float-c" },
  { text: "+", top: "34%", left: "18%", size: "text-5xl", color: "text-yellow-300/80", delay: "math-float-a" },
  { text: "−", top: "48%", right: "18%", size: "text-5xl", color: "text-orange-300/80", delay: "math-float-b" },
  { text: "×", bottom: "32%", right: "36%", size: "text-5xl", color: "text-rose-300/80", delay: "math-float-c" },
  { text: "÷", top: "22%", left: "42%", size: "text-4xl", color: "text-sky-300/75", delay: "math-float-a" },
  { text: "+", bottom: "12%", left: "22%", size: "text-4xl", color: "text-lime-300/75", delay: "math-float-b" },
  { text: "×", top: "6%", left: "48%", size: "text-3xl", color: "text-fuchsia-300/70", delay: "math-float-c" },
  { text: "−", bottom: "42%", left: "8%", size: "text-4xl", color: "text-amber-300/75", delay: "math-float-a" },
  { text: "+", top: "75%", right: "14%", size: "text-3xl", color: "text-cyan-300/70", delay: "math-float-b" },
  { text: "×", top: "58%", left: "36%", size: "text-3xl", color: "text-pink-300/70", delay: "math-float-c" },
] as const;

export default function MathBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="blob-1 absolute -right-16 top-6 h-96 w-96 rounded-full bg-orange-400/40 blur-3xl" />
      <div className="blob-2 absolute -left-20 top-24 h-80 w-80 rounded-full bg-sky-400/40 blur-3xl" />
      <div className="blob-3 absolute bottom-8 left-[28%] h-80 w-80 rounded-full bg-pink-400/35 blur-3xl" />
      <div className="blob-1 absolute right-[18%] bottom-12 h-72 w-72 rounded-full bg-emerald-300/35 blur-3xl" />
      <div className="blob-2 absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="blob-3 absolute right-[40%] top-[10%] h-56 w-56 rounded-full bg-violet-400/25 blur-3xl" />

      {symbols.map((s, i) => (
        <span
          key={`${s.text}-${i}`}
          className={`absolute font-[family-name:var(--font-rubik)] font-light ${s.size} ${s.color} ${s.delay}`}
          style={{
            top: "top" in s ? s.top : undefined,
            bottom: "bottom" in s ? s.bottom : undefined,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
          }}
        >
          {s.text}
        </span>
      ))}

      <svg
        className="absolute bottom-0 left-0 w-full opacity-55"
        viewBox="0 0 1200 180"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 C 150 40, 280 160, 420 90 S 700 20, 860 100 S 1050 160, 1200 70"
          stroke="url(#mathCurve)"
          strokeWidth="2.5"
        />
        <path
          d="M0 160 C 200 80, 350 150, 500 110 S 800 50, 1000 120 S 1120 140, 1200 90"
          stroke="url(#mathCurve2)"
          strokeWidth="1.75"
          opacity="0.8"
        />
        <defs>
          <linearGradient id="mathCurve" x1="0" y1="0" x2="1200" y2="0">
            <stop stopColor="#fb923c" />
            <stop offset="0.35" stopColor="#f472b6" />
            <stop offset="0.7" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#a3e635" />
          </linearGradient>
          <linearGradient id="mathCurve2" x1="0" y1="0" x2="1200" y2="0">
            <stop stopColor="#fde047" />
            <stop offset="0.5" stopColor="#c084fc" />
            <stop offset="1" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
