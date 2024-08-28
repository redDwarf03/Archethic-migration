import { cn } from "../lib/utils.ts";

export type WrapperProps = {
  children: React.ReactNode;
  middle?: boolean;
};

export default function Wrapper({ children, middle }: WrapperProps) {
  return (
    <div
      className={cn(
        "h-full min-h-[calc(100vh-116px)] xl:min-h-[calc(100vh-136px)] 2xl:xl:min-h-[calc(100vh-169px)]",
        middle && "flex items-center justify-center",
      )}
    >
      {children}
    </div>
  );
}
