import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORE_VERSION, STORE_KEY } from "@/store/config";
import { Trigger } from "@/types";

export interface TriggerSession {
  id: number;
  topic: string;
  triggers: Trigger.Trigger[];
  lastUpdate: number;
}

export type TriggerState = {
  sessions: TriggerSession[];
  currentSessionIndex: number;
  globalId: 0;
};
export type TriggerActions = {
  updateSession: (index: number) => void;
  selectSession: (index: number) => void;
  clearSessions: () => void;
};
export type TriggerStore = TriggerState & TriggerActions;

export const useTriggerStore = create<TriggerStore>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionIndex: 0,
      globalId: 0,

      updateSession(index: number) {},

      selectSession(index: number) {
        set({
          currentSessionIndex: index,
        });
      },

      clearSessions() {
        set(() => ({
          sessions: [],
          currentSessionIndex: 0,
        }));
      },
    }),
    {
      name: STORE_KEY.trigger,
      version: STORE_VERSION.trigger,
    }
  )
);
