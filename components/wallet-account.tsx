import { useAccount, useDisconnect } from "wagmi";
import { Button } from "./button";

export function WalletAccount() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  if (!address) return null;

  return (
    <div className={"flex gap-2"}>
      <Button disabled>{address?.slice(0, 7)}...</Button>
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
}
