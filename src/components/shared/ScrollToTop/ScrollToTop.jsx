import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { group } = useSelector((state) => state.global);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname, group]);

  return null;
};

export default ScrollToTop;
