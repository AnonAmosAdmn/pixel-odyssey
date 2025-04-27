'use client';

import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link

export default function Navbar() {
  return (
    <Box
      as="header"
      width="100%"
      p="4"
      style={{
        backgroundColor: "black",
        position: "sticky", // <-- sticky magic
        top: 0,
        zIndex: 1000, // <-- make sure it stays above other stuff
      }}
    >
      <Flex align="center" justify="between" gap="6" width="100%">
        <Link href="/Home">
          <Image
            src="/Images/logo.png"
            width={110}
            height={25}
            alt="logo"
          />
        </Link>

        <Box flexGrow="1" />

        <Link href="/Connect" style={{ color: 'white' }}>
          Connect
        </Link>

        {/* Right - Connect Wallet */}
        {/* You can drop your <ConnectWallet /> here */}
      </Flex>
    </Box>
  );
}
