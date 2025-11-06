import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full items-center justify-center md:w-auto", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-xl",
      className
    )}
    {...props}
  />
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, active, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    active={active}
    className={cn(
      "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10",
      active ? "bg-white/[0.18] text-white" : "text-white/80",
      className
    )}
    {...props}
  />
));

NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };

