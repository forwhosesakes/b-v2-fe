import { ReactNode } from "react";

const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
        w-fit
        
        md:px-4  px-2 py-1
        border border-primary 
        cursor-pointer
        rounded-3xl 
        shadow-[0px_-7px_11px_0px_rgba(164,143,255,0.12)_inset]
        hover:shadow-[0px_-7px_11px_0px_rgba(164,143,255,0.2)_inset]
        transition-shadow
        ">
      <p className="md:text-lg text-[10px] bg-glitter-note-gradient inline-block text-transparent bg-clip-text">
        {children}
      </p>
    </div>
  );
};

export default Chip;
