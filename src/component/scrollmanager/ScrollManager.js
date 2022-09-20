import * as React from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager({ children }) {
  const location = useLocation();

  // scroll to the top every time the user navigates to a new page
  React.useEffect(() => {
    window.scrollTo(0, 250);
  }, [location]);

  return <React.Fragment>{children}</React.Fragment>;
}
