import { useState } from "react"
import DropdownList from "../../components/dropdown-list/dropdown-list"
import { reportStatus, TabsMap } from "./constants"
import { Link, Outlet } from "react-router-dom"


const ReportsTabs = () => {
  const [selectedNeighbor, setSelectedNeighbor] = useState< ItemWithID | undefined>(undefined)
  const neighborsList = [
    { id: 1, content: "الصفا" },
    { id: 2, content: "الماجدية" },
    { id: 3, content: "شاهقة" },
    { id: 4, content: "دارة صفا" },
  ]
  return (
    <div className="">
      <div className="flex flex-row gap-x-4 border-b border-b-white/25 py-5">
        {Array.from(TabsMap).map(([tab, label]) => {
          return (
            <div
            key={tab}
              className={`rounded-lg border border-[#01C4DA] px-3 py-2 text-sm font-semibold text-[#01C4DA] hover:bg-[#01C4DA]/15  "active:bg-[#01C4DA]/30 hover:bg-[#01C4DA]/30"} cursor-pointer transition-all duration-300`}
            >

              <Link to={tab}>
              {label}
              </Link>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between items-center py-3">
        <DropdownList
          emptyItemPlaceholer={"اختر الجادة"}
          selectedItem={selectedNeighbor}
          items={neighborsList}
          onSelectedItemsChange={(item: ItemWithID) =>
            setSelectedNeighbor(item)
          }
        />

        <ul className="flex gap-x-6 items-center">
          {reportStatus.map((status)=><li key={status.label} className="flex items-center gap-x-2">
            <div className={`${status.className} w-8 h-8`}/>
            {status.label}


          </li>)}
        </ul>
      </div>
<Outlet/>      
    </div>
  )
}

export default ReportsTabs
