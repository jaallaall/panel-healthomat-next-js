import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
  open: boolean;
}

export default function ClientOnlyPortal({ children, selector, open }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.removeAttribute("style");
    if (open) {
      document.body.style.overflow = "hidden";
    }
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector, open]);

  return mounted && open
    ? createPortal(children, ref.current as HTMLElement)
    : null;
}
