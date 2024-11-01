import { useRef, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import DownArrowIcon from '../../assets/icons/down-arrow.svg?react'

type TProps = {
  emptyItemPlaceholer: string
  selectedItem: ItemWithID | undefined
  items: ItemWithID[]
  onSelectedItemsChange: (item: ItemWithID) => void
}

const DropdownList = (props: TProps) => {
  const [showOptions, setShowOptions] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null!)
  useClickOutside({ref: dropdownRef, onClickOutside:()=>setShowOptions(false)})

  return (
    <div 

    ref={dropdownRef}
    onClick={()=>setShowOptions(prev=>!prev)} className="relative cursor-pointer ">
      <div className="flex w-56 p-2 justify-between items-center border border-white/50 rounded-lg">
        <span>
          {props.selectedItem
            ? props.selectedItem.content
            : props.emptyItemPlaceholer}
        </span>{" "}
       <DownArrowIcon width={"16px"}/>
      </div>
      {showOptions && (
        <ul className="absolute flex flex-col  bg-darker/80 border border-white/50 rounded-md">
          {props.items.map((item) => (
            <li
            onClick={()=>props.onSelectedItemsChange(item)}
              key={item.id}
              className={`min-w-56 p-2 border-b border-b-white/50 transition-all duration-300 hover:bg-white/40 ${props.selectedItem?.id === item.id&&'bg-white/50'}`}
            >
              {item.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownList
