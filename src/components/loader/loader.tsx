import React, { useEffect } from "react";
import type { AnimationItem } from "lottie-web";

type LoaderProps = {
  preset?: "centered" | "cover-page";
};

const Loader = ({ preset = "centered" }: LoaderProps) => {
  useEffect(() => {
    let animation: AnimationItem | null = null; 

    const initializeLottie = async () => {
      const container = document.querySelector("#loader-animation");
      if (container) {
        const lottieInstance = await import("lottie-web");
        animation = lottieInstance.default.loadAnimation({
          container: container as Element,
          path: "/img/loader.json",
          renderer: "svg",
          loop: true,
          autoplay: true,
        });
      }
    };

    initializeLottie();

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div className={`preloader ${preset}`}>
      <div id="loader-animation" />
    </div>
  );
};

export default Loader
