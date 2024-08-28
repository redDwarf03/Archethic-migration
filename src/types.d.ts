type Network = "eth" | "bsc" | "matic";

type MigrationNetwork = {
  name: Network;
  icon: string;
  label: string;
  v1Contract: string;
  v2Contract: string;
};
