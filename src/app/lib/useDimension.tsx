import { useState, useEffect, RefObject } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

const useDimension = (elementRef?: RefObject<HTMLElement>): WindowDimensions => {
  const [dimension, setDimension] = useState<WindowDimensions>({ width: 0, height: 0 });

  const updateDimension = () => {
    if (elementRef && elementRef.current) {
      const { offsetWidth, offsetHeight } = elementRef.current;
      setDimension({ width: offsetWidth, height: offsetHeight });
    } else {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }
  };

  useEffect(() => {
    updateDimension();

    const handleResize = () => {
      updateDimension();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef]);

  return dimension;
};

export default useDimension;
