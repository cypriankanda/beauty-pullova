import { useEffect, useState } from "react";

const languages = [
  { label: "English", value: "en" },
  { label: "Swahili", value: "sw" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
];

const LanguageSelector = () => {
  const [ready, setReady] = useState(false);

  // Wait for Google Translate to load
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        setReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lang: string) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <select
        disabled={!ready}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white text-sm px-4 py-2 rounded-xl shadow-lg border border-gray-200 hover:border-gray-400 transition cursor-pointer"
      >
        <option value="">🌐 Select Language</option>
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;