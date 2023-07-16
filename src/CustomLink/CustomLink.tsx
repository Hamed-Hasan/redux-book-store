import React, { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const CustomLink = ({ children, to, className, ...props }: CustomLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#4fa9e3" : "",
          borderLeft: match ? "4px solid #4fa9e3" : "",
          padding: "2px 8px",
          borderRadius: "10px",
        }}
        to={to}
        className={className}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
