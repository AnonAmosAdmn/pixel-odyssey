import React from 'react';
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image"; // Assuming you are using Next.js for image handling

export default function SocialLinks() {
    return (
        <Box width="100%" p="4">
            <Flex justify="center" align="center" gap="6" wrap="nowrap" style={{ overflowX: "auto" }}>
                
                <a href="https://discord.com/invite/k93jfuNsHR" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/discord.png" alt="Discord" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://twitter.com/PolygonAPC" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/twitter.png" alt="Twitter - X" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://mastodon.social/@papc" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/mastodon.png" alt="Mastodon" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://www.youtube.com/channel/UCyubRm1WhuXzFHdekLhQg9A" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/youtube.png" alt="YouTube" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://www.facebook.com/groups/polygonapc" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/facebook.png" alt="Facebook" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://www.instagram.com/polygonapc/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/instagram.png" alt="Instagram" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://www.reddit.com/user/Polygonapepunksclub/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/reddit.png" alt="Reddit" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://www.subber.xyz/polygon-ape-punks-club" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/subber.png" alt="Subber" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://opensea.io/collection/polygon-ape-punks-club" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/opensea.png" alt="OpenSea" width={100} height={100} className="social-icon" />
                </a>

                <a href="https://magiceden.io/collections/polygon/0x0cf7a9b4c99ec1aa836a58998abe1c349f8513c9" target="_blank" rel="noopener noreferrer">
                    <Image src="/Images/magiceden.png" alt="Magic Eden" width={100} height={100} className="social-icon" />
                </a>

            </Flex>
        </Box>
    );
}
