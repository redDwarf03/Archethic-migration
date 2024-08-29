import { ArrowRight } from "lucide-react";
import txhashIcon from "../../src/images/networks/txhash-link.svg";
import uco from "../../src/images/networks/uco.svg";
import { Button } from "../button";
import NewtworkCard from "./network-card";

export type CongratulationsProps = {
  onClick: () => void;
};

export default function Congratulations({ onClick }: CongratulationsProps) {
  return (
    <div className="p-[18px] flex flex-col gap-[24px] bg-purple-light border border-border-light rounded-[10px]">
      <div className="flex flex-col gap-[32px] lg:justify-center items-center">
        <p className="text-18 text-center font-medium">
          Congratulations, you have migrated your tokens and received
        </p>
        <div className="flex flex-col gap-[18px]">
          <div className="px-[18px] py-[10px] bg-purple-dark flex items-center gap-[10px] border border-border-light rounded-[10px] w-fit mx-auto">
            <p className="text-32 font-medium">30 000</p>
            <img src={uco} alt="uco" className="w-[29px] h-[24.701px]" />
          </div>
          <div className="flex items-center gap-[10px] justify-center">
            <p className="text-13 font-medium">
              Tx Hash : 0x20BC88bdAC835633E8f...
            </p>
            <img src={txhashIcon} alt="txhsash" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-border-light"></div>
      <NewtworkCard
        className="bg-transparent p-[32px]"
        networkIcon={uco}
        network="Ethereum"
        balance="30 000"
        balanceLeft
        migrationCompleted={false}
      />
      <Button className="w-fit mx-auto lg:mr-0" onClick={onClick}>
        Home Page <ArrowRight size="18" />
      </Button>
    </div>
  );
}
