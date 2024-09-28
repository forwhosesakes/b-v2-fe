type TProps = {
  category: any
}

const pollutionCategoriesMap = new Map<string, any>([
  [
    "GARBAGE",
    { label: "نفايات", color: "bg-[#8B4513]", border: "border[#654321]" },
  ],
  [
    "BAD_BILLBOARD",
    {
      label: "لوحة إعلانية سيئة",
      color: "bg-[#4682B4]",
      border: "border-[#36648B]",
    },
  ],
  [
    "SAND_ON_ROAD",
    {
      label: "رمل على الطريق",
      color: "bg-[#F4A460]",
      border: "border-[#D2691E]",
    },
  ],
  [
    "POTHOLES",
    {
      label: "حفر في الطريق",
      color: "bg-[#A9A9A9]",
      border: "border-[#808080]",
    },
  ],
  [
    "CLUTTER_SIDEWALK",
    { label: "رصيف مزدحم", color: "bg-#9ACD32", border: "border-[#6B8E23]" },
  ],
  [
    "GRAFFITI",
    {
      label: "كتابة على الجدران",
      color: "bg-[#FF69B4]",
      border: "border-[#C71585]",
    },
  ],
  [
    "BROKEN_SIGNAGE",
    {
      label: "لافتة مكسورة",
      color: "bg-[#FFD700]",
      border: "border-[#DAA520]",
    },
  ],
])
const PollutionChip = (props: TProps) => {
    
  const element = pollutionCategoriesMap.get(props.category.name)

  return (
    element&&<div
    key={props.category.id}
      className={`border $${element.border} rounded-full p-1 min-w-24 text-center`}
    >
     <span className="text-xs"> {element.label}</span> 
    </div>
  )
}

export default PollutionChip
