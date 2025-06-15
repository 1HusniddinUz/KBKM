import { useEffect } from "react";

const ProtectDevTools = () => {
  useEffect(() => {
    // DevTools'ni aniqlash
    const devtoolsDetect = setInterval(() => {
      const before = new Date().getTime();
      debugger;
      const after = new Date().getTime();
      if (after - before > 100) {
        alert("DevTools aniqlangan! Kod himoyalangan.");
        window.location.href = "about:blank";
      }
    }, 1000);

    // O'ng tugma (Right Click) va F12 bloklash
    const handleContextMenu = (event) => event.preventDefault();
    const handleKeyDown = (event) => {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(devtoolsDetect);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default ProtectDevTools;
