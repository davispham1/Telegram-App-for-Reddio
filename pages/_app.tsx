import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app'
import {configureChains} from "@wagmi/core";
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {createClient, WagmiConfig} from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { sepolia } from 'wagmi/chains';

const { chains, provider } = configureChains(
  [sepolia],
  [
    publicProvider()
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiConfig = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiConfig}>
    <RainbowKitProvider chains={chains} modalSize={"compact"}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default MyApp;
