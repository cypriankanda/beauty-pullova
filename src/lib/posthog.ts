import posthog from "posthog-js";

posthog.init("phc_wDijqwQfHzqFsncg6WyJSQfkJphCaVM3Jt8KwWmDVATm", {
  api_host: "https://app.posthog.com",
  capture_pageview: true,
});

export default posthog;