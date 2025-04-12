import { Button } from "@/components/ui/button";
import { Plus, Minus, X, Divide, Equal } from "lucide-react";

const iconSize = 24;

interface ButtonProps {
  type: "number" | "operation";
  data: string;
  className?: string;
  onClick?: () => void;
}

export default function CalculatorButton({
  type,
  data,
  className = "",
  onClick,
}: ButtonProps) {
  const Icon = () => {
    switch (data) {
      case "+":
        return <Plus size={iconSize} />;
      case "-":
        return <Minus size={iconSize} />;
      case "*":
        return <X size={iconSize} />;
      case "/":
        return <Divide size={iconSize} />;
      case "=":
        return <Equal size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <Button
      variant={type === "number" ? "outline" : "default"}
      className={`${className} w-12 h-12 flex items-center justify-center`}
      onClick={onClick}
    >
      {type === "operation" && Icon() ? Icon() : data}
    </Button>
  );
}
