import { createRoot } from "react-dom/client";
import "./i18n/i18n";
import App from "./App";
import "./index.css";
import TawkToWidget from "./components/TawkToWidget";
import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  person_profiles: "identified_only",
});

// Extend window types
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

// Load Google Translate script
const addGoogleTranslate = () => {
  const script = document.createElement("script");
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
};
console.log("POSTHOG KEY:", import.meta.env.VITE_POSTHOG_KEY);
addGoogleTranslate();

createRoot(document.getElementById("root")!).render(
  <>
    {/* Hidden Google container */}
    <div id="google_translate_element" style={{ display: "none" }}></div>

    <App />
    <TawkToWidget />
  </>
);