import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Prevent multiple script injections
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6905f50c3457301951156099/1j8vkaeok";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "anonymous");
    document.body.appendChild(script);

    script.onload = () => {
      // Start minimized
      if (window.Tawk_API.minimize) {
        window.Tawk_API.minimize();
      }

      // Visitor metadata
      window.Tawk_API.visitor = {
        language: navigator.language,
        device: navigator.userAgent,
      };
    };

    // Cleanup if component unmounts (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;