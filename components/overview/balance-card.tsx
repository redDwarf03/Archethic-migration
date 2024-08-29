"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import logoBalance from "../../src/images/logo-balance.png";

import bscLogo from "../../src/images/networks/bsc.png";
import copyIcon from "../../src/images/networks/copy.svg";
import ethLogo from "../../src/images/networks/eth.png";
import maticLogo from "../../src/images/networks/matic.png";

import { ChevronDown } from "lucide-react";
import Badge from "../badge";

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

type BalanceCardProps = {
  balance: number;
  version: "Version 1" | "Version 2";
  className?: string;
};

export default function BalanceCard({
  balance,
  version,
  className,
}: BalanceCardProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<{ value: number }>({ value: 0 });
  const [isBalance, setIsBalance] = useState(balance);

  useEffect(() => {
    const counter = counterRef.current;
    if (counter) {
      gsap.to(countRef.current, {
        value: isBalance,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          counter.textContent = formatNumber(
            Math.round(countRef.current.value)
          );
        },
      });
    }
  }, [isBalance]);

  return (
    <div className={cn("relative w-full max-w-[361px]", className)}>
      <div
        className={cn(
          "p-[14px] lg:p-[24px] xl:p-[32px] flex flex-col pb-[45px] lg:pb-[60px] xl:pb-[75px] rounded-[10px] border border-border-light relative overflow-hidden w-full"
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bottom-0  blur-[25px] w-full",
            version === "Version 1"
              ? "bg-[rgba(22,0,85,0.70)]"
              : "bg-balance-card bg-center"
          )}
        ></div>
        <div className="relative z-10">
          <Badge className="bg-transparent border border-border-light py-[5px] px-[7px] lg:py-[10px] lg:px-[15px] font-medium text-8 lg:text-15 lg:h-[40px]">
            {version}
          </Badge>
          <div className="flex flex-col items-end">
            <h2 className="text-12 lg:text-26 font-semibold">My Balance</h2>
            <div className="flex items-center gap-[4px] lg:gap-[10px]">
              <img
                src={logoBalance}
                alt="logo balance"
                className="w-[20.308px] h-[18px] lg:w-[44px] lg:h-[39px]"
              />
              <p ref={counterRef} className="text-16 lg:text-35 font-medium">
                {formatNumber(balance)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ChooseNetwork version={version} />
    </div>
  );
}

const networks = [
  { id: "ETH", logo: ethLogo, address: "0x5365z4Zei93..." },
  { id: "BSC", logo: bscLogo, address: "0x2365z4Zei93..." },
  { id: "MATIC", logo: maticLogo, address: "0x9065z4Zei93..." },
];

export function ChooseNetwork({
  version,
}: {
  version: "Version 1" | "Version 2";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [availableNetworks, setAvailableNetworks] = useState(networks.slice(1));

  const handleNetworkSelection = (network: (typeof networks)[number]) => {
    setSelectedNetwork(network);
    setAvailableNetworks((prevNetworks) => {
      const newAvailable = prevNetworks.filter((n) => n.id !== network.id);
      newAvailable.push(selectedNetwork);
      return newAvailable;
    });
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "absolute top-[91px] lg:top-[167px] xl:top-[175px] max-w-[200px] lg:max-w-[300px] lg:w-fit left-[14px] lg:left-[24px] xl:left-[32px] right-[14px] lg:right-[24px] xl:right-[32px] px-[8px] py-[4px] lg:py-[7px] lg:px-[12px] border border-border-light rounded-[20px] cursor-pointer",
        isOpen ? "bg-purple-dark" : "bg-transparent",
        version === "Version 1" ? "max-w-[200px]" : "max-w-fit"
      )}
      onClick={() => {
        if (version === "Version 1") {
          setIsOpen(!isOpen);
        }
      }}
    >
      <div className="flex flex-col gap-[5px]  ">
        <NetworkItem
          isOpen={isOpen}
          version={version}
          network={selectedNetwork}
          isSelected={true}
          onClick={() => {}}
        />
        {isOpen && version === "Version 1" && (
          <>
            {availableNetworks.map((network) => (
              <NetworkItem
                isOpen={isOpen}
                key={network.id}
                version={version}
                network={network}
                isSelected={false}
                onClick={() => handleNetworkSelection(network)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function NetworkItem({
  network,
  isSelected,
  isOpen,
  onClick,
  version,
}: {
  network: (typeof networks)[number];
  isSelected: boolean;
  isOpen: boolean;
  onClick: () => void;
  version?: "Version 1" | "Version 2";
}) {
  return (
    <div className="flex gap-[5px]  items-center" onClick={onClick}>
      <div className="flex items-center gap-px lg:gap-[3px]">
        {version === "Version 1" && (
          <ChevronDown
            className={cn(
              "w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]",
              !isSelected ? "text-transparent" : "",
              isOpen
                ? "rotate-180 transition-all duration-300"
                : "rotate-360 transition-all duration-300"
            )}
          />
        )}
        <div
          className={cn(
            "flex items-center gap-[5px] lg:gap-[10px]",
            !isSelected
              ? "!border-t-border-light border border-transparent pt-[5px]"
              : ""
          )}
        >
          <img
            src={network.logo}
            alt={network.id}
            className="w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]"
          />
          <p className="text-8 lg:text-12 font-medium flex items-center gap-1">
            <span className="hidden sm:block">Address : </span>{" "}
            {network.address}
          </p>
          {isSelected && (
            <img
              src={copyIcon}
              alt="copy"
              className="w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
