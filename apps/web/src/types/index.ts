export namespace Trigger {
  export type Type =
    | "generate"
    | "upscale"
    | "variation"
    | "max_upscale"
    | "reset"
    | "describe";
  export type Status =
    | "pending"
    | "generating"
    | "success"
    | "failed"
    | "banned"
    | "verify";
  export type GeneratePayload = {
    prompt: string;
  };

  export interface Trigger {
    id: string;
    name: Type;
    status: Status;
    percent: number;
    payload: GeneratePayload;

    filename: string;
    image_url: string;

    message_id: string;
    message_hash: string;

    createdAt: string;
    updatedAt: string;
  }
}
