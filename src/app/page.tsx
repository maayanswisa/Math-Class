import MathBackdrop from "./components/MathBackdrop";

const WHATSAPP_NUMBER = "972526460735";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "שלום מעיין, אשמח לקבל פרטים על ההרשמה לשיעורי המתמטיקה לשנת הלימודים הקרובה."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.165L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
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

const formatCards = [
  {
    title: "שיעורים פרטניים",
    text: "ליווי אישי ממוקד, בקצב ובהתאמה מלאה לתלמיד. אני מגיעה אליכם, השיעורים מתקיימים בבית התלמיד לנוחות מקסימאלית.",
  },
  {
    title: "קבוצות קטנות",
    text: "למידה משותפת בקבוצות קטנות, בהתאם לרמה ולשכבת הגיל. המפגשים יתקיימו במרכז תל אביב.",
  },
  {
    title: "לכל הרמות",
    text: "מהיסודי ועד הבגרות, התאמה אישית לרמה ולקצב של כל תלמיד ותלמידה.",
  },
];

const processSteps = [
  {
    title: "צרו איתי קשר",
    text: "שלחו הודעה בוואטסאפ או התקשרו ונפתח יחד את תהליך ההרשמה.",
  },
  {
    title: "מפגש התאמה",
    text: "נקיים מפגש קצר להיכרות ולהבנת הרמה, הקצב והצרכים של התלמיד/ה.",
  },
  {
    title: "התאמה לפורמט",
    text: "נתאים את התלמיד/ה לשיעור פרטני או לקבוצה המתאימה לרמתו.",
  },
  {
    title: "תחילת המפגשים",
    text: "מתחילים ללמוד בצורה מסודרת, רציפה וממוקדת.",
  },
];

const pricingPlans = [
  {
    title: "שיעור פרטני (1 על 1)",
    price: "200 ₪",
    priceNote: "למפגש של 60 דקות",
    bullets: [
      "למידה אישית וממוקדת בבית התלמיד",
      "קצב מותאם אישית וסגירת פערי למידה מהשורש",
      "הכנה ממוקדת למבחנים, עבודות ובגרויות",
      "אידיאלי לבניית ביטחון עצמי במתמטיקה",
      "גמישות בתיאום מועדים לפי הנוחות שלכם",
      "מעקב שוטף אחרי התקדמות והתאמת תוכנית הלמידה",
      "הטבה מיוחדת: שיעור כפול / שני אחים ברצף ב 380 ₪ (במקום 400 ₪)",
    ],
    cta: "תיאום מפגש התאמה",
    message:
      "שלום מעיין, אשמח לתאם מפגש התאמה לשיעור פרטני במתמטיקה.",
    featured: true,
    badge: "מיקוד אישי",
  },
  {
    title: "קבוצות למידה קטנות",
    price: "500 ₪",
    priceNote: "תשלום חודשי קבוע",
    bullets: [
      "קבוצות איכותיות של 4 עד 5 משתתפים",
      "כל מפגש נמשך 60 דקות, ביום ובשעה קבועים",
      "הלמידה מתקיימת בספרייה או בבית תמי",
      "פתיחת הקבוצה מותנית במספר מינימלי של נרשמים",
      "ליווי עקבי ומניעת פערים לאורך שנת הלימודים",
      "דינמיקה קבוצתית מעודדת ומפרה",
      "תשלום מראש לחודש",
    ],
    cta: "בדיקת זמינות בקבוצות",
    message:
      "שלום מעיין, אשמח לבדוק זמינות לקבוצות למידה קטנות במתמטיקה.",
    featured: false,
    badge: "משתלם ועקבי",
  },
];

const testimonials = [
  {
    sender: "אמא",
    side: "sent" as const,
    time: "14:32",
    color: "#25D366",
    text: "אני ממליצה בכל ליבי על מעיין. מעיין מלמדת את שני הילדים שלי בשנתיים האחרונות.\n\nבתקופה הזו חלה התקדמות עצומה ביכולות המתמטיקה שלהם.\n\nמעיין היא גם מורה נהדרת עם המון סבלנות והבנה במתמטיקה. וגם בעלת אישיות נעימה ורגישה. הילדים נהנים מהשיעורים שלה ומצפים להם.\n\nובזכותה, הבן שלי התקבל לתוכנית בר אילן!",
  },
  {
    sender: "אמא",
    side: "received" as const,
    time: "09:18",
    color: "#34B7F1",
    text: "מעין המופלאה\n\nתודה רבה על ההשקעה והטמעת המתמטיקה אצל בתי, התוצאות ניכרות בציונים וציפייה לשיעורים איתך",
  },
  {
    sender: "אמא",
    side: "sent" as const,
    time: "16:05",
    color: "#E91E63",
    text: "מעיין מלווה את ביתי בת ה10 בשנה החולפת במסירות, מקצועיות וסבלנות אין קיץ.\n\nריכזנו בידיה את כל המטלות הלימודיות והדבר מוכיח את עצמו באופן נהדר הן מבחינת ההצלחה במקצוע, הן ברמת הביטחון ותחושת המסוגלות של ביתנו והן מבחינת הראש השקט שלנו כהורים.\n\nלמעיין דרכים יצירתיות, שיטות מעולות ונועם אישי יוצא דופן שגורם לביתנו להתמסר לשיעורים. היא רצינית ואחראית , תמיד מתעניינת אחרי מבחן/הגשת מטלה לימודית משמעותית וניכר שאכפת לה והיא עושה את עבודה מכל הלב. אנחנו לבטח נמשיך עימה לשנה נוספת.\n\nממליצה בחום❤️",
  },
  {
    sender: "אבא",
    side: "received" as const,
    time: "11:47",
    color: "#9C27B0",
    text: "הגענו למעיין כשהבן שלי היה בטוח שמתמטיקה פשוט \"לא בשבילו\".\n\nתוך כמה מפגשים היא הצליחה לעשות שינוי מטורף. פתאום הוא ניגש לשיעורי בית בלי דרמות, עם ביטחון עצמי גבוה והבנה אמיתית של החומר.\n\nממליץ בחום לכל הורה שמחפש ליווי מקצועי ואכפתי.",
  },
  {
    sender: "אמא",
    side: "sent" as const,
    time: "20:21",
    color: "#FF9800",
    text: "אם אתם מחפשים מורה שמשלבת מקצועיות יחד עם קשר אישי ואכפתיות, מעיין היא הכתובת.\n\nהבת שלי עשתה איתה קפיצה מטורפת, הביטחון שלה עלה פלאים, ועברה את הבגרות בציון מעולה. תודה על הכל!",
  },
  {
    sender: "אבא",
    side: "received" as const,
    time: "13:09",
    color: "#00BCD4",
    text: "מעיין היא פשוט נכס. היא מנגישה את המתמטיקה בצורה הכי ברורה וסבלנית.\n\nהילד שלנו סוף סוף מבין את החומר לעומק ולא רק משנן נוסחאות. רואים את השינוי גם בציונים וגם בגישה ללמידה. ממליצים בכל לב.",
  },
];

function DoubleCheckIcon() {
  return (
    <svg className="wa-ticks h-[14px] w-[18px]" viewBox="0 0 16 11" fill="none" aria-hidden="true">
      <path
        d="M11.07 1.14a.6.6 0 01.04.85L6.55 7.2a.6.6 0 01-.88.03L3.2 4.72a.6.6 0 01.85-.85l1.97 1.97 4.16-4.66a.6.6 0 01.89-.04z"
        fill="currentColor"
      />
      <path
        d="M14.57 1.14a.6.6 0 01.04.85L10.05 7.2a.6.6 0 01-.88.03l-.62-.64a.6.6 0 01.04-.85.6.6 0 01.84.04l.2.2 4.05-4.54a.6.6 0 01.89-.04z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#1a2433] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_8%,rgba(255,120,60,0.55),transparent_42%),radial-gradient(ellipse_at_90%_12%,rgba(70,160,255,0.48),transparent_40%),radial-gradient(ellipse_at_75%_85%,rgba(255,80,150,0.42),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(80,230,160,0.42),transparent_42%),radial-gradient(ellipse_at_50%_40%,rgba(255,210,70,0.32),transparent_38%),radial-gradient(ellipse_at_55%_70%,rgba(180,100,255,0.28),transparent_40%)]" />
        <MathBackdrop />

        <div className="relative mx-auto flex min-h-[92svh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="animate-rise relative mb-10">
            <div
              className="absolute -inset-5 rounded-full bg-gradient-to-br from-orange-300/40 via-pink-300/25 to-sky-300/35 blur-md"
              aria-hidden="true"
            />
            <div className="relative h-52 w-52 overflow-hidden rounded-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-2 ring-white/40 sm:h-60 sm:w-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/maayan.jpg"
                alt="מעיין"
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <p className="registration-pulse text-sm font-medium text-white sm:text-base">
            נפתחה ההרשמה לשנת הלימודים הקרובה
          </p>

          <h1 className="animate-rise-delay-1 mt-4 font-[family-name:var(--font-rubik)] text-[clamp(1.75rem,4.2vw,3rem)] font-medium leading-[1.25] tracking-tight">
            שיעורים פרטניים וקבוצתיים במתמטיקה
            <br />
            לכל הרמות
          </h1>

          <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
            ליווי מקצועי במתמטיקה, במרכז תל אביב
          </p>

          <div className="animate-rise-delay-3 mt-10">
            <WhatsAppButton label="ליצירת קשר" />
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-2xl" data-reveal="">
          <h2 className="font-[family-name:var(--font-rubik)] text-3xl font-semibold leading-tight text-[var(--color-accent-deep)] sm:text-4xl">
            נעים להכיר, שמי מעיין
          </h2>
          <span className="title-underline" aria-hidden="true" />
          <div className="mt-8 space-y-4 text-base leading-[1.85] text-[var(--color-ink-soft)]">
            <p>
              בוגרת תואר ראשון במדעי המחשב בהצטיינות, עם חמש שנות ניסיון בהוראת
              מתמטיקה מהיסודי ועד הבגרות.
            </p>
            <p>
              בשיעורים שלנו נלמד מתמטיקה מהבסיס בשילוב אסטרטגיות למידה
              תוך עבודה צמודה לתוכנית הלימודים של משרד החינוך.
            </p>
            <p>
              אני שמה דגש על: ביסוס הבנה עמוקה, כלים להתמודדות עצמאית, וביטחון
              בדרך להצלחה.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Formats ──────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-20 sm:px-10 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {formatCards.map((item, i) => (
              <div
                key={item.title}
                data-reveal=""
                data-reveal-delay={String(i * 70)}
                className="check-card flex items-start gap-4 p-5 sm:p-6"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-rubik)] text-lg font-semibold text-[var(--color-accent-deep)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────── */}
      <section className="section-alt px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p
            data-reveal=""
            className="mb-12 font-[family-name:var(--font-rubik)] text-2xl font-semibold text-[var(--color-accent-deep)] sm:text-3xl"
          >
            ארבעה שלבים פשוטים עד לתחילת הלימודים
          </p>

          <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                data-reveal=""
                data-reveal-delay={String(i * 80)}
                className="step-card relative list-none p-6 pt-8"
              >
                <span className="absolute -top-3 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-deep)] font-[family-name:var(--font-rubik)] text-sm font-semibold text-white shadow-sm">
                  {i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-rubik)] text-lg font-semibold text-[var(--color-accent-deep)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div data-reveal="" className="mb-10">
            <h2 className="font-[family-name:var(--font-rubik)] text-3xl font-semibold text-[var(--color-accent-deep)] sm:text-4xl">
              מה הורים מספרים
            </h2>
            <span className="title-underline" aria-hidden="true" />
          </div>

          <div data-reveal="" className="wa-chat" dir="rtl">
            <div className="wa-thread">
              {testimonials.map((item, i) => {
                const isSent = item.side === "sent";
                return (
                  <div
                    key={`${item.sender}-${item.time}-${i}`}
                    data-reveal=""
                    data-reveal-delay={String(i * 70)}
                    className={`wa-row ${isSent ? "wa-row--sent" : "wa-row--received"}`}
                  >
                    <span
                      className="wa-avatar"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    >
                      א
                    </span>
                    <div
                      className={`wa-bubble ${isSent ? "wa-bubble--sent" : "wa-bubble--received"}`}
                    >
                      <p className="wa-sender" style={{ color: item.color }}>
                        {item.sender}
                      </p>
                      <p className="whitespace-pre-line text-[var(--color-ink)]">{item.text}</p>
                      <div className="wa-meta">
                        <span className="wa-time">{item.time}</span>
                        <DoubleCheckIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-surface-alt)] px-6 py-14 sm:px-10 sm:py-16">
        <div className="relative mx-auto max-w-3xl">
          <div data-reveal="" className="mb-8 text-center">
            <h2 className="font-[family-name:var(--font-rubik)] text-2xl font-semibold text-[var(--color-accent-deep)] sm:text-3xl">
              מסלולים ותמחור
            </h2>
            <span className="title-underline mx-auto" aria-hidden="true" />
            <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-ink-soft)]">
              בחרו את המסלול שמתאים לקצב, ליעדים ולסגנון הלמידה שלכם
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {pricingPlans.map((plan, i) => {
              const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`;
              return (
                <article
                  key={plan.title}
                  data-reveal=""
                  data-reveal-delay={String(i * 90)}
                  className={`pricing-card flex flex-col p-4 sm:p-5 ${
                    plan.featured ? "pricing-card--featured" : ""
                  }`}
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${
                          plan.featured
                            ? "bg-[var(--color-accent)] text-white"
                            : "bg-[var(--color-accent-bg)] text-[var(--color-accent-deep)]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                      <h3 className="mt-2 font-[family-name:var(--font-rubik)] text-base font-semibold text-[var(--color-accent-deep)] sm:text-lg">
                        {plan.title}
                      </h3>
                    </div>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-[family-name:var(--font-rubik)] text-sm font-medium ${
                        plan.featured
                          ? "bg-[var(--color-accent-deep)] text-white"
                          : "bg-[var(--color-accent-bg)] text-[var(--color-accent)]"
                      }`}
                      aria-hidden="true"
                    >
                      {plan.featured ? "∑" : "π"}
                    </span>
                  </div>

                  <div className="mb-4 border-b border-[var(--color-border)] pb-3">
                    <p className="font-[family-name:var(--font-rubik)] text-xl font-semibold tracking-tight text-[var(--color-accent-deep)] sm:text-2xl">
                      {plan.price}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink-soft)]">
                      {plan.priceNote}
                    </p>
                  </div>

                  <ul className="mb-5 flex flex-1 flex-col gap-2">
                    {plan.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--color-ink)] sm:text-sm"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-bg)] text-[var(--color-accent)]">
                          <CheckIcon />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm ${
                      plan.featured
                        ? "bg-[var(--color-whatsapp)] text-white hover:bg-[var(--color-whatsapp-hover)] focus-visible:outline-[var(--color-whatsapp)]"
                        : "bg-[var(--color-accent-deep)] text-white hover:bg-[var(--color-accent)] focus-visible:outline-[var(--color-accent-deep)]"
                    }`}
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                    {plan.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[var(--color-dark)] px-6 py-20 text-white sm:px-10 sm:py-28"
      >
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div data-reveal="" className="relative mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-rubik)] text-3xl font-medium leading-tight sm:text-4xl">
            לתיאום שיחה ופרטים נוספים
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton label="ליצירת קשר בוואטסאפ" />
            <a
              href="tel:+972526460735"
              className="text-sm text-white/35 transition-colors duration-300 hover:text-white/60"
            >
              0526460735
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[var(--color-dark)] px-6 pb-10 pt-6 text-center text-sm text-white/25">
        <p>מעיין · שיעורי מתמטיקה · מרכז תל אביב</p>
      </footer>

      {/* Fixed WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="יצירת קשר בוואטסאפ"
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-[0_8px_24px_-6px_rgba(31,173,102,0.65)] transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-whatsapp-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-whatsapp)] sm:bottom-6 sm:left-6 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </main>
  );
}
