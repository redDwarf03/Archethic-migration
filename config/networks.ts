import eth from "../src/images/networks/eth.png";
import bsc from "../src/images/networks/bsc.png";
import matic from "../src/images/networks/matic.png";

export const migrationConfig: MigrationNetwork[] = [
  {
    name: "eth",
    icon: eth,
    label: "Ethereum Network",
    v1Contract: "",
    v2Contract: "",
  },
  {
    name: "bsc",
    icon: bsc,
    label: "BSC Network",
    v1Contract: "",
    v2Contract: "",
  },
  {
    name: "matic",
    icon: matic,
    label: "Polygon Network",
    v1Contract: "",
    v2Contract: "",
  },
];
