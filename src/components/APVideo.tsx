import React from 'react';
import { Box, Flex } from "@radix-ui/themes";

export default function APVideo() {
    return (
        <Box width="100%" p="4">
            <Flex justify="center" align="center" width="100%" height="100%">
                <video
                    src="/Video/homeVideo.mp4"
                    autoPlay
                    muted
                    controls
                    style={{
                        width: "100%", 
                        height: "auto", 
                        maxWidth: "1200px", 
                        maxHeight: "800px",
                        border: "4px solid white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                        objectFit: "cover", 
                    }}
                />
            </Flex>
        </Box>
    );
}
