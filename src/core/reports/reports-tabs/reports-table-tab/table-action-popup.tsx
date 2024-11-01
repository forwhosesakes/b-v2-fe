import MoreInfoIcon from "../../../../assets/icons/more-info.svg?react"
import { useRef, useState } from "react"
import useClickOutside from "../../../../hooks/useClickOutside"
import CopyToClipboardardIcon from "../../../../assets/icons/copy-clipboard.svg?react"
import EditIcon from "../../../../assets/icons/edit.svg?react"
import DeleteIcon from "../../../../assets/icons/delete.svg?react"

type ActionItem = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
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
    { icon: EditIcon, action: editReport, title: "تحديث البلاغ" },
    {
      icon: CopyToClipboardardIcon,
      action: copyReportToClipboard,
      title: "نسخ البلاغ إلى الحافظة",
    },
    {
      icon: DeleteIcon,
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
                <action.icon width={12} height={12} />
                {action.title}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setMenuDisplayed((prev) => !prev)}
          className={`flex w-fit justify-center rounded-md px-4 py-2 transition-all hover:bg-gray-400/10 ${isMenuDisplayed && "bg-gray-400/10"}`}
        >
          <MoreInfoIcon />
        </button>
      </div>
    </>
  )
}

export default ReportActionPopup
