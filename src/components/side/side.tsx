import React from "react";

import Image from "next/image";

const BorderSide = () => {
  return (
    <div className="relative -z-10 ">
      <Image
        src="/img/Border-side.png"
        width={210.2}
        height={150}
        className="-translate-x-9 shadow-side opacity-0 lg:opacity-100"
        alt="border-side"
      />
    </div>
  );
};

export default BorderSide;
