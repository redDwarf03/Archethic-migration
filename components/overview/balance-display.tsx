import NetworkCard from "./network-card";
import { migrationConfig } from "../../config/networks.ts";

export default function BalanceDisplay({
  onClick,
}: {
  onClick: (chain: Network) => void;
}) {
  return (
    <div className="bg-background border border-border-light p-[18px] xl:p-[24px] 2xl:p-[32px] rounded-[10px]">
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[18px] xl:gap-[24px] 2xl:gap-[32px] items-center">
        {migrationConfig.map((network, index) => (
          <>
            {index !== 0 && (
              <div className="w-full bg-border-dark h-px md:h-[232px] md:w-px" />
            )}
            <NetworkCard
              onClick={() => onClick(network.name)}
              networkIcon={network.icon}
              network={network.label}
              balance="30 000"
              migrationCompleted={true}
              delay={200 + index * 100}
            />
          </>
        ))}
      </div>
    </div>
  );
}
