"use client";

import { useState } from "react";
import BalanceCard from "./balance-card";
import BalanceDisplay from "./balance-display";
import Congratulations from "./congratulations";
import MigrationNetworks from "./migration-networks";

export default function Overview() {
  const [migrationNetwork, setMigrationNetwork] = useState<Network | null>(
    null,
  );

  const [congratulations, setCongratulations] = useState(false);

  return (
    <div className="flex flex-col gap-[32px]">
      <BalanceCard />

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
