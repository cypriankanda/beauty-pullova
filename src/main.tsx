declare global {
    interface Window {
      Tawk_API: any;
      Tawk_LoadStart: any;
    }
  }
import { createRoot } from "react-dom/client";
import "./i18n/i18n";
import App from "./App.tsx";
import "./index.css";
import TawkToWidget from "./components/TawkToWidget";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <TawkToWidget />
  </>
);