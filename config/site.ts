export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION;

export const siteConfig = {
  name: APP_NAME || "Next.js Clerk Starter",
  url: APP_URL || "https://nextjs-clerk-starter.vercel.app",
  description:
    APP_DESCRIPTION || "Next.js Clerk Starter Template - by Phong Vu",
  //   links: {
  //     twitter: "https://twitter.com/shadcn",
  //     github: "https://github.com/shadcn-ui/ui",
  //   },
  //   ogImage: "https://v4.shadcn.com/opengraph-image.png",
};

export type SiteConfig = typeof siteConfig;
