import { forwardRef, ReactNode } from "react";

interface GridCardsProps {
  columns?: number;
  children: ReactNode;
}

const GridCards = forwardRef<HTMLDivElement, GridCardsProps>(
  ({ columns, children }, ref) => {
    // console.log("grid ref inside component: ", ref);

    const cols = columns
      ? columns === 4
        ? "xl:grid-cols-4 md:grid-cols-3"
        : "xl:grid-cols-3 md:grid-cols-3"
      : "xl:grid-cols-4 md:grid-cols-3";

    return ( <div
        ref={ref}
        className={`grid w-11/12 ${cols} magical-border grid-cols-1 sm:grid-cols-2`}
      >
        {children}
      </div>
    );
  }
);

export default GridCards;