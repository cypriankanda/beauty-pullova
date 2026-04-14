import posthog from "posthog-js";

const key = import.meta.env.VITE_POSTHOG_KEY;

if (!key) {
  console.error("❌ PostHog key is missing!");
}

posthog.init(key || "", {
    api_host: "https://us.i.posthog.com",
  capture_pageview: true,
});

export default posthog;