import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const ExternalLink = ({ children, className, ...props }: ExternalLinkProps) => (
  <a {...props} className={className} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default ExternalLink;
