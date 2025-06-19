import React from "react";

import { ArrowLeft } from "lucide-react";

import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Dont&apos;t worry, even the best data sometimes gets lost in the
          internet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dashboard">
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <footer className="text-sm text-muted-foreground mt-12 text-center">
        If you belive this is an error , please contact our support team.
      </footer>
    </div>
  );
}
export default NotFound;
