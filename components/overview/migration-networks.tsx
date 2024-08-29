import { ArrowRight } from "lucide-react";
import arrowBottom from "../../src/images/networks/arrow-bottom.svg";
import arrowRight from "../../src/images/networks/arrow-right.svg";
import bsc from "../../src/images/networks/bsc.png";
import eth from "../../src/images/networks/eth.png";
import matic from "../../src/images/networks/matic.png";
import uco from "../../src/images/networks/uco.svg";
import { Button } from "../button";
import { Input } from "../input";
import NetworkCard from "./network-card";

export type MigrationNetworksProps = {
  network: Network | null;
  backBtn: () => void;
  migrate: () => void;
};

export default function MigrationNetworks({
  network,
  backBtn,
  migrate,
}: MigrationNetworksProps) {
  return (
    <div className="bg-purple-light border border-border-light p-[28px] xl:p-[24px] 2xl:p-[32px] rounded-[10px]">
      <div className="flex flex-col md:flex-row gap-[32px] items-center">
        <NetworkCard
          isMigrationStyle
          onClick={() => {}}
          networkIcon={
            network === "eth" ? eth : network === "bsc" ? bsc : matic
          }
          network="Ethereum Network"
          balance="30 000"
          backBtn={backBtn}
        />
        <div className="w-full md:w-px bg-border-dark h-px md:h-[232px]"></div>
        <div className="flex flex-col gap-[24px] lg:gap-[32px] w-full md:w-2/3 md:pl-[36px] ">
          <div className="flex flex-col lg:flex-row lg:gap-[18px] xl:gap-[30px]">
            <div className="w-full flex flex-col gap-[8px]">
              <label className="text-16 font-medium">Send</label>
              <div className="relative">
                <Input
                  iconY
                  className="pb-[33px]"
                  type="number"
                  placeholder="0.00"
                  icon={<img src={uco} alt="uco" />}
                />
                <div className="absolute bottom-[8px] right-[14px] w-full flex items-center justify-end gap-[10px] cursor-pointer">
                  <p className="text-10 font-medium text-muted text-right">
                    Balance 30 000
                  </p>
                  <button className="px-[6px] py-[2px] max-h-[18px] bg-purple-gradient w-fit rounded-[10px] border border-border text-10">
                    Max
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[70px] w-[106px] lg:w-[98px] lg:h-[117px] flex items-center justify-center mx-auto">
              <img
                src={arrowBottom}
                alt="arrow-bottom"
                className="w-[45px] h-[45px] lg:hidden"
              />
              <img
                src={arrowRight}
                alt="arrow-bottom"
                className="min-w-[45px] h-[45px] hidden lg:block"
              />
            </div>
            <div className="w-full flex flex-col gap-[8px]">
              <label className="text-16 font-medium">Receive</label>
              <Input
                className="lg:pb-[33px]"
                iconY
                type="number"
                placeholder="0.00"
                icon={<img src={uco} alt="uco" />}
              />
            </div>
          </div>
          <Button className="w-fit mx-auto" onClick={migrate}>
            Migrate <ArrowRight size="18" />
          </Button>
        </div>
      </div>
    </div>
  );
}
