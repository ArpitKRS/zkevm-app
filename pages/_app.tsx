import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = {
  chainId: 402475111,
  name: "Scourge Venom",
  rpc: ["https://scourgevenom-rpc.eu-north-2.gateway.fm"],
  testnet: true,
  chain: "scourgeVenom",
  shortName: "SV",
  slug: "scourge-venom",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  explorers: [
    {
      name: "Blockscout",
      url: "https://scourgevenom-blockscout.eu-north-2.gateway.fm/",
      standard: "EIP3091",
    },
  ]
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
