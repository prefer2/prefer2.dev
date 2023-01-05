import React from "react";

interface IconProps extends React.PropsWithChildren {
  to?: string;
  size?: "s" | "m" | "l";
}

const Icon = ({ children, to, size = "s" }: IconProps) => {
  return (
    <a
      href={to}
      className={`${
        size === "s" ? "w-10" : size === "m" ? "w-12" : "w-20"
      } p-1 fill-gray-800 dark:fill-slate-50`}
    >
      {children}
    </a>
  );
};

export default Icon;
