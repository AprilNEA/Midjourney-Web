"use client";

import clsx from "clsx";
import { useState } from "react";
import { useTriggerStore } from "@/store/trigger";
import { Button, Input } from "@/components/ui-lib";
import { generateImage, resetImage } from "@/app/api";
import ImageFrame from "./frame";

const actions = [{}];
const Workshop: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [trigger, setTrigger] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  // const [currentSession] = useTriggerStore.getState((state)=>[state.])

  const handleSubmit = async () => {
    const result = await generateImage(prompt);
    if (result.status == "success") {
      setTrigger(result.trigger_id);
    }
  };

  const handleReset = () => {};

  const handleUV = (action: "U" | "V", n: 1 | 2 | 3 | 4) => {
    switch (action) {
      case "U": {
        break;
      }
      case "V": {
        break;
      }
    }
  };

  return (
    <div className={clsx("flex w-full flex-col p-5")}>
      <div className="grow">
        <ImageFrame src={imageUrl} />

        <div className="mb-2 mt-2 space-y-2">
          {["U", "V"].map((action) => (
            <div className="space-x-1">
              {[1, 2, 3, 4].map((n) => (
                <Button
                  key={`${action}${n}`}
                  className={clsx("h-10 w-20 text-black")}
                  onClick={() =>
                    handleUV(action as "U" | "V", n as 1 | 2 | 3 | 4)
                  }
                >
                  {action}
                  {n}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={clsx("flex flex-row items-end justify-center space-x-1")}>
        <Input
          className={clsx("grow")}
          value={prompt}
          onChange={(e) => setPrompt(e.currentTarget.value)}
        />
        <div className="flex flex-col items-center justify-center space-y-1">
          <Button
            className={clsx("h-8 w-16 text-black")}
            onClick={handleSubmit}
          >
            Reset
          </Button>
          <Button
            className={clsx("h-8 w-16 text-black")}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Workshop;
