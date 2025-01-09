import * as React from "react";
import { cn } from "../../lib/utils";

// Define Card component with forwardRef
const Card = React.forwardRef(( { className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

// Define CardHeader component with forwardRef
const CardHeader = React.forwardRef(( { className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// Define CardTitle component with forwardRef
const CardTitle = React.forwardRef(( { className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Define CardDescription component with forwardRef
const CardDescription = React.forwardRef(( { className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Define CardContent component with forwardRef
const CardContent = React.forwardRef(( { className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Define CardFooter component with forwardRef
const CardFooter = React.forwardRef(( { className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Export the components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
