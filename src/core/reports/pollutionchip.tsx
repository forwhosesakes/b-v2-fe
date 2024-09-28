type TProps = {
  category: any
}

const pollutionCategoriesMap = new Map<string, any>([
  [
    "GARBAGE",
    { label: "نفايات", color: "text-[#8B4513]", border: "border border-[#654321]" },
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
    { label: "رصيف مزدحم", color: "text-[#9ACD32]", border: "border border-[#6B8E23]" },
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
])
const PollutionChip = (props: TProps) => {
    
  const element = pollutionCategoriesMap.get(props.category.name)

  return (
    element&&<div
    key={props.category.id}
      className={` ${element.border} rounded-full px-2 py-1 min-w-24 ${element.color}  text-center`}
    >
     <span className="text-[10px]"> {element.label}</span> 
    </div>
  )
}

export default PollutionChip
