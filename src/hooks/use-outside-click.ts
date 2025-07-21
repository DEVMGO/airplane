import { useEffect, useRef, useState } from "react";

const useOutSideClick = (externalSetter?: (value: boolean) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      externalSetter ? externalSetter(false) : setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { ref, isShow, setIsShow };
};

export default useOutSideClick;
