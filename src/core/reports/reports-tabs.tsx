import { useState } from "react"
import DropdownList from "../../components/dropdown-list/dropdown-list"
import { reportStatus, TabsMap } from "./constants"

import AddIcon from "../../assets/icons/add.svg?react"
import SearchIcon from "../../assets/icons/search.svg?react"
import AlertIcon from "../../assets/icons/alert.svg?react"
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
    <div>
      <div className="flex flex-row justify-between  items-center border-b border-b-white/25">
      <div className="flex flex-row gap-x-4  py-5">
        {Array.from(TabsMap).map(([tab, label]) => {
          return (
            <div
            key={tab}
              className={`rounded-lg border border-[#01C4DA] px-3 py-2 text-sm font-semibold text-[#01C4DA] hover:bg-[#01C4DA]/15  "active:bg-[#01C4DA]/30 hover:bg-[#01C4DA]/30"} cursor-pointer transition-all duration-300`} >
              <Link to={tab}>
              {label}
              </Link>
            </div>
          )
        })}

      </div>

      <div className="flex justify-between gap-x-8">
        <button className="p-2 border rounded-lg  flex gap-x-2 hover:opacity-55 transition-opacity">
          <AddIcon  stroke="white"/>
          <span className="font-semibold ml-2">بلاغ جديد</span>
        </button>

        <div className="p-2  w-80 border rounded-lg  flex gap-x-2">
          <SearchIcon stroke="white"/>
          <input type="text" className="bg-transparent outline-none " placeholder="ابحث عن بلاغ" />

        </div>

      </div>

      </div>
    

      <div className="flex justify-between items-center py-3">
        <div className="flex gap-x-4">
        <DropdownList
          emptyItemPlaceholer={"اختر الجادة"}
          selectedItem={selectedNeighbor}
          items={neighborsList}
          onSelectedItemsChange={(item: ItemWithID) =>
            setSelectedNeighbor(item)
          }
        />

<p className="flex items-center gap-x-2">
          <AlertIcon width={18} height={18}/>
          <span>
          البلاغات : <span className="font-semibold text-red-700">
          {Math.ceil(Math.random()*20)} 
            </span>
          </span>


        </p>

        </div>
    

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
