import clsx from "clsx";
import React from "react";
import Image from "next/image";

type ImageFrameProps = {
  src: string;
};

const ImageFrame: React.FC<ImageFrameProps> = (props) => {
  return (
    <div className={clsx("h-[300px] w-[300px]")}>
      {props.src && (
        <Image
          className={clsx("rounded-md border-2")}
          src={props.src}
          alt="ImageFrame"
          width={512}
          height={512}
        />
      )}
    </div>
  );
};

export default ImageFrame;
