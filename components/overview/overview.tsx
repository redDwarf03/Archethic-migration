"use client";

import { useState } from "react";
import arrowRight from "../../src/images/networks/arrow-right.svg";
import { Button } from "../button";
import BalanceCard from "./balance-card";
import BalanceDisplay from "./balance-display";
import Congratulations from "./congratulations";
import MigrationNetworks from "./migration-networks";
export default function Overview() {
  const [migrationNetwork, setMigrationNetwork] = useState<Network | null>(
    null
  );

  const [congratulations, setCongratulations] = useState(false);

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[32px] lg:gap-[42px] xl:gap-[52px] md:items-center md:flex-row">
        <div className="flex gap-[15px] max-w-[250px] lg:max-w-[209px] xl:max-w-[273px] 2xl:max-w-[315px]">
          <div className="w-px bg-border  min-h-full"></div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-12 xl:text-15 2xl:text-16 font-medium ">
              "Archethic is updating its ERC-20 UCO token to a new version that
              is more secure and harmonized across all blockchains. If you hold
              UCO tokens, it is important to migrate them to this new version to
              ensure future compatibility.
            </p>
            <Button variant="secondary" className="w-fit">
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex gap-[8px] lg:gap-[16px] xl:gap-[32px] items-center w-full">
          <BalanceCard balance={134000} version="Version 1" />
          <img
            src={arrowRight}
            alt="arrow"
            className="min-w-[25px] h-[25px] lg:min-w-[45px] lg:h-[45px]"
          />
          <BalanceCard balance={134000} version="Version 2" />
        </div>
      </div>
      {congratulations ? (
        <Congratulations
          onClick={() => {
            setCongratulations(false);
            setMigrationNetwork(null);
          }}
        />
      ) : (
        <>
          {migrationNetwork === null ? (
            <BalanceDisplay
              onClick={(chain) => {
                setMigrationNetwork(chain);
              }}
            />
          ) : (
            <MigrationNetworks
              migrate={() => {
                setCongratulations(true);
              }}
              network={migrationNetwork}
              backBtn={() => {
                setMigrationNetwork(null);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
