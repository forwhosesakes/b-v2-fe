import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from "react-query"
import {
  getAllReports,
  createNewReport,
  getSingleReport,
} from "../repos/report"

// Hook for getting all reports
export const useGetAllReports = (
  searchTerm: string,
  page: number = 1,
  limit: number = 12,
): UseQueryResult<any> => {
  return useQuery({
    queryKey: ["reports", searchTerm, page, limit],
    queryFn: () => getAllReports(searchTerm, page, limit),
  })
}

// Hook for creating a new report
export const useCreateNewReport = (newReportData: any): UseMutationResult => {
  return useMutation({ mutationFn: () => createNewReport(newReportData) })
}

// Hook for getting a single report
export const useGetSingleReport = (id: any): UseQueryResult => {
  return useQuery({
    queryKey: ["report", id],
    queryFn: () => getSingleReport(id),
    enabled: !!id, // Only run the query if id is truthy
  })
}
