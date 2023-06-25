"use client";

import clsx from "clsx";

import { useState } from "react";
import ImageFrame from "@/components/frame";
import { Button, Input } from "@/components/ui-lib";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(prompt);
  };

  return (
    <div className={clsx("")}>
      <ImageFrame src="https://cdn.midjourney.com/e1ee3d63-a208-4584-b6b0-934dd4d86ccf/0_0.png" />
      <Input
        value={prompt}
        onChange={(e) => setPrompt(e.currentTarget.value)}
      />
      <Button onClick={handleSubmit} />
    </div>
  );
}
