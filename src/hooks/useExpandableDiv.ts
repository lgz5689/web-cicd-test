import { useRef } from "react";

const useExpandableDiv = () => {
  const tagRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (tagRef.current) {
      tagRef.current.style.height = "auto";
      const { height } = tagRef.current.getBoundingClientRect();
      tagRef.current.style.height = "0";
      tagRef.current.style.transition = "height 0.5s";
      tagRef.current.offsetHeight;
      tagRef.current.style.height = `${height}px`;
    }
  };

  const handleMouseLeave = () => {
    if (tagRef.current) {
      tagRef.current.style.height = "0";
    }
  };

  return { tagRef, handleMouseEnter, handleMouseLeave };
};

export default useExpandableDiv;
