"use client";

import Lenis from "lenis";
import { useEffect } from "react";

type LenisProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  return children;
}
