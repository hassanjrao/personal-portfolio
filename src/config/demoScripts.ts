import type { DemoId } from "./site";

export type DemoTurn = {
  /** `system` turns render as tool-call chips, not chat bubbles. */
  from: "customer" | "agent" | "system";
  text: string;
  /** Clock label shown against the turn, e.g. "23:40". */
  at?: string;
  /** Milliseconds to wait before this turn appears during playback. */
  wait?: number;
};

type Scripts = Record<DemoId, DemoTurn[]>;

const en: Scripts = {
  "moving-quote": [
    {
      from: "customer",
      at: "23:40",
      text: "Hi — I need a quote for moving a 3-bedroom villa from Al Khuwair to Muscat Hills.",
      wait: 400,
    },
    {
      from: "system",
      text: "Lead #4417 created in CRM · source: shared lead platform",
      wait: 600,
    },
    {
      from: "agent",
      at: "23:40",
      text: "Happy to help. I can give you an indicative price in a couple of minutes. When are you planning to move?",
      wait: 1400,
    },
    { from: "customer", at: "23:41", text: "Around the 18th of next month.", wait: 1600 },
    {
      from: "agent",
      at: "23:41",
      text: "Noted. Two quick things that change the price: which floor is each property on, and is there lift access?",
      wait: 1500,
    },
    {
      from: "customer",
      at: "23:42",
      text: "Current place is 2nd floor, no lift. New villa is ground floor with driveway access.",
      wait: 1900,
    },
    {
      from: "system",
      text: "Rate card applied · 3BR villa · 14 km · 2nd floor carry, no lift · standard season",
      wait: 900,
    },
    {
      from: "agent",
      at: "23:42",
      text: "Based on a standard 3-bedroom load that's OMR 320–390, including packing materials, two vehicles and a four-person crew. The no-lift carry is what puts it at the upper end.",
      wait: 1700,
    },
    {
      from: "customer",
      at: "23:43",
      text: "That works. Can someone come and look before we confirm?",
      wait: 1500,
    },
    {
      from: "agent",
      at: "23:43",
      text: "Of course. I have Tuesday 10:00 or Wednesday 16:00 free for a survey — or we can do it by video call in 15 minutes if that's easier.",
      wait: 1500,
    },
    { from: "customer", at: "23:43", text: "Tuesday 10am please.", wait: 1400 },
    {
      from: "system",
      text: "Survey booked Tue 10:00 · added to surveyor calendar · CRM updated · transcript attached",
      wait: 900,
    },
    {
      from: "agent",
      at: "23:43",
      text: "Booked. You'll get a confirmation by SMS shortly, and Yousef will call 30 minutes before he arrives. Anything else I can check for you tonight?",
      wait: 1400,
    },
  ],
  tracking: [
    {
      from: "customer",
      at: "14:15",
      text: "Where is my shipment? Reference 4471102.",
      wait: 400,
    },
    { from: "system", text: "TMS lookup · AWB 4471102 · tenant scope enforced", wait: 800 },
    {
      from: "agent",
      at: "14:15",
      text: "It's out for delivery. Last scan was 08:42 today at the Ghala hub, and it's on route 12 with an estimated delivery window of 15:00–18:00 today.",
      wait: 1300,
    },
    {
      from: "customer",
      at: "14:16",
      text: "Nobody will be at the office after 5. Can it come earlier?",
      wait: 1600,
    },
    {
      from: "system",
      text: "Route 12 · 6 stops remaining · earliest re-sequence 16:10",
      wait: 900,
    },
    {
      from: "agent",
      at: "14:16",
      text: "I can ask the driver to prioritise it — the earliest realistic slot is around 16:10. Shall I request that, or would you rather move it to tomorrow morning?",
      wait: 1400,
    },
    { from: "customer", at: "14:16", text: "Prioritise it today please.", wait: 1300 },
    {
      from: "system",
      text: "Priority flag sent to driver app · customer notified · exception logged",
      wait: 800,
    },
    {
      from: "agent",
      at: "14:16",
      text: "Done. The driver has been notified and you'll get an SMS when he's two stops away. I've also attached the signed proof of delivery template so your team knows what to expect.",
      wait: 1300,
    },
  ],
  "after-hours": [
    {
      from: "system",
      text: "Incoming call 21:12 · main line · no agents available · AI agent answered on ring 2",
      wait: 400,
    },
    {
      from: "agent",
      at: "21:12",
      text: "Good evening, thanks for calling. How can I help?",
      wait: 900,
    },
    {
      from: "customer",
      at: "21:12",
      text: "Hi, do you handle office relocations? We've got about forty desks to move.",
      wait: 1500,
    },
    {
      from: "agent",
      at: "21:12",
      text: "We do. Forty desks is comfortably within what we handle. Is this a single-day move, or would it need to be phased over a weekend?",
      wait: 1400,
    },
    {
      from: "customer",
      at: "21:13",
      text: "Over a weekend ideally — we can't have downtime on a working day.",
      wait: 1700,
    },
    {
      from: "system",
      text: "Service check · commercial relocation · weekend crew available from 12 Aug",
      wait: 900,
    },
    {
      from: "agent",
      at: "21:13",
      text: "Weekend crews are available from the 12th of August onwards. For a forty-desk office with IT disconnection and reconnection, you'd be looking at a two-crew weekend job. I'd want a site visit before quoting a firm number.",
      wait: 1600,
    },
    {
      from: "customer",
      at: "21:14",
      text: "That's fine. Can someone call me tomorrow?",
      wait: 1400,
    },
    {
      from: "agent",
      at: "21:14",
      text: "Absolutely. Can I take the best number and a rough address for the site visit?",
      wait: 1200,
    },
    {
      from: "customer",
      at: "21:14",
      text: "9x xxx xxx, and we're in Ruwi, near the old bank building.",
      wait: 1500,
    },
    {
      from: "system",
      text: "Booking written to CRM · commercial pipeline · callback task assigned 09:00 · SMS confirmation sent · recording + transcript stored",
      wait: 900,
    },
    {
      from: "agent",
      at: "21:15",
      text: "Perfect — that's logged. Someone from the commercial team will call you at 9am tomorrow. Thanks for calling, and have a good evening.",
      wait: 1300,
    },
  ],
};

const ar: Scripts = {
  "moving-quote": [
    {
      from: "customer",
      at: "٢٣:٤٠",
      text: "مساء الخير — أحتاج عرض سعر لنقل فيلا من ثلاث غرف من الخوير إلى مرتفعات مسقط.",
      wait: 400,
    },
    { from: "system", text: "إنشاء العميل المحتمل رقم ٤٤١٧ في نظام العملاء", wait: 600 },
    {
      from: "agent",
      at: "٢٣:٤٠",
      text: "بكل سرور. أستطيع إعطاءك سعرًا تقريبيًا خلال دقيقتين. متى تخطط للنقل؟",
      wait: 1400,
    },
    { from: "customer", at: "٢٣:٤١", text: "تقريبًا يوم ١٨ من الشهر القادم.", wait: 1600 },
    {
      from: "agent",
      at: "٢٣:٤١",
      text: "تمام. أمران يؤثران على السعر: في أي طابق كل عقار، وهل يوجد مصعد؟",
      wait: 1500,
    },
    {
      from: "customer",
      at: "٢٣:٤٢",
      text: "السكن الحالي بالطابق الثاني بدون مصعد، والفيلا الجديدة أرضية مع مدخل للسيارة.",
      wait: 1900,
    },
    {
      from: "system",
      text: "تطبيق جدول التعريفات · فيلا ٣ غرف · ١٤ كم · حمل من الطابق الثاني بدون مصعد",
      wait: 900,
    },
    {
      from: "agent",
      at: "٢٣:٤٢",
      text: "بناءً على حمولة فيلا من ثلاث غرف، التقدير من ٣٢٠ إلى ٣٩٠ ريالًا عمانيًا شاملًا مواد التغليف ومركبتين وطاقم من أربعة أفراد. الحمل بدون مصعد هو ما يرفع السعر للحد الأعلى.",
      wait: 1700,
    },
    {
      from: "customer",
      at: "٢٣:٤٣",
      text: "مناسب. هل يمكن لأحد المعاينة قبل التأكيد؟",
      wait: 1500,
    },
    {
      from: "agent",
      at: "٢٣:٤٣",
      text: "بالطبع. لديّ موعد الثلاثاء ١٠:٠٠ أو الأربعاء ١٦:٠٠ للمعاينة — أو يمكننا إجراؤها عبر مكالمة فيديو خلال ١٥ دقيقة إن كان أسهل.",
      wait: 1500,
    },
    { from: "customer", at: "٢٣:٤٣", text: "الثلاثاء العاشرة صباحًا من فضلك.", wait: 1400 },
    {
      from: "system",
      text: "حجز المعاينة الثلاثاء ١٠:٠٠ · إضافة لتقويم المعاين · تحديث نظام العملاء",
      wait: 900,
    },
    {
      from: "agent",
      at: "٢٣:٤٣",
      text: "تم الحجز. ستصلك رسالة تأكيد قريبًا، وسيتصل بك يوسف قبل وصوله بثلاثين دقيقة. هل من شيء آخر أتحقق منه لك الليلة؟",
      wait: 1400,
    },
  ],
  tracking: [
    { from: "customer", at: "١٤:١٥", text: "أين شحنتي؟ رقم المرجع ٤٤٧١١٠٢.", wait: 400 },
    { from: "system", text: "استعلام من نظام النقل · بوليصة ٤٤٧١١٠٢", wait: 800 },
    {
      from: "agent",
      at: "١٤:١٥",
      text: "الشحنة خارجة للتسليم. آخر مسح كان الساعة ٠٨:٤٢ اليوم في مركز غلا، وهي على المسار ١٢ ضمن نافذة تسليم متوقعة بين ١٥:٠٠ و ١٨:٠٠ اليوم.",
      wait: 1300,
    },
    {
      from: "customer",
      at: "١٤:١٦",
      text: "لن يكون أحد في المكتب بعد الخامسة. هل يمكن تقديمها؟",
      wait: 1600,
    },
    { from: "system", text: "المسار ١٢ · ٦ محطات متبقية · أقرب إعادة ترتيب ١٦:١٠", wait: 900 },
    {
      from: "agent",
      at: "١٤:١٦",
      text: "أستطيع أن أطلب من السائق إعطاءها الأولوية — أقرب موعد واقعي حوالي ١٦:١٠. هل أطلب ذلك، أم تفضّل تأجيلها لصباح الغد؟",
      wait: 1400,
    },
    { from: "customer", at: "١٤:١٦", text: "أعطها الأولوية اليوم من فضلك.", wait: 1300 },
    {
      from: "system",
      text: "إرسال علامة أولوية لتطبيق السائق · إشعار العميل · تسجيل الاستثناء",
      wait: 800,
    },
    {
      from: "agent",
      at: "١٤:١٦",
      text: "تم. أُبلغ السائق وستصلك رسالة عندما يتبقى محطتان على وصوله. أرفقت أيضًا نموذج إثبات التسليم ليعرف فريقك ما هو متوقع.",
      wait: 1300,
    },
  ],
  "after-hours": [
    {
      from: "system",
      text: "مكالمة واردة ٢١:١٢ · الخط الرئيسي · لا يوجد موظفون · ردّ الوكيل عند الرنة الثانية",
      wait: 400,
    },
    { from: "agent", at: "٢١:١٢", text: "مساء الخير، شكرًا لاتصالك. كيف أستطيع مساعدتك؟", wait: 900 },
    {
      from: "customer",
      at: "٢١:١٢",
      text: "مرحبًا، هل تنفذون نقل المكاتب؟ لدينا حوالي أربعين مكتبًا.",
      wait: 1500,
    },
    {
      from: "agent",
      at: "٢١:١٢",
      text: "نعم ننفذها. أربعون مكتبًا ضمن نطاق عملنا بسهولة. هل النقل في يوم واحد أم يحتاج توزيعه على عطلة نهاية الأسبوع؟",
      wait: 1400,
    },
    {
      from: "customer",
      at: "٢١:١٣",
      text: "يفضَّل في نهاية الأسبوع — لا نتحمل توقف العمل في يوم دوام.",
      wait: 1700,
    },
    {
      from: "system",
      text: "فحص الخدمة · نقل تجاري · طاقم نهاية الأسبوع متاح من ١٢ أغسطس",
      wait: 900,
    },
    {
      from: "agent",
      at: "٢١:١٣",
      text: "أطقم نهاية الأسبوع متاحة اعتبارًا من ١٢ أغسطس. لمكتب بأربعين وحدة مع فصل وتركيب أنظمة تقنية، ستحتاجون عملية بطاقمين خلال العطلة. أفضّل معاينة موقعية قبل تحديد سعر نهائي.",
      wait: 1600,
    },
    { from: "customer", at: "٢١:١٤", text: "لا مشكلة. هل يتصل بي أحد غدًا؟", wait: 1400 },
    {
      from: "agent",
      at: "٢١:١٤",
      text: "بالتأكيد. هل أسجّل أفضل رقم للتواصل وعنوانًا تقريبيًا للمعاينة؟",
      wait: 1200,
    },
    {
      from: "customer",
      at: "٢١:١٤",
      text: "٩x xxx xxx، ونحن في روي قرب مبنى البنك القديم.",
      wait: 1500,
    },
    {
      from: "system",
      text: "تسجيل الحجز في نظام العملاء · مهمة اتصال ٠٩:٠٠ · إرسال رسالة تأكيد · حفظ التسجيل والنص",
      wait: 900,
    },
    {
      from: "agent",
      at: "٢١:١٥",
      text: "ممتاز، تم التسجيل. سيتصل بك أحد أفراد الفريق التجاري الساعة التاسعة صباحًا. شكرًا لاتصالك وطاب مساؤك.",
      wait: 1300,
    },
  ],
};

export function getDemoScripts(locale: string): Scripts {
  return locale === "ar" ? ar : en;
}
