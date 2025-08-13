import React from "react";
import Link from "next/link";
import { Icons } from "../ui/icons";

export default function Footer() {
  return (
    <footer className="dark:bg-brand-darker bg-brand-dark/5 ">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center gap-4">
                    <Icons.logo />
                    <span className="text-lg font-bold">Evelan Prisma Editor</span>
                  </div>
                </Link>
              </div>
              <h5 className="sr-only">
                Evelan Prisma Editor: Professional Prisma Schema Editor and visualization tool. 
                Visualize and edit Prisma schemas with ease.
              </h5>
              <div className="text-gray-600 dark:text-gray-400">
                Professional Prisma Schema Editor by Evelan GmbH.
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Built for growth-oriented businesses and professional developers.
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-700 dark:text-gray-200">
                  Evelan GmbH
                </h6>
                <ul className="flex flex-col">
                  <li className="mb-1 w-full">
                    <span className="inline-block w-full text-gray-600 dark:text-gray-400">
                      Professional web development and business solutions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-700 dark:text-gray-200">
                  Resources
                </h6>
                <ul>
                  <li className="mb-1 w-full">
                    <a
                      href="https://www.prisma.io/docs/getting-started"
                      className="inline-block w-full text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      Set up Prisma
                    </a>
                  </li>
                  <li className="mb-1 w-full">
                    <a
                      href="https://www.prisma.io/docs/concepts/components/prisma-schema"
                      className="inline-block w-full text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      Prisma Schema
                    </a>
                  </li>
                  <li className="mb-1 w-full">
                    <a
                      href="https://github.com/mohammed-bahumaish/prisma-editor"
                      className="inline-block w-full text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
