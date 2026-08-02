import type { ClientFormData } from "@/validations/clientSchema";

export const submitClientLead = async (data: ClientFormData) => {
  const res = await fetch("YOUR_GOOGLE_SCRIPT_OR_API_ENDPOINT", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return res.json();
};