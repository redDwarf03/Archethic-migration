import "./globals.css";
import Migration from "../components/migration.tsx";
import RootLayout from "../components/layout.tsx";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../config/wagmi/config.ts";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// import {wormholeConfig} from "@/config/wormhole.ts";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RootLayout>
            <Migration />
          </RootLayout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    //    <WormholeConnect config={wormholeConfig} />

    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    //     <RainbowKitProvider>
    //       <ConnectButton />
    //       <Bridge />
    //     </RainbowKitProvider>
    //   </QueryClientProvider>
    // </WagmiProvider>
  );
};

export default App;
