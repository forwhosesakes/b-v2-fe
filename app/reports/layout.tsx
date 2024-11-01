import ReportsHeader from "@/components/core/reports/reports-header";
import ReportsTabs from "@/components/core/reports/reports-tabs";

export default function ParentLayout({ 
    children 
  }: { 
    children: React.ReactNode 
  }) {
    return (
        <section className="mt-36 flex flex-col px-16" id={"reports"}>
        <ReportsHeader totalReports={ 49} />
        <ReportsTabs
        />
        {children}
      </section>
    );
  }
  