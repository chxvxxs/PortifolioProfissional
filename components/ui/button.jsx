"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const Button = forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        {
          "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
          "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
          "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
          "bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "bg-transparent underline-offset-4 hover:underline text-primary": variant === "link",
          "h-10 py-2 px-4": size === "default",
          "h-9 px-3 rounded-md": size === "sm",
          "h-11 px-8 rounded-md": size === "lg",
          "h-8 px-2 rounded-sm text-xs": size === "xs",
        },
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }
