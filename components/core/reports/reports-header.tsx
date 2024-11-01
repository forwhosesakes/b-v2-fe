type TProps = {
    totalReports: number
}


const ReportsHeader = (props:TProps)=>{


    return <div className="flex flex-col w-full py-5 border-b border-b-white/25">
        <div className="flex justify-between items-center w-full ">
            <h2>البلاغات</h2>
            <p>إجمالي البلاغات <span className="text-red-800">{props.totalReports ?? 0} </span></p>
        </div>


    </div>
}

export default ReportsHeader