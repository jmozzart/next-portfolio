"use client";
import React, { FC, ReactNode } from 'react';
import { motion } from "framer-motion"


interface Props {
    className?: string;
    children: ReactNode;
    speed?: number;
    from?: "left" | "right" | "top" | "bottom";
    delay?: number;
    purpose?: "viewport" | "animate"
}

const onView = (Component: any) => {
    const AnimatedComponent: FC<Props> = ({ className, children, speed, from, delay = 0, purpose }) => {
      return (
        <Component className={className}
          initial={{ 
            translateY: from === "top" ? -100 : from === "left" || from === "right" ? 0 : 100,
            translateX: from === "left" ? -100 : from === "right" ? 100 : 0,
            opacity: 0 }}
          whileInView={{
            translateY: 0,
            translateX: 0,
            opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: speed || 0.5,
            delay: delay || 0, 
          }}
        >
          {children}
        </Component>
      );
    };
  
    return AnimatedComponent;
  };


const animateOnly = (Component: any) => {
  const AnimatedComponent: FC<Props> = ({ className, children, speed, from, delay = 0, purpose }) => {
    return (
      <Component className={className}
        initial={{ 
          translateY: from === "top" ? -100 : from === "left" || from === "right" ? 0 : 100,
          translateX: from === "left" ? -100 : from === "right" ? 100 : 0,
          opacity: 0 }}
        animate={{
          translateY: 0,
          translateX: 0,
          opacity: 1 }}

        transition={{
          duration: speed || 0.5,
          delay: delay || 0, 
        }}

      >
        {children}
      </Component>
    );
  };

  return AnimatedComponent;
};



interface HoverProps {
 className: string;
 children: React.ReactNode;
}


export function HoverDiv({ className, children }: HoverProps) {
    return (
        <div className={className}>
      {children}
      </div>
    )
}
  
  export const Mdiv = onView(motion.div);
  export const Mh1 = onView(motion.h1);
  export const Mh2 = onView(motion.h2);
  export const Mh3 = onView(motion.h3);
  export const Mh4 = onView(motion.h4);
  export const Mh5 = onView(motion.h5);
  export const Mh6 = onView(motion.h6);
  export const Mp = onView(motion.p);

  export const Xdiv = animateOnly(motion.div);
  export const Xh1 = animateOnly(motion.h1);
  export const Xh2 = animateOnly(motion.h2);
  export const Xh3 = animateOnly(motion.h3);
  export const Xh4 = animateOnly(motion.h4);
  export const Xh5 = animateOnly(motion.h5);
  export const Xh6 = animateOnly(motion.h6);
  export const Xp = animateOnly(motion.p);