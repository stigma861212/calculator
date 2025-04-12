import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <h1 className="p-4 font-bold text-4xl">歡迎使用計算器</h1>
      <p className="p-6 text-lg">
        使用Next.js、React、Typescript、Tailwind CSS開發製作
      </p>
      <Button variant="link" asChild>
        <Link href="/calculator">
          <ArrowRight />
          計算器
        </Link>
      </Button>
    </div>
  );
}
