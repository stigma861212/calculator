"use client";
import { useState } from "react";
import Panel from "@/components/Panel";
import { Label } from "@/components/ui/label";
import CalculatorButton from "@/components/CalculatorButton";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberClick = (value: string) => {
    if (waitingForOperand) {
      setDisplay(value);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const calculate = (current: number, prev: number, op: string) => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        if (current === 0) {
          alert("不能除以 0");
          return prev;
        }
        return prev / current;
      default:
        return current;
    }
  };

  const handleOperationClick = (operation: string) => {
    const currentValue = Number(display);

    switch (operation) {
      case "AC":
        setDisplay("0");
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(false);
        break;
      case "=":
        if (previousValue !== null && operator) {
          const result = calculate(currentValue, previousValue, operator);
          setDisplay(parseFloat(result.toFixed(2)).toString());
          setPreviousValue(null);
          setOperator(null);
          setWaitingForOperand(false);
        }
        break;
      default:
        if (previousValue === null) {
          setPreviousValue(currentValue);
        } else if (operator) {
          const result = calculate(currentValue, previousValue, operator);
          setPreviousValue(result);
          setDisplay(parseFloat(result.toFixed(2)).toString());
        }
        setOperator(operation);
        setWaitingForOperand(true);
        break;
    }
  };

  const isOperation = (value: string) =>
    ["+", "-", "*", "/", "=", "AC"].includes(value);

  return (
    <div className="flex flex-col flex-1 justify-center items-center w-full min-h-full">
      <Panel
        title="計算器"
        className=""
        content={
          <div className="space-y-4">
            <Label htmlFor="result">輸出結果</Label>
            <div id="result" className="text-2xl text-right">
              {display}
            </div>

            <div className="button-group gap-2 grid grid-cols-4">
              {[
                "AC",
                "7",
                "8",
                "9",
                "+",
                "4",
                "5",
                "6",
                "-",
                "1",
                "2",
                "3",
                "*",
                "/",
                "0",
                "=",
              ].map((value) => (
                <CalculatorButton
                  key={value}
                  type={isOperation(value) ? "operation" : "number"}
                  data={value}
                  onClick={() =>
                    isOperation(value)
                      ? handleOperationClick(value)
                      : handleNumberClick(value)
                  }
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
