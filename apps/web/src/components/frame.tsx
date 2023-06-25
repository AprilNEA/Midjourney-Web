import React from "react";
import Image from "next/image";

type ImageFrameProps = {
  src: string;
};
const ImageFrame: React.FC<ImageFrameProps> = (props) => {
  return (
    <Image
      className="rounded-md border-2"
      src={props.src}
      alt="ImageFrame"
      width={512}
      height={512}
    />
  );
};

export default ImageFrame;
