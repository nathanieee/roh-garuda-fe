import React from 'react';

import Image from 'next/image';

const BorderSide = () => {
  return (
      <Image
        src={'/img/Border-side.svg'}
        width={210}
        height={150}
        className='-translate-x-8 -z-10 drop-shadow-2xl relative'
        alt='border-size'
      />
  );
};

export default BorderSide;