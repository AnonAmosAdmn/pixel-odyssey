import React from "react";

import { Box, Flex } from "@radix-ui/themes";

import APHeader from "../../components/APHeader";
import APFooter from "../../components/APFooter";
import APVideo from "../../components/APVideo";
import SocialLinks from "../../components/SocialLinks";

export default function Home() {
  return (
    <Box p="4">
      <Flex direction="column" gap="4">
        <APHeader />
        <APVideo />
        <SocialLinks />
        <APFooter />
      </Flex>
    </Box>
  );
}
