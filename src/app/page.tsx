const WHATSAPP_NUMBER = "972526460735";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "שלום מעיין, אשמח לקבל פרטים על ההרשמה לשיעורי המתמטיקה לשנת הלימודים הקרובה."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const processSteps = [
  {
    label: "יצירת קשר",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7.5 9.5h17a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H14l-4.5 3.5V22.5h-2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M11 14.5h10M11 18h6.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "מפגש התאמה",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="21" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M5.5 24.5c1.2-3 3.5-4.5 6.5-4.5 1.4 0 2.6.3 3.6.9M26.5 24.5c-1.2-3-3.5-4.5-6.5-4.5-1.2 0-2.3.2-3.2.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "שיוך לפורמט",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="16" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="23.5" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M16 11v4.5M16 15.5 9.5 20.5M16 15.5l6.5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "תחילת לימודים",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5.5 13.5 16 8l10.5 5.5L16 19 5.5 13.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 15.8v5.2c0 .8 2.9 2.5 6.5 2.5s6.5-1.7 6.5-2.5v-5.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M26.5 13.5v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

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
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-whatsapp)] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[var(--color-whatsapp-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-whatsapp)] ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[88svh] overflow-hidden text-white">
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
        <div className="hero-grid absolute inset-0 opacity-15" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-4xl flex-col justify-end px-6 pb-16 pt-12 sm:px-10 sm:pb-24 lg:justify-center lg:pb-0">
          <p className="animate-rise text-sm font-medium text-white/55">
            נפתחה ההרשמה לשנת הלימודים הקרובה
          </p>

          <h1 className="animate-rise-delay-1 mt-4 font-[family-name:var(--font-rubik)] text-[clamp(1.85rem,4.5vw,3.25rem)] font-medium leading-[1.2] tracking-tight">
            שיעורי מתמטיקה
            <br />
            קבוצתיים ופרטניים
          </h1>

          <p className="animate-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
            ליווי מקצועי במתמטיקה, במרכז תל אביב.
          </p>

          <div className="animate-rise-delay-3 mt-10">
            <WhatsAppButton label="ליצירת קשר" />
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-4xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div data-reveal="" className="relative mx-auto aspect-square w-full max-w-[220px] lg:mx-0">
            <div className="h-full w-full overflow-hidden rounded-full ring-1 ring-[var(--color-border)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/maayan.jpg"
                alt="מעיין"
                loading="lazy"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div data-reveal="" data-reveal-delay="120">
            <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
              היכרות
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl">
              מעיין
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-base leading-[1.85] text-[var(--color-ink-soft)]">
              <p>
                בוגרת תואר ראשון במדעי המחשב בהצטיינות, עם חמש שנות ניסיון בהוראת
                מתמטיקה — מהיסודי ועד הבגרות.
              </p>
              <p>
                הגישה משלבת חיזוק יסודי של החומר עם אסטרטגיות למידה מותאמות אישית,
                תוך עבודה צמודה לתוכנית הלימודים של משרד החינוך.
              </p>
              <p>
                המטרה: ביסוס הבנה עמוקה, כלים להתמודדות עצמאית, וביטחון בדרך
                להצלחה.
              </p>
            </div>
          </div>
        </div>

        {/* Compact illustrated timeline */}
        <div data-reveal="" className="mx-auto mt-14 max-w-3xl sm:mt-16">
          <p className="mb-6 text-center text-[11px] font-medium tracking-[0.16em] text-[var(--color-accent)] uppercase">
            תהליך הקבלה
          </p>
          <div className="relative grid grid-cols-4 gap-2 sm:gap-4">
            <div
              className="absolute right-[12%] left-[12%] top-[18px] hidden h-px border-t border-dashed border-[var(--color-border)] sm:block"
              aria-hidden="true"
            />
            {processSteps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-2 text-center">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-bg)] text-[var(--color-accent)]">
                  {step.icon}
                </div>
                <p className="text-[11px] leading-snug text-[var(--color-ink-soft)] sm:text-xs">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Formats & Location ───────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-white px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div data-reveal="" className="grid gap-12 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
                פורמט
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                קבוצות קטנות
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                למידה משותפת בקבוצות מצומצמות, בהתאם לרמה ולשכבת הגיל.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
                פורמט
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                שיעורים פרטניים
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                ליווי אישי ממוקד, בקצב ובהתאמה מלאה לתלמיד.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
                מיקום
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                מרכז תל אביב
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                מיקום מדויק ייקבע בהתאם לנרשמים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-dark)] px-6 py-20 text-white sm:px-10 sm:py-28">
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div data-reveal="" className="relative mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-rubik)] text-3xl font-medium leading-tight sm:text-4xl">
            לתיאום שיחה ופרטים נוספים
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton label="ליצירת קשר ב-WhatsApp" />
            <a
              href="tel:+972526460735"
              className="text-sm text-white/35 transition-colors duration-300 hover:text-white/60"
            >
              052-646-0735
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[var(--color-dark)] px-6 pb-10 pt-6 text-center text-sm text-white/25">
        <p>מעיין · שיעורי מתמטיקה · מרכז תל אביב</p>
      </footer>
    </main>
  );
}
