import React from 'react';
import Image from 'next/image';
import { Flex } from '@radix-ui/themes'; // <-- import Flex from Radix

const APHeader = () => {
  return (
    <Flex justify="center" align="center" direction="column" p="4">
      <Image
        src="/Images/headerLogo.png"
        alt="banner"
        width={1200}
        height={640}
        priority={true}
      />
    </Flex>
  );
};

export default APHeader;
