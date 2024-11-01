import { useEffect } from "react";

type TProps = {
    ref: React.MutableRefObject<HTMLElement> , 
    onClickOutside: ()=>void
}


const useClickOutside =({ref,onClickOutside }:TProps)=>{
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
          if (!ref.current || ref.current.contains(event.target as Node)) {
            return;
          }
          onClickOutside();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      }, [ref, onClickOutside]);






}


export default useClickOutside