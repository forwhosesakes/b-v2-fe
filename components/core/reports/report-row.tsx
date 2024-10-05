type TProps = {
  report: ReportEntity
  selected: boolean, onSelect: ()=>void
}


import PollutionChip from "./pollutionchip"

const ReportRow = (props: TProps) => {
  return (
    <div
    onClick={()=>props.onSelect()}
      className={`flex w-full justify-between py-3 pl-2 pr-5 border-b border-b-white/30 transition-all hover:bg-white/5 ${props.selected && "bg-white/5"}`}
    >
      <p className="w-64  ">{props.report.title}</p>

      <div className="flex gap-x-5  w-64 ">
        {props.report.categories.map((cat: any) => {
          return <PollutionChip category={cat} key={cat.id} />
        })}
      </div>

      <div
        className={`border-[rgba(255, 255, 255, 0.12)] bg-[rgba(255, 255, 255, 0.04)] h-4 w-4 rounded-full`}
      />
      <div className="flex flex-row opacity-75">
        {props.report.id % 3 === 0 ? (
          <img src="/assets/icons/fail.svg" />
        ) : props.report.id % 3 === 1 ? (
          <img src="/assets/icons/success.svg" />
        ) : (
          <img src="/assets/icons/in-progress.svg" />
        )}

        <img src="/assets/icons/left-arrow.svg" className="mr-2" width={24} height={24} />
      </div>
    </div>
  )
}

export default ReportRow
