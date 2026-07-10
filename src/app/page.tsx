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
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-whatsapp)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_28px_-12px_rgba(31,173,102,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-whatsapp-hover)] hover:shadow-[0_16px_32px_-12px_rgba(31,173,102,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sea)] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}

const groupAdvantages = [
  {
    title: "למידה חברתית שמחזקת",
    text: "תלמידים לומדים יחד, שואלים בלי בושה ומגלים שהם לא לבד מול החומר — והביטחון עולה.",
  },
  {
    title: "קצב מותאם, לא לבד ולא המוני",
    text: "בקבוצה קטנה אפשר לעצור, להסביר שוב ולהתקדם יחד — בלי להישאר מאחור ובלי להשתעמם.",
  },
  {
    title: "מוטיבציה מהסביבה",
    text: "כשחברים מתקדמים יחד נוצרת אנרגיה חיובית: תרגול הופך למשחק, והצלחה של אחד מעודדת את כולם.",
  },
  {
    title: "מחיר נגיש עם יחס אישי",
    text: "מקבלים את היתרון של ליווי צמוד — במחיר חודשי ברור ונוח להורים.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "הבנת הצרכים",
    text: "במפגש הראשון אנחנו מבינים בדיוק איפה האתגרים ובאיזה אופן הכי נכון לעזור לילד שלך לצמוח.",
  },
  {
    step: "02",
    title: "הלמידה השוטפת",
    text: "מפשילים שרוולים, משלימים פערים ומבצעים מעקב צמוד אחרי ההתקדמות האישית של כל תלמיד.",
  },
  {
    step: "03",
    title: "הכנה ממוקדת למבחנים",
    text: "בניית ביטחון, טיפים מנטליים וכלים להתמודדות עם לחץ בזמן אמת — כדי למנוע \"בלאקאאוט\" ולתרגם את הידע להצלחה במבחן.",
  },
];

const registrationSteps = [
  {
    step: "01",
    title: "הרשמה לשנה הקרובה",
    text: "פותחים מקום בקבוצה המתאימה — לפי כיתה ולפי רמה.",
  },
  {
    step: "02",
    title: "מפגש היכרות והתאמת רמה",
    text: "המפגש הראשון כולל מבדק קצר, כדי למקם את התלמיד בסביבה שמחזקת אותו.",
  },
  {
    step: "03",
    title: "התקדמות לאורך השנה",
    text: "כשתלמיד מתחזק — מעבירים אותו לקבוצה חזקה יותר, כדי שימשיך לצמוח.",
  },
];

const credentials = [
  "בוגרת תואר ראשון (B.Sc.) במדעי המחשב בהצטיינות.",
  "מורה פרטית למתמטיקה ומדעי המחשב — מיסודי ועד תיכון.",
  "ניסיון רב עם יחס אישי לכל תלמיד, חיזוק והכנה למבחנים.",
  "התאמה מלאה למערכת: עבודה מדויקת לפי תוכניות הלימוד של משרד החינוך ובתי הספר במרכז העיר.",
];

const testimonials = [
  {
    quote:
      "ראיתי שיפור ניכר לא רק בציונים, אלא בעיקר בגישה של הבן שלי למקצוע — הוא הפך להרבה יותר אופטימי ובטוח בעצמו.",
    attribution: "הורה לתלמיד",
  },
  {
    quote: "קיבלנו את כל התמיכה, המקצועיות והסבלנות שהיינו צריכים באווירה נעימה ומרימה.",
    attribution: "הורה לתלמידה",
  },
];

const faqs = [
  {
    question: "מה קורה אם הילד מפספס שיעור?",
    answer:
      "התשלום החוגי הינו קבוע ומבטיח את מקומו של התלמיד בקבוצה, ולכן אין החזר או קיזוז על היעדרות פרטנית. עם זאת, בכל שבוע התלמידים יקבלו סיכום של החומר הנלמד וחומרי תרגול כדי לוודא שאף אחד לא נשאר מאחור.",
  },
  {
    question: "איך נקבעת החלוקה לקבוצות?",
    answer:
      "הקבוצות מחולקות בצורה קפדנית הן לפי שכבת הגיל (כיתה) והן לפי הרמה והקצב האישי של התלמידים. מטרת מפגש ההתאמה הראשון היא לוודא שהילד ישובץ בקבוצה שבה ירגיש הכי בנוח לפרוח.",
  },
  {
    question: "האם החוג מתאים גם לילדים שמאוד מתקשים וגם לילדים שרוצים להצטיין?",
    answer:
      "לגמרי. בזכות הפורמט המצומצם, אני בונה קבוצות ייעודיות לחיזוק וסגירת פערים, לצד קבוצות נפרדות של העשרה ומצוינות לתלמידים שרוצים לרוץ קדימה מעבר לחומר של הכיתה.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
        <div className="absolute inset-0 animate-soft-zoom overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-classroom.jpg"
            alt=""
            className="h-full w-full scale-110 object-cover object-[center_35%] blur-[3px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(19,78,72,0.93)] via-[rgba(19,78,72,0.78)] to-[rgba(20,42,40,0.55)]" />
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-10 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
          <p className="animate-rise inline-flex w-fit items-center whitespace-nowrap rounded-lg bg-white/12 px-3.5 py-1.5 text-sm font-medium tracking-wide text-white/95 ring-1 ring-white/20 backdrop-blur-sm">
            נפתחה ההרשמה לשנת הלימודים הקרובה
          </p>
          <p className="animate-rise-delay-1 mt-6 whitespace-nowrap font-[family-name:var(--font-rubik)] text-[clamp(1.35rem,5.2vw,4.5rem)] font-medium tracking-tight">
            לומדים מתמטיקה ביחד
          </p>
          <h1 className="animate-rise-delay-2 mt-5 whitespace-nowrap font-[family-name:var(--font-rubik)] text-[clamp(0.95rem,3.4vw,2.35rem)] font-medium leading-none text-white/95">
            הרגע שבו המתמטיקה הופכת מובנת – קרוב מתמיד.
          </h1>
          <p className="animate-rise-delay-3 mt-5 whitespace-nowrap text-[clamp(0.78rem,2.4vw,1.25rem)] leading-none text-white/80">
            למידה חווייתית וחברתית בקבוצות קטנות במרכז תל אביב, בהתאמה מלאה לדרישות משרד החינוך.
          </p>
          <div className="mt-9 animate-rise-delay-3">
            <WhatsAppButton label="להרשמה בוואטסאפ" />
          </div>
        </div>
      </section>

      {/* Challenge + solution */}
      <section className="bg-[var(--color-foam)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              למה זה קורה?
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                האתגר בבית הספר
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
                עם מעל 35 תלמידים בכיתה ומורה לחוץ שצריך להספיק את החומר, כמעט
                בלתי אפשרי להעניק למידה מותאמת אישית. השיטה של בית הספר פשוט לא
                מתאימה לכולם.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                הפתרון אצלנו
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
                כאן אנחנו נכנסים לתמונה. אצלנו לא רק פותרים תרגילים בצורה טכנית —
                אנחנו מפתחים את היכולות האישיות של הילד, מקנים לו בסיס חזק וכלים
                להתמודד עם 100% מהחומר, כדי שיגיע עם ביטחון עצמי מלא למבחן.
              </p>
            </div>
          </div>

          <p className="mt-14 max-w-3xl font-[family-name:var(--font-rubik)] text-2xl font-medium leading-snug text-[var(--color-sea-deep)] sm:text-3xl">
            הרגע הזה שהחומר הופך מובן והתרגיל נפתר — קרוב מתמיד.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-[var(--color-mist)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              className="animate-drift absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--color-sand)]/80 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[1.75rem] bg-[var(--color-foam)] shadow-[0_24px_60px_-28px_rgba(20,42,40,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/maayan.jpg"
                alt="מעיין — מורה פרטית למתמטיקה ומדעי המחשב"
                className="aspect-[4/5] h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              היכרות קצרה
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
              היי לכולם! שמי מעיין
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                בוגרת תואר ראשון במדעי המחשב בהצטיינות. מורה פרטית למתמטיקה
                ומדעי המחשב לגילאי יסודי עד תיכון — עם ניסיון רב ויחס אישי לכל
                תלמיד.
              </p>
              <p>
                מזמינה אתכם לפנות אליי לשיעורים פרטיים, חיזוק, הכנה למבחנים ועוד —
                באווירה נעימה ותומכת.
              </p>
              <p>
                זה הזמן לחזק את היכולות לקראת סוף השנה ולצמצם פערים בחופש הגדול,
                כדי להגיע מוכנים לשנה הבאה.
              </p>
            </div>

            <div className="mt-10 border-t border-[var(--color-sand)] pt-8">
              <h3 className="font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                למה ללמוד איתי?
              </h3>
              <ul className="mt-5 space-y-3.5">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--color-ink-soft)]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-leaf)]"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method + group advantages */}
      <section className="relative overflow-hidden bg-[var(--color-foam)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              שיטת הלימוד
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
              למה דווקא בקבוצה קטנה?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              אנחנו מלווים את התלמידים יד ביד בדרך להצלחה. השילוב של קבוצה קטנה
              ומענה ממוקד מאפשר להם להבין מתמטיקה, ועל הדרך גם לחייך.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {groupAdvantages.map((item) => (
              <div key={item.title}>
                <h3 className="font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl border-t border-[var(--color-sand)] pt-12">
            <h3 className="font-[family-name:var(--font-rubik)] text-2xl font-medium text-[var(--color-ink)]">
              חומרי לימוד מותאמים אישית
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              כל תלמיד מקבל חומרי עזר, דפי תרגול ממוקדים וסיכומים שאני מכינה
              בהתאמה מדויקת לחומר הנלמד בכיתה שלו. אין צורך ברכישת ספרים נוספים —
              אני דואגת להכל.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-mist)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              איך זה עובד
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
              מהשיעור הראשון ועד המבחן
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {howItWorks.map((item) => (
              <li key={item.step}>
                <p className="font-[family-name:var(--font-rubik)] text-sm font-medium text-[var(--color-leaf)]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Value / future */}
      <section className="bg-[var(--color-sea-deep)] px-6 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-rubik)] text-2xl font-medium leading-snug sm:text-3xl">
            הצלחה במתמטיקה היא לא רק ציון על דף — היא משפיעה באופן ישיר על עתידו
            התעסוקתי, האקדמי והכלכלי של הילד שלך.
          </p>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-[var(--color-foam)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              הרשמה לשנת הלימודים הקרובה
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
              מתחילים נכון — עם התאמה מדויקת
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              כרגע מתקיימת הרשמה לשנת הלימודים הבאה. הקבוצות מחולקות לפי כיתות
              ולפי רמות, כדי שכל תלמיד ילמד בסביבה שמתאימה לו ותחזק אותו — לא
              תסכל אותו ולא תעכב אותו.
            </p>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {registrationSteps.map((item) => (
              <li key={item.step}>
                <p className="font-[family-name:var(--font-rubik)] text-sm font-medium text-[var(--color-leaf)]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{item.text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            חשוב לי שהתלמיד יהיה במקום הנכון עבורו. אם לאורך השנה הוא מתחזק —
            מעבירים אותו לקבוצה חזקה יותר, כדי שהאתגר יישאר מדויק וההתקדמות תמשיך.
          </p>
        </div>
      </section>

      {/* Location + trust */}
      <section className="bg-[var(--color-mist)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              מיקום
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)]">
              במרכז תל אביב
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              השיעורים יתקיימו במרכז תל אביב. המיקום המדויק ייקבע בהתאם לכמות
              הנרשמים — כדי למצוא את המקום האולטימטיבי לנוחות ההורים ולנוחות
              התלמידים.
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              אמינות מקצועית
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)]">
              בתי ספר ומשרד החינוך
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              ההיכרות עם בתי הספר במרכז העיר, יחד עם עבודה צמודה לפי דרישות משרד
              החינוך, מבטיחה שהשיעורים מחברים בין מה שנלמד בחוג לבין מה שנדרש
              בכיתה — בצורה מסודרת, ברורה ומקצועית.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-foam)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
              מה אומרים ההורים
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
              שינוי שמרגישים גם בבית
            </h2>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            {testimonials.map((item) => (
              <blockquote key={item.quote}>
                <p className="font-[family-name:var(--font-rubik)] text-xl font-medium leading-relaxed text-[var(--color-ink)] sm:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 text-[var(--color-ink-soft)]">— {item.attribution}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="bg-[var(--color-mist)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
            מחיר חודשי
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">
            השקעה פשוטה וברורה
          </h2>
          <p className="mt-10 font-[family-name:var(--font-rubik)] text-6xl font-medium tracking-tight text-[var(--color-sea-deep)] sm:text-7xl">
            ₪500
          </p>
          <p className="mt-3 text-lg text-[var(--color-ink-soft)]">לחודש · לכל תלמיד</p>
          <p className="mx-auto mt-6 max-w-md text-[var(--color-ink-soft)]">
            מחיר חודשי קבוע, בלי הפתעות — כדי שתוכלו להתמקד במה שחשוב: ההתקדמות של
            הילד.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-foam)] px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-[family-name:var(--font-rubik)] text-sm font-medium tracking-wide text-[var(--color-leaf)]">
            שאלות נפוצות
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug text-[var(--color-ink)] sm:text-4xl">
            תשובות לשאלות שהורים שואלים
          </h2>

          <div className="mt-12 divide-y divide-[var(--color-sand)] border-y border-[var(--color-sand)]">
            {faqs.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="font-[family-name:var(--font-rubik)] text-xl font-medium text-[var(--color-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[var(--color-sea-deep)] px-6 py-24 text-white sm:px-8 sm:py-28">
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-rubik)] text-3xl font-medium leading-snug sm:text-4xl">
            רוצים לשריין מקום לשנה הקרובה?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            שלחו הודעה בוואטסאפ — נתחיל ממפגש היכרות והתאמת רמה, ונמצא יחד את
            הקבוצה שתתאים לילד שלכם.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <WhatsAppButton label="שלחו הודעה למעיין" />
            <a
              href="tel:0526460735"
              className="text-sm text-white/60 transition hover:text-white"
            >
              או התקשרו: 052-646-0735
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--color-sea-deep)] px-6 pb-10 text-center text-sm text-white/45">
        <p>מעיין · שיעורי מתמטיקה בקבוצות קטנות · מרכז תל אביב</p>
      </footer>
    </main>
  );
}
