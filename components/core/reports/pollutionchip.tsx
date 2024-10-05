import { pollutionCategoriesMap } from "../../../constants/categories-map"


type TProps = {
  category: any
}

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
