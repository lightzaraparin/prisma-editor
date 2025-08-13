import Link from "next/link";
import { Icons } from "../ui/icons";
import { Button } from "./components/button";
import { GithubStarsButton } from "./components/github-button";
import { signIn, useSession } from "next-auth/react";

export default function Hero() {
  const { status } = useSession();

  return (
    <section className="container mx-auto space-y-28 px-6">
      <div className="mx-auto pt-12 text-center lg:pt-16 xl:pt-24">
        <div>
          <h2 className="mx-auto max-w-3xl whitespace-pre-wrap text-center text-2xl font-extrabold leading-tight tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
            Professional Prisma Schema Editor by Evelan GmbH
          </h2>
          <p className="mx-auto max-w-[60ch] pt-3 text-center text-sm font-medium text-zinc-600 dark:text-zinc-300 md:text-lg">
            Powerful visualization and editing capabilities for your Prisma schemas. 
            Built for growth-oriented businesses and professional developers.
          </p>
          <h1 className="sr-only">
            Evelan Prisma Editor
          </h1>
          <h1 className="sr-only">
            Prisma Schema
          </h1>
          <h1 className="sr-only">
            Prisma Schema Editor
          </h1>
          <h1 className="sr-only">
            Prisma schema visualization
          </h1>
          <h1 className="sr-only">
            prisma visualizer
          </h1>
          <h1 className="sr-only">
            prisma schema generator
          </h1>
          <h1 className="sr-only">
            prisma schema builder
          </h1>
          <h1 className="sr-only">
            Prisma.io
          </h1>
          <h1 className="sr-only">
            Prisma schema editing
          </h1>
          <h1 className="sr-only">
            Prisma schema generator
          </h1>
          <p className="sr-only">
            Evelan Prisma Editor: Professional Prisma Schema Editor and visualization tool. 
            Visualize and edit Prisma schemas with ease.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 ">
            <p className="sr-only">
              Source code on github mohammed-bahumaish/prisma-editor
            </p>
            <Link
              href="https://github.com/mohammed-bahumaish/prisma-editor"
              target="_blank"
              rel="noopener noreferrer"
              title="Source code on Github"
            >
              <GithubStarsButton className="lg:text-lg" />
            </Link>

            <>
              <p className="sr-only">Login</p>
              {status !== "authenticated" ? (
                <Button
                  variant="primary"
                  className="lg:text-lg"
                  onClick={() => signIn("github", { callbackUrl: "/schema" })}
                >
                  Get Started
                  <Icons.arrowRight size={20} strokeWidth={3} />
                </Button>
              ) : (
                <Link href="/schema">
                  <Button variant="primary" className="lg:text-lg">
                    My Schemas
                    <Icons.arrowRight size={20} strokeWidth={3} />
                  </Button>
                </Link>
              )}
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
