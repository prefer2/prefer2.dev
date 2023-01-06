import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-5 pt-20 pb-8">
      {children}
    </div>
  );
}

export default Layout;
