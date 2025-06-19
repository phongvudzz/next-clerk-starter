import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12 bg-background">
      {children}
    </div>
  );
}

export default AuthLayout;
