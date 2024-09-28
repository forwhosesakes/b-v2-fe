import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";

type TProps =  {
  iconName: string;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: TProps) {
  const { iconName, wrapperStyle, svgProp } = props;
  const { loading, SvgIcon, error } = useDynamicSvgImport(iconName);
  // console.log("error :  ", error);
  

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}

export default SvgIcon;