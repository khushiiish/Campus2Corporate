import React from 'react';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <span {...props}>
      {children}
    </span>
  );
};
