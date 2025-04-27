import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flex } from '@radix-ui/themes';

const APFooter = () => {
  return (
    <Flex justify="center" align="center" direction="column" p="4" pb="9">
      <Image
        src="/Images/frogBanner.gif"
        alt="banner"
        width={1080}
        height={640}
        priority={true}
      />
    </Flex>
  );
};

export default APFooter;
