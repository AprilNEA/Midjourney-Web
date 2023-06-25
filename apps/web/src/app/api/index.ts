import { fetcher } from "@/utils";

export function getTrigger(trigger_id: number) {
  return fetcher(`/api/v1/trigger?id=${trigger_id}`).then((res) => res.json());
}

export function generateImage(prompt: string) {
  return fetcher(`/api/v1/generate?prompt=${prompt}`, { method: "POST" }).then(
    (res) => res.json()
  );
}

export function resetImage() {
  return fetcher(`/api/v1/reset`).then((res) => res.json());
}

export function getPrompt() {}
