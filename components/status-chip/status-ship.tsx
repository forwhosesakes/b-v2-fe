import { ReportStatusMap } from "@/components/core/reports/constants"

const StatusChip = ({ status }: { status: ReportStatus }) => {
  const { label, className } = ReportStatusMap.get(status)!
  return <p className={className}>{label}</p>
}

export default StatusChip
