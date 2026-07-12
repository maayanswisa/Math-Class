import FaqAccordion from "./components/FaqAccordion";

const WHATSAPP_NUMBER = "972526460735";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "היי מעיין! אשמח לשמוע פרטים על ההרשמה לשיעורי המתמטיקה לשנת הלימודים הקרובה"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.165L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[var(--color-whatsapp)] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_-8px_rgba(31,173,102,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-whatsapp-hover)] hover:shadow-[0_14px_36px_-8px_rgba(31,173,102,0.75)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-whatsapp)] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}

const groupAdvantages = [
  {
    title: "מענה ממוקד ויחס אישי",
    text: "ליווי צמוד שמאפשר להבין לעומק, בקצב הנכון עבור כל תלמיד.",
  },
  {
    title: "למידה חברתית ומעצימה",
    text: "לומדים יחד בסביבה בטוחה שבה מרגישים בנוח לשאול הכל, והביטחון העצמי עולה.",
  },
  {
    title: "מוטיבציה וסביבה חיובית",
    text: "התרגול המשותף הופך לחוויה קבוצתית מעודדת ומקדמת.",
  },
  {
    title: "חומרי לימוד מותאמים",
    text: "כל תלמיד מקבל סיכומים ודפי תרגול ממוקדים שאני מכינה בהתאמה לחומר האישי שלו בכיתה.",
  },
];


export default function Home() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
        <div className="absolute inset-0 animate-soft-zoom overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-classroom.jpg"
            alt=""
            fetchPriority="high"
            className="h-full w-full scale-110 object-cover object-[center_35%] blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-dark)]/95 via-[var(--color-dark)]/82 to-[var(--color-dark)]/55" />
        <div className="hero-grid absolute inset-0 opacity-20" />
        {/* Ambient floating blobs */}
        <div className="blob-1 pointer-events-none absolute right-[14%] top-[22%] h-80 w-80 rounded-full bg-emerald-500/8 blur-[90px]" aria-hidden="true" />
        <div className="blob-2 pointer-events-none absolute bottom-[20%] left-[16%] h-64 w-64 rounded-full bg-teal-400/6 blur-[70px]" aria-hidden="true" />
        <div className="blob-3 pointer-events-none absolute bottom-[40%] right-[45%] h-52 w-52 rounded-full bg-green-300/5 blur-[60px]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-end px-6 pb-20 pt-12 sm:px-10 sm:pb-28 lg:justify-center lg:pb-0">
          {/* Label pill */}
          <p className="animate-rise inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/55 backdrop-blur-sm">
            נפתחה ההרשמה לשנת הלימודים הקרובה
          </p>

          {/* Massive headline — font-black for maximum impact */}
          <h1 className="animate-rise-delay-1 mt-6 font-[family-name:var(--font-rubik)] text-[clamp(1.9rem,5vw,4rem)] font-black leading-[1.1] tracking-tight">
            לומדים מתמטיקה ביחד
          </h1>

          {/* Subtitle — font-light creates weight contrast */}
          <p className="animate-rise-delay-2 mt-5 font-[family-name:var(--font-rubik)] text-[clamp(1.1rem,2.6vw,1.8rem)] font-light leading-relaxed text-white/65">
            שיעורים פרטיים וקבוצות קטנות במרכז תל אביב
          </p>

          {/* Intro text */}
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-[clamp(0.875rem,1.4vw,1rem)] leading-loose text-white/50">
            שמי מעיין, בוגרת תואר ראשון במדעי המחשב בהצטיינות.<br />
            בעלת 5 שנות ניסיון בליווי והוראת תלמידים מהיסודי ועד הבגרויות.<br />
            אני מאמינה שמתמטיקה לומדים באווירה נעימה ובגובה העיניים.<br />
            מזמינה אתכם ללימודים בקבוצות קטנות או בפורמט פרטני במרכז תל אביב.<br />
            ליווי ממוקד חד/דו-שבועי לאורך השנה, שמעניק לילד שלכם בסיס חזק, כלים להתמודדות עם החומר וביטחון עצמי מלא בדרך להצלחה.
          </p>

          <div className="animate-rise-delay-3 mt-10">
            <WhatsAppButton label="להרשמה בוואטסאפ" />
          </div>
        </div>
      </section>

      {/* ─── About & Approach ─────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-20">
          {/* Photo */}
          <div data-reveal="" className="relative mx-auto aspect-square w-full max-w-[260px] lg:mx-0">
            <div
              className="animate-drift absolute -inset-8 -z-10 rounded-full bg-[var(--color-accent-bg)] blur-3xl"
              aria-hidden="true"
            />
            <div className="h-full w-full overflow-hidden rounded-full shadow-[0_24px_60px_-16px_rgba(13,43,40,0.30)] ring-4 ring-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/maayan.jpg"
                alt="מעיין, מורה פרטית למתמטיקה ומדעי המחשב"
                loading="lazy"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          {/* Text */}
          <div data-reveal="" data-reveal-delay="150">
            <p className="text-sm font-semibold text-[var(--color-accent)]">היכרות קצרה</p>
            <h2 className="mt-4 font-[family-name:var(--font-rubik)] text-4xl font-black leading-tight text-[var(--color-ink)] sm:text-5xl">
              קצת עליי
              <br />
              והגישה שלי
            </h2>
            <p className="mt-8 text-lg leading-[1.85] text-[var(--color-ink-soft)]">
              בעלת ניסיון עשיר בליווי תלמידים מיסודי ועד הצלחה בבגרויות בתיכון.
              <br />
              הלימודים משלבים חיזוק של השליטה ביסודות המתמטיים יחד עם אסטרטגיות למידה מותאמות אישית.
              <br />
              שיטות לימודים יחודיות ומציאת &quot;טריקים&quot; שיעזרו באופן מותאם לתלמיד.
              <br />
              העבודה נעשית בצמוד לתוכניות הלימוד של משרד החינוך, כדי להבטיח חיבור מלא בין החומר שנלמד לנעשה בכיתה.
            </p>

          </div>
        </div>

        {/* ── Process Timeline ────────────────────────────────── */}
        <div data-reveal="" className="mx-auto mt-16 max-w-5xl">
          <p className="mb-10 text-sm font-semibold text-[var(--color-accent)]">איך זה עובד?</p>
          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* Connecting line — desktop only */}
            <div
              className="absolute right-[12.5%] left-[12.5%] top-7 hidden h-px bg-[var(--color-border)] lg:block"
              aria-hidden="true"
            />
            {[
              "שליחת הודעה בוואטסאפ",
              "מפגש בדיקת רמה",
              "שיוך לקבוצה המתאימה",
              "תחילת המפגשים",
            ].map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-4 text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] font-[family-name:var(--font-rubik)] text-sm font-black text-white shadow-md ring-4 ring-[var(--color-surface)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-full rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Small Groups ─────────────────────────────────── */}
      <section className="bg-white px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div data-reveal="" className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--color-accent)]">שיטת הלימוד</p>
            <h2 className="mt-4 font-[family-name:var(--font-rubik)] text-4xl font-black leading-tight text-[var(--color-ink)] sm:text-5xl">
              היתרונות בלמידה
              <br />
              בקבוצה קטנה
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {groupAdvantages.map((item, i) => (
              <div
                key={item.title}
                data-reveal=""
                data-reveal-delay={String(i * 120)}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
              >
                <span className="font-[family-name:var(--font-rubik)] text-4xl font-black leading-none text-[var(--color-accent)]/12 select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-rubik)] text-xl font-bold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing & Location ───────────────────────────────── */}
      <section className="bg-[var(--color-surface)] px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            {/* Price */}
            <div data-reveal="">
              <p className="text-sm font-semibold text-[var(--color-accent)]">מחיר חודשי</p>
              <h2 className="mt-4 font-[family-name:var(--font-rubik)] text-4xl font-black text-[var(--color-ink)] sm:text-5xl">
                השקעה פשוטה
                <br />
                וברורה
              </h2>
              <p className="mt-10 font-[family-name:var(--font-rubik)] text-[clamp(4.5rem,12vw,8rem)] font-black leading-none tracking-tight text-[var(--color-accent)]">
                ₪500
              </p>
              <p className="mt-4 text-[var(--color-ink-soft)]">
                לחודש לכל תלמיד · מחיר קבוע וברור
              </p>
            </div>

            {/* Location */}
            <div data-reveal="" data-reveal-delay="150" className="md:border-r md:border-[var(--color-border)] md:pr-20">
              <p className="text-sm font-semibold text-[var(--color-accent)]">מיקום</p>
              <h2 className="mt-4 font-[family-name:var(--font-rubik)] text-4xl font-black leading-tight text-[var(--color-ink)] sm:text-5xl">
                במרכז
                <br />
                תל אביב
              </h2>
              <p className="mt-8 text-lg leading-[1.85] text-[var(--color-ink-soft)]">
                השיעורים יתקיימו במרכז תל אביב (מיקום מדויק ייקבע בהתאם לנוחות
                הנרשמים).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <div data-reveal="">
            <p className="text-sm font-semibold text-[var(--color-accent)]">שאלות נפוצות</p>
            <h2 className="mt-4 font-[family-name:var(--font-rubik)] text-4xl font-black leading-tight text-[var(--color-ink)] sm:text-5xl">
              תשובות לשאלות
              <br />
              שהורים שואלים
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-dark)] px-6 py-28 text-white sm:px-10 sm:py-36">
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div data-reveal="" className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-rubik)] text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            רוצים לשריין מקום
            <br />
            לשנה הקרובה?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg font-light leading-loose text-white/55">
            שלחו הודעה בוואטסאפ, נתחיל ממפגש היכרות והתאמת רמה ונמצא יחד את
            הקבוצה שתתאים לילד שלכם.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton label="שליחת הודעה למעיין" />
            <a
              href="tel:+972526460735"
              className="text-sm text-white/35 transition-all duration-300 ease-out hover:text-white/65"
            >
              או התקשרו: 052-646-0735
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[var(--color-dark)] px-6 pb-10 pt-6 text-center text-sm text-white/25">
        <p>מעיין · שיעורי מתמטיקה בקבוצות קטנות · מרכז תל אביב</p>
      </footer>
    </main>
  );
}
