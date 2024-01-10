import { ReactNode } from "react";

function Button({ children }: { children: ReactNode}) {
  return <button className="border border-primary py-1 px-3">{children}</button>;
}

export default Button;
