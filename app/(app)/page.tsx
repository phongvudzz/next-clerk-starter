import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Github,
  Rocket,
  Users,
  Palette,
  DatabaseIcon,
  Server,
  ArrowRight,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function LandingPage() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Next.js 15",
      description:
        "The leading React framework for modern, high-performance, and SEO-friendly full-stack applications.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Clerk",
      description:
        "A comprehensive user authentication and management solution, easy to integrate and customize.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Shadcn/UI",
      description:
        "A collection of beautiful, accessible, and highly customizable UI components built on Tailwind CSS.",
    },
    {
      icon: <DatabaseIcon className="h-8 w-8 text-primary" />,
      title: "Prisma",
      description:
        "A next-generation ORM for Node.js and TypeScript, enabling safe and efficient database interactions.",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "PostgreSQL",
      description:
        "A powerful, reliable, and highly scalable open-source relational database system.",
    },
  ];

  const myGithubLink = "https://github.com/phongvudzz/next-clerk-starter";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-stone-950">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className=" px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
                Next.js Full-Stack Starter
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-50">
                Kickstart Your Full-Stack Project
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                This template provides a solid foundation with Next.js, Clerk,
                Shadcn/UI, Prisma, and PostgreSQL. Focus on building features,
                not wrestling with complex tech setups.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  <Link
                    href={myGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-800 bg-transparent"
                >
                  <Link href="#features">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-950"
        >
          <div className=" px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                Powerful Toolset, Batteries Included
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                Leverage leading technologies to build modern, secure, and
                efficient web applications.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                Use this template to save setup time and focus on developing
                your product.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                <Link
                  href={myGithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Clone Repository Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className=" px-4 md:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Next.js Full-Stack Starter.
            Created by v0.
          </p>
          <p className="mt-1">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              className="underline hover:text-primary"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://clerk.com"
              className="underline hover:text-primary"
            >
              Clerk
            </Link>
            ,{" "}
            <Link
              href="https://ui.shadcn.com"
              className="underline hover:text-primary"
            >
              Shadcn/UI
            </Link>
            ,{" "}
            <Link
              href="https://www.prisma.io/"
              className="underline hover:text-primary"
            >
              Prisma
            </Link>
            , and{" "}
            <Link
              href="https://www.postgresql.org/"
              className="underline hover:text-primary"
            >
              PostgreSQL
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
