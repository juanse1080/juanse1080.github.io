"use client";

import { useEffect } from "react";

const useHashScroll = () => {
  useEffect(() => {
    const path = window.location.hash;
    if (!path || !path.includes("#")) return;

    setTimeout(() => {
      const id = path.replace("#", "");
      const el = window.document.getElementById(id);
      const r = el?.getBoundingClientRect();
      if (!r) return;

      window.top?.scroll({
        top: window.scrollY + r.top,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return null;
};

export default useHashScroll;
