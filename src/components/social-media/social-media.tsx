import React from "react";
import Image from "next/image";
import Tooltip from "../tooltip/tooltip";

interface ImageData {
  defaultSrc: string;
  hoverSrc: string;
  tooltip: string;
  href: string;
}

const HoverImageWithTooltip: React.FC = () => {
  const images: ImageData[] = [
    { 
      defaultSrc: "/img/ig.svg", 
      hoverSrc: "/img/ig-hover.svg", 
      tooltip: "INSTAGRAM", 
      href: "https://www.instagram.com/" 
    },
    { 
      defaultSrc: "/img/youtube.svg", 
      hoverSrc: "/img/youtube-hover.svg", 
      tooltip: "YOUTUBE", 
      href: "https://www.youtube.com/" 
    },
    { 
      defaultSrc: "/img/mail.svg", 
      hoverSrc: "/img/mail-hover.svg", 
      tooltip: "EMAIL US", 
      href: "mailto:example@example.com" 
    },
  ];

  return (
    <div className="space-y-5 flex flex-col gap-2 justify-center items-center">
      {images.map((image, index) => (
        <Tooltip key={index} text={image.tooltip} alignment={"right"}>
          <a
            href={image.href}
            target={image.href.startsWith("mailto:") ? "_self" : "_blank"} 
            rel="noopener noreferrer" 
            className="relative cursor-pointer z-50 group"
          >
            <div className="relative">
              <Image
                src={image.defaultSrc}
                alt={`Default Image ${index + 1}`}
                width={90}
                height={90}
                className="object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
              />
              <Image
                src={image.hoverSrc}
                alt={`Hover Image ${index + 1}`}
                width={90}
                height={90}
                className="absolute top-0 left-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 shadow-sosmed"
              />
            </div>
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default HoverImageWithTooltip;
