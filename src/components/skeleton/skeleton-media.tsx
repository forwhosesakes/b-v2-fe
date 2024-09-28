//As media loading should take +15secs, progress has to be tracked and displayed 

interface IProps {
    progress: number, 
    

}


const SkeletonMedia = ({progress}:IProps)=>{


    return <div className="SkeletonMedia bg-slate-500 ">




    </div>





}

export default SkeletonMedia