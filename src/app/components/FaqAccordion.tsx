"use client";

import { useState } from "react";

const faqs = [
  {
    question: "מה קורה אם הילד מפספס שיעור?",
    answer:
      "התשלום החוגי הינו קבוע ומבטיח את מקומו של התלמיד בקבוצה, ולכן אין החזר או קיזוז על היעדרות פרטנית.\nעם זאת, בכל שבוע התלמידים יקבלו סיכום של החומר הנלמד וחומרי תרגול כדי לוודא שאף אחד לא נשאר מאחור.",
  },
  {
    question: "איך נקבעת החלוקה לקבוצות?",
    answer:
      "הקבוצות מחולקות בצורה קפדנית הן לפי שכבת הגיל (כיתה) והן לפי הרמה והקצב האישי של התלמידים.\nמטרת מפגש ההתאמה הראשון היא לוודא שהילד ישובץ בקבוצה שבה ירגיש הכי בנוח לפרוח.",
  },
  {
    question: "האם החוג מתאים גם לילדים שמאוד מתקשים וגם לילדים שרוצים להצטיין?",
    answer:
      "לגמרי.\nבזכות הפורמט המצומצם, אני בונה קבוצות ייעודיות לחיזוק וסגירת פערים, לצד קבוצות נפרדות של העשרה ומצוינות לתלמידים שרוצים לרוץ קדימה מעבר לחומר של הכיתה.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-14 space-y-3">
      {faqs.map((item, i) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 ease-out hover:border-[var(--color-accent)]/25 hover:shadow-md"
        >
          <button
            id={`faq-btn-${i}`}
            aria-controls={`faq-answer-${i}`}
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start gap-5 p-7 text-right"
          >
            <span
              className="mt-0.5 shrink-0 font-[family-name:var(--font-rubik)] text-sm font-black tabular-nums text-[var(--color-accent)]/30"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="flex-1 font-[family-name:var(--font-rubik)] text-lg font-bold text-[var(--color-ink)]">
              {item.question}
            </h3>
            <svg
              className={`mt-1 h-4 w-4 shrink-0 text-[var(--color-ink-muted)] transition-transform duration-300 ease-out ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            className={`grid transition-all duration-300 ease-out ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex gap-5 px-7 pb-7">
                <span className="w-8 shrink-0" aria-hidden="true" />
                <p className="whitespace-pre-line leading-relaxed text-[var(--color-ink-soft)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
