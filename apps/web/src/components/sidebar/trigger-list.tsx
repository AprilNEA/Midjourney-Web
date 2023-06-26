"use client";

import clsx from "clsx";
import { useTriggerStore } from "@/store/trigger";

const TriggerList: React.FC = () => {
  return (
    <div className={clsx("flex flex-col space-y-2.5")}>
      {/*{useTriggerStore((state) => state.triggers).map((trigger) => ()}*/}
      <div
        className={clsx("flex flex-col space-y-0.5 rounded-xl bg-white p-1")}
      >
        <div className={clsx("")}>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default TriggerList;
