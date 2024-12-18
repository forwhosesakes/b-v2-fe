export const TabsMap: Map<ReportTab, string> = new Map<ReportTab, string>([
  ["neighbor", "خريطة المُجمع"],
  ["heatmap", "خريطة حرارية"],
  ["records", "البلاغات"],
])

export const reportStatus = [
  {
    label: "خطر",
    className: "blurry-red",
  },
  {
    label: "متوسط",
    className: "blurry-blue",
  },
  {
    label: "منخفض",
    className: "blurry-green",
  },
]

export const ReportStatusMap = new Map<ReportStatus, LabelStyles>([
  ["COMPLETED", { label: "مكتمل", className: "completed-chip" }],
  ["IN_PROGRESS", { label: "قيد المعالجة", className: "progress-chip" }],
  ["PENDING", { label: "قيد الانتظار", className: "pending-chip" }],
])

export const pollutionCategoriesMap = new Map<string, any>([
  [
    "GARBAGE",
    {
      label: "نفايات",
      color: "text-[#8B4513]",
      border: "border border-[#654321]",
    },
  ],
  [
    "BAD_BILLBOARD",
    {
      label: "لوحة إعلانية سيئة",
      color: "text-[#4682B4]",
      border: "border border-[#36648B]",
    },
  ],
  [
    "SAND_ON_ROAD",
    {
      label: "رمل على الطريق",
      color: "text-[#F4A460]",
      border: "border border-[#D2691E]",
    },
  ],
  [
    "POTHOLES",
    {
      label: "حفر في الطريق",
      color: "text-[#A9A9A9]",
      border: "border border-[#808080]",
    },
  ],
  [
    "CLUTTER_SIDEWALK",
    {
      label: "رصيف مزدحم",
      color: "text-[#9ACD32]",
      border: "border border-[#6B8E23]",
    },
  ],
  [
    "GRAFFITI",
    {
      label: "كتابة على الجدران",
      color: "text-[#FF69B4]",
      border: "border border-[#C71585]",
    },
  ],
  [
    "BROKEN_SIGNAGE",
    {
      label: "لافتة مكسورة",
      color: "text-[#FFD700]",
      border: "border border-[#DAA520]",
    },
  ],

  [
    "CONSTRUCTION_ROAD",
    {
      label: " طريق بناء",
      color: "text-[#FFD700]",
      border: "border border-[#DAA520]",
    },
  ],
])
