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
  
  export const div = onView(motion.div);
  export const h1 = onView(motion.h1);
  export const h2 = onView(motion.h2);
  export const h3 = onView(motion.h3);
  export const h4 = onView(motion.h4);
  export const h5 = onView(motion.h5);
  export const h6 = onView(motion.h6);
  export const p = onView(motion.p);

  export const xdiv = animateOnly(motion.div);
  export const xh1 = animateOnly(motion.h1);
  export const xh2 = animateOnly(motion.h2);
  export const xh3 = animateOnly(motion.h3);
  export const xh4 = animateOnly(motion.h4);
  export const xh5 = animateOnly(motion.h5);
  export const xh6 = animateOnly(motion.h6);
  export const xp = animateOnly(motion.p);