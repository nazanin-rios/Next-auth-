import { cn } from "@/lib/utils";

interface HeaderProps {
  lable: string;
}

export const Header = ({ lable }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold")}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{lable}</p>
    </div>
  );
};
