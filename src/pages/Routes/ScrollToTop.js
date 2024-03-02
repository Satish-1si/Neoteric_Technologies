import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setShouldScroll(true);
    };

    const handleLinkClick = (event) => {
      const isSameRoute = event.target.pathname === window.location.pathname;
      if (isSameRoute) {
        event.preventDefault(); // Prevent default navigation behavior
        setShouldScroll(true);
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  return null;
};

export default ScrollToTop;
