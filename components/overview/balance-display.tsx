import { migrationConfig } from "../../config/networks.ts";
import NetworkCard from "./network-card";

export default function BalanceDisplay({
  onClick,
}: {
  onClick: (chain: Network) => void;
}) {
  return (
    <div className="">
      <div className="flex flex-col gap-[32px] lg:flex-row">
        {migrationConfig.map((network, index) => (
          <NetworkCard
            onClick={() => onClick(network.name)}
            networkIcon={network.icon}
            network={network.label}
            balance="30 000"
            migrationCompleted={false}
            delay={200 + index * 100}
          />
        ))}
      </div>
    </div>
  );
}
