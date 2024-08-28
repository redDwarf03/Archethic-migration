"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Wrapper from "./wrapper.tsx";
import Overview from "./overview/overview.tsx";
import { useAccount } from "wagmi";
import { ConnectButtonCustom } from "./connect-button.tsx";

export default function Migration() {
  const { address } = useAccount();

  useLayoutEffect(() => {
    gsap.registerPlugin();
    AOS.init();
  }, []);

  return (
    <main>
      {address ? (
        <Wrapper>
          <Overview />
        </Wrapper>
      ) : (
        <Wrapper middle>
          <ConnectButtonCustom />
        </Wrapper>
      )}
    </main>
  );
}
