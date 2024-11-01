import { useRef, useState } from "react"
import useClickOutside from "@/hooks/useClickOutside"


type ActionItem = {
  icon: string
  title: string
  action: () => void
  color?: string
}

const ReportActionPopup = () => {
  const [isMenuDisplayed, setMenuDisplayed] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null!)
  useClickOutside({
    ref: menuRef,
    onClickOutside: () => setMenuDisplayed(false),
  })
  const editReport = () => {}
  const deleteReport = () => {}
  const copyReportToClipboard = () => {}

  const actions: ActionItem[] = [
    { icon: "/assets/icons/edit.svg", action: editReport, title: "تحديث البلاغ" },
    {
      icon: "/assets/icons/copy-clipboard.svg",
      action: copyReportToClipboard,
      title: "نسخ البلاغ إلى الحافظة",
    },
    {
      icon: "/assets/icons/delete.svg",
      action: deleteReport,
      title: "حذف البلاغ",
      color: "text-[#B42318]",
    },
  ]

  return (
    <>
      <div className="relative">
        {isMenuDisplayed && (
          <ul
            ref={menuRef}
            className="absolute -right-20 top-8 z-30 flex w-max flex-col gap-y-2 rounded-md border border-white/10 bg-darker"
          >
            {actions.map((action) => (
              <li
              key={action.title}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md p-3 text-xs opacity-90 transition-opacity hover:bg-white/5 hover:opacity-100 ${action.color ?? ""}`}
              >
                <img src={action.icon} width={12} height={12} />
                {action.title}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setMenuDisplayed((prev) => !prev)}
          className={`flex w-fit justify-center rounded-md px-4 py-2 transition-all hover:bg-gray-400/10 ${isMenuDisplayed && "bg-gray-400/10"}`}
        >
          <img src={"/assets/icons/more-info.svg"} />
        </button>
      </div>
    </>
  )
}

export default ReportActionPopup
