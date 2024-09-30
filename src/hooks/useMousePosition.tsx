import React from 'react';
import isElementInViewPort from '../utils/element-in-viewport.ts';
type TProps= {
    relativeContainerRef?: React.MutableRefObject<HTMLDivElement>
}
const useMousePosition = (props:TProps) => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: 0, y: 0 });
  let containerPosition = {x:0, y:0}
  

  React.useEffect(() => {

  if (props.relativeContainerRef && isElementInViewPort(props.relativeContainerRef.current)){
    containerPosition.x = props.relativeContainerRef.current.getBoundingClientRect().left
    containerPosition.y = props.relativeContainerRef.current.getBoundingClientRect().top


  }
    const updateMousePosition = (ev:any) => {

      setMousePosition({ x: ev.clientX-containerPosition.x, y: ev.clientY - containerPosition.y   });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;