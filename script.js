"use strict";

// Intentionally session-only: no cookies, storage, tracking or network requests.
const translations = {
  ar: {
    skip: "انتقل إلى المحتوى", location: "عمّان، الأردن", intro: "اللياقة. القيادة. التكنولوجيا.",
    firstName: "معاذ", lastName: "أبو عليم.",
    headline: "قيادي في قطاع اللياقة | مدرّب ومعلّم | رائد أعمال تقني",
    tagline: "أجمع بين اللياقة والقيادة والتكنولوجيا.", save: "حفظ جهة الاتصال", whatsapp: "واتساب",
    linkedinNote: "بانتظار التحقق من رابط الملف", experienceShort: "أكثر من ١٢ عاماً في قطاع اللياقة", founderShort: "مؤسس FITNEX AI", explore: "اكتشف ↓",
    aboutTitle: "الإنسان أولاً.\nوالإمكانات مصدر إلهام.", aboutLabel: "نبذة عنّي",
    aboutText: "يجمع عملي بين اللياقة البدنية والتعليم والتكنولوجيا. بخبرة تزيد على ١٢ عاماً في قطاع اللياقة وخلفية أكاديمية في هندسة الحاسوب، أوظّف خبرتي العملية وشغفي بالقيادة والابتكار.",
    aboutLocation: "مقيم في عمّان، الأردن.", experienceTitle: "الخبرة\nالمهنية.", industry: "اللياقة والقيادة", role: "مدير قسم اللياقة البدنية",
    experienceText: "أكثر من ١٢ عاماً من الخبرة في قطاع اللياقة البدنية.", qualificationsTitle: "معرفة.\nتتحوّل إلى ممارسة.", qualificationsLabel: "الشهادات والتعليم",
    activeiq: "مدرّس ومقيّم معتمد من Active IQ", uk: "المملكة المتحدة", nasmpt: "مدرّب شخصي معتمد من NASM", personalTraining: "التدريب الشخصي",
    nasmces: "أخصائي التمارين التصحيحية من NASM", corrective: "التمارين التصحيحية", diploma: "دبلوم في الرياضة", sport: "التعليم الرياضي",
    degree: "بكالوريوس في هندسة الحاسوب", higherEducation: "التعليم الجامعي", entrepreneurship: "٠٤ / ريادة الأعمال", founder: "المؤسس",
    ventureStatement: "خبرة في اللياقة.\nوآفاق ذكية.", ventureDescription: "منصة لإدارة اللياقة البدنية مدعومة بالذكاء الاصطناعي، صُمّمت لربط أداء المدرّبين وتقدّم العملاء بذكاء إدارة الأندية الرياضية.",
    visit: "اكتشف FITNEX AI", contactIndex: "٠٥ / التواصل", contactTitle: "لنتواصل.", contactCopy: "كل تعاون يبدأ بمحادثة.", message: "تواصل عبر واتساب", footer: "اللياقة. القيادة. التكنولوجيا.", backTop: "إلى الأعلى ↑"
  }
};

const elements = [...document.querySelectorAll("[data-i18n]")];
// Capture the English source so the page remains useful when JavaScript is off.
const english = new Map(elements.map(element => [element, element.innerHTML]));
const toggle = document.getElementById("language-toggle");
const englishTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const englishDescription = description.content;

toggle.addEventListener("click", () => {
  const arabic = document.documentElement.lang !== "ar";
  document.documentElement.lang = arabic ? "ar" : "en";
  document.documentElement.dir = arabic ? "rtl" : "ltr";
  for (const element of elements) {
    if (arabic) {
      element.textContent = translations.ar[element.dataset.i18n];
      element.style.whiteSpace = "pre-line";
    } else {
      element.innerHTML = english.get(element);
      element.style.whiteSpace = "";
    }
  }
  toggle.textContent = arabic ? "English ↗" : "العربية ↗";
  toggle.lang = arabic ? "en" : "ar";
  toggle.setAttribute("aria-label", arabic ? "Switch to English" : "Switch to Arabic");
  document.title = arabic ? "معاذ أبو عليم — اللياقة والقيادة والتكنولوجيا" : englishTitle;
  description.content = arabic ? "معاذ أبو عليم، قيادي في قطاع اللياقة ومعلّم ورائد أعمال تقني في عمّان، الأردن. تواصل واحفظ معلومات الاتصال." : englishDescription;
  document.querySelector('.phone').setAttribute('aria-label', arabic ? "اتصل على +962 79 910 0115" : "Call +962 79 910 0115");
  document.querySelector('meta[property="og:locale"]').content = arabic ? "ar_JO" : "en_US";
  document.querySelector('meta[property="og:locale:alternate"]').content = arabic ? "en_US" : "ar_JO";
});
