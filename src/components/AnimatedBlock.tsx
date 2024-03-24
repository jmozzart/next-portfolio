"use client";
import React, { FC, ReactNode } from 'react';
import { motion } from "framer-motion"


interface Props {
    className?: string;
    children: ReactNode;
    speed?: number;
}

const withAnimation = (Component: any) => {
    const AnimatedComponent: FC<Props> = ({ className, children, speed }) => {
      return (
        <Component className={className}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: speed || 0.5}}
          viewport={{ once: true }}
        >
          {children}
        </Component>
      );
    };
  
    return AnimatedComponent;
  };
  
  export const div = withAnimation(motion.div);
  export const h1 = withAnimation(motion.h1);
  export const h2 = withAnimation(motion.h2);
  export const h3 = withAnimation(motion.h3);
  export const h4 = withAnimation(motion.h4);
  export const h5 = withAnimation(motion.h5);
  export const h6 = withAnimation(motion.h6);
  export const p = withAnimation(motion.p);
