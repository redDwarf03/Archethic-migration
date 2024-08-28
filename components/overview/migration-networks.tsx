import arrowBottom from "../../src/images/networks/arrow-bottom.svg";
import arrowRight from "../../src/images/networks/arrow-right.svg";
import bsc from "../../src/images/networks/bsc.png";
import eth from "../../src/images/networks/eth.png";
import matic from "../../src/images/networks/matic.png";
import uco from "../../src/images/networks/uco.svg";
import { ArrowRight } from "lucide-react";
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
    <div className="bg-background border border-border-light p-[18px] xl:p-[24px] 2xl:p-[32px] rounded-[10px]">
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[18px] xl:gap-[24px] 2xl:gap-[32px] items-center">
        <NetworkCard
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
              <Input
                type="number"
                placeholder="0.00"
                icon={<img src={uco} alt="uco" />}
              />
              <p className="text-14 font-medium text-muted">Max 30 000</p>
            </div>
            <div className="h-[70px] w-[106px] lg:w-[98px] lg:h-[117px] flex items-center justify-center mx-auto">
              <img
                src={arrowBottom}
                alt="arrow-bottom"
                className="w-[40px] h-[86px] lg:hidden"
              />
              <img
                src={arrowRight}
                alt="arrow-bottom"
                className="min-w-[68.8px] h-[86px] hidden lg:block"
              />
            </div>
            <div className="w-full flex flex-col gap-[8px]">
              <label className="text-16 font-medium">Receive</label>
              <Input
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
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
