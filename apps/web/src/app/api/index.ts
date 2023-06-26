import { fetcher } from "@/utils";

export interface getTriggerResponse {}

export function getTrigger(trigger_id: number) {
  return fetcher(`/api/v1/trigger?id=${trigger_id}`).then((res) => res.json());
}

export interface GenerateImageResponse {
  status: string;
  trigger_id: string;
  trigger_type: string;
}

export function generateImage(prompt: string): Promise<GenerateImageResponse> {
  return fetcher(`/api/v1/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  }).then((res) => res.json() as unknown as GenerateImageResponse);
}

export function resetImage() {
  return fetcher(`/api/v1/reset`).then((res) => res.json());
}

export function getPrompt() {}
