import { Button } from "../button";
import uco from "../../src/images/networks/uco.svg";
import { ArrowRight } from "lucide-react";

export type CongratulationsProps = {
  onClick: () => void;
};

export default function Congratulations({ onClick }: CongratulationsProps) {
  return (
    <div className="px-[24px] py-[50px] lg:p-[18px] xl:p-[24px] 2xl:p-[32px] 2xl:pt-[95px] lg:pt-[66px] xl:pt-[87px] flex flex-col gap-[50px] bg-background border border-border-light rounded-[10px]">
      <div className="flex flex-col gap-[32px] lg:justify-center items-center">
        <p className="text-18 text-center font-medium">
          Congratulations, you have migrated your tokens and received
        </p>
        <div className="px-[18px] py-[10px] flex items-center gap-[10px] border border-border-light rounded-[10px] w-fit mx-auto">
          <p className="text-32 font-medium">30 000</p>
          <img src={uco} alt="uco" className="w-[29px] h-[24.701px]" />
        </div>
      </div>
      <Button className="w-fit mx-auto lg:mr-0" onClick={onClick}>
        Home Page <ArrowRight size="18" />
      </Button>
    </div>
  );
}
