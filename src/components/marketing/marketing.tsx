import React from "react";
import Image from "next/image";
import Tooltip from "../tooltip/tooltip";

interface ImageData {
  defaultSrc: string;
  tooltip: string;
}

const Marketing: React.FC = () => {
  const images: ImageData[] = [
    { defaultSrc: "/img/google.png", tooltip: "AVAILABLE SOON!" },
    { defaultSrc: "/img/apple.png", tooltip: "AVAILABLE SOON!" },
  ];

  return (
    <div className="flex flex-row justify-center gap-3">
      {images.map((image, index) => (
        <Tooltip
          key={index}
          text={image.tooltip}
          type="marketing"
          alignment={index === 0 ? "left" : "right"}
        >
          <div className="relative cursor-pointer z-50">
            <div className="group relative">
              <Image
                src={image.defaultSrc}
                alt={`Default Image ${index + 1}`}
                width={250}
                height={90}
                className="shadow-sosmed transition-opacity duration-300 hover:opacity-75 hover:scale-95"
              />
            </div>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Marketing;
