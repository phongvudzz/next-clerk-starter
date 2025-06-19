import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        signIn: { baseTheme: neobrutalism },
      }}
      afterSignOutUrl={"/"}
      signInUrl="/sign-in"
      signInFallbackRedirectUrl={"/dashboard"}
    >
      {children}
    </ClerkProvider>
  );
}
