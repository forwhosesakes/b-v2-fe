type ReportEntity = {
  id: number
  title: string
  lon: number
  lat: number
  villa: number
  villa_style_loc: string
  image_url: string
  infered_image_url: string
  updatedAt: string
  createdAt: string
  content: string
  categories: any[]
  status: ReportStatus
  severity: ReportSeverity
  pollution_parameter: number
  neighbor: string
}

type ReportTab = "neighbor" | "heatmap" |"records"
type ReportStatus = "PENDING" | "COMPLETED" | "IN_PROGRESS"
type ReportSeverity = "HIGH" | "LOW" | "MODERATE"

type LabelStyles = {
  label: string
  className: string
}


type StyleCoordinates = { x: string; y: string }
