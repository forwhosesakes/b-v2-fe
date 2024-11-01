
import {
  getLargestNNumbersLessThanM,
  getSmallestNNumbersLargerThanM,
} from "@/utils/range-selection"

type TProps = {
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPages: number
}

const PaginatedTableFooter = (props: TProps) => {
  const currentPage = Math.min(Math.max(1, props.currentPage), props.totalPages)
  
  const elementAfterCurrentPage = getSmallestNNumbersLargerThanM(
    4,
    currentPage,
    props.totalPages,
  )

  if (
    elementAfterCurrentPage.length &&
    elementAfterCurrentPage[0] !== props.totalPages
  ) {
    elementAfterCurrentPage.unshift(props.totalPages, 0)
  }

  const elementsBeforeCurrentPage =
    currentPage === 1 ? [1] : getLargestNNumbersLessThanM(4, currentPage)

  if (elementsBeforeCurrentPage[elementsBeforeCurrentPage.length-1] !== 1) {
    elementsBeforeCurrentPage.push(0, 1)
  }
  return (
    <ul className="flex w-full justify-center ">
      <button>
        <img src={"/assets/icons/right-arrow.svg"} height={16} width={16} />
      </button>

      {elementAfterCurrentPage.map((el) => (
        <button 
        key={el}
        onClick={()=>props.setCurrentPage(el)}
        className="rounded-md py-2 px-4">
          {el ? el : ".."}
        </button>
      ))}
      {elementsBeforeCurrentPage.map((el) => (
        <button
        key={el}
        onClick={()=>props.setCurrentPage(el)}

          className={`rounded-md  py-2 px-4 ${currentPage === el ? "bg-[#005B63]" : ""}`}
        >
          {el ? el : ".."}
        </button>
      ))}

      <button>
        <img src="/assets/icons/left-arrow.svg" height={16} width={16} />
      </button>
    </ul>
  )
}

export default PaginatedTableFooter
