import logo from "../src/images/logo.svg";
import "aos/dist/aos.css";
import { WalletAccount } from "./wallet-account.tsx";
// import Image from "next/image";

export default function header() {
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="absolute top-0 left-0 right-0 w-full px-[25px] lg:px-[40px] xl:px-[60px] 2xl:px-[80px] py-[20px] xl:py-[28px] 2xl:py-[32px] flex gap-2"
    >
      <img
        src={logo}
        alt="logo"
        className="w-[145.486px] h-[24px] xl:w-[169.736px] xl:h-[28px] 2xl:w-[212.17px] 2xl:h-[35px] "
      />
      <div>Migrate your UCO v1 tokens to v2</div>
      <div className={"ml-auto"}>
        <WalletAccount />
      </div>
    </header>
  );
}
