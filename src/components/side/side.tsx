import React from "react";

import Image from "next/image";

const BorderSide = () => {
  return (
    <div className="relative -z-10 ">
      <Image
        src="/img/Border-side.png"
        width={210.2}
        height={150}
        className="-translate-x-9 shadow-side"
        alt="border-side"
      />
    </div>
  );
};

export default BorderSide;
