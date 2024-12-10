import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CardLayoutProps = {
  children: ReactNode;
  title?: string;
  className?: string;
  bgColor?: string;
};

export const CardLayout = ({
  children,
  title,
  className,
  bgColor,
}: CardLayoutProps) => {
  return (
    <Card className={className} style={{ backgroundColor: bgColor }}>
      {title && (
        <CardHeader className="border-b">
          <CardTitle className="text-[#212529] text-base">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
};
