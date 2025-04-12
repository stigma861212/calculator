import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface PanelProps {
  title: string;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Panel({
  title,
  header,
  content,
  footer,
  className = "",
}: PanelProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        {header && <div>{header}</div>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
