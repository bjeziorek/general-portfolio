import { NavLink } from "react-router-dom";
import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import { useTheme } from "../providers/ThemeContext";

export type ButtonVariant = "ghost" | "classic" | "solid" | "soft" | "surface" | "outline";

type SidebarNavItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  isIconBehind?:boolean;
  buttonVariant?:ButtonVariant
};

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  to,
  label,
  icon,
  isIconBehind=false,
  buttonVariant="ghost"
}) => {
  const {color, colorInactive} = useTheme();
  return (
    <NavLink to={to} className="w-full">
      {({ isActive }) => (
        <Button
          asChild
          variant={buttonVariant}
          color={isActive ? color : colorInactive}
          className="w-full justify-start"
        >
          <Flex align="center" gap="3">
            {isIconBehind?null:icon}
            <span>{label}</span>
             {isIconBehind?icon:null}
          </Flex>
        </Button>
      )}
    </NavLink>
  )
};
