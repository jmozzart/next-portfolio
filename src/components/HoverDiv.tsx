"use client"
import React from "react";

interface HoverProps {
 className: string;
 children: React.ReactNode;
}


export default function HoverDiv({ className, children }: HoverProps) {
    return (
        <div className={className}>
      {children}
      </div>
    )
}