import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-3xl px-5 py-8">{children}</div>;
}

export default Layout;
