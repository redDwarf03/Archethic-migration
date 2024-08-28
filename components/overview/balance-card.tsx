"use client";

import logoBalance from "../../src/images/logo-balance.png";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function BalanceCard() {
  const counterRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<{ value: number }>({ value: 0 });
  const [balance, setBalance] = useState(164000);

  useEffect(() => {
    const counter = counterRef.current;
    if (counter) {
      gsap.to(countRef.current, {
        value: balance,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          counter.textContent = formatNumber(
            Math.round(countRef.current.value),
          );
        },
      });
    }
  }, [balance]);

  return (
    <div>
      <div className="p-[18px] xl:p-[24px] 2xl:p-[32px] rounded-[10px] bg-balance-card bg-cover bg-center border border-border-light flex flex-col gap-[12px] xl:gap-[18px] w-full sm:max-w-[310px] xl:max-w-[390px]">
        <h2 className="text-24 xl:text-26 font-semibold">My Balance</h2>
        <div className="flex items-center gap-[10px]">
          <img
            src={logoBalance}
            alt="logo balance"
            className="w-[39.487px] h-[35px] xl:w-[44px] xl:h-[39px]"
          />
          <p ref={counterRef} className="text-30 xl:text-35 font-medium">
            {formatNumber(balance)}
          </p>
        </div>
      </div>
    </div>
  );
}
