import React, { type FC } from "react";
import { Icons } from "../ui/icons";

const features = [
  {
    title: "Professional Visualization",
    description:
      "Enterprise-grade database structure visualization with real-time updates for professional development teams.",
    icon: <Icons.arrowLeftRight className="h-6 w-6" />,
    color: "bg-evelan-primary text-white",
  },
  {
    title: "Intuitive Schema Editing",
    description: "Professional schema editing interface designed for business applications and growth-oriented development.",
    icon: <Icons.mouseClick className="h-6 w-6" />,
    color: "bg-evelan-accent text-white",
  },
  {
    title: "Team Collaboration",
    description: "Share schemas seamlessly with your development team for efficient collaboration and project management.",
    icon: <Icons.share className="h-6 w-6" />,
    color: "bg-evelan-secondary text-white",
  },
  {
    title: "Business-Focused Interface",
    description: "Professional interface optimized for business applications and enterprise development workflows.",
    icon: <Icons.happy className="h-6 w-6" />,
    color: "bg-evelan-success text-white",
  },
  {
    title: "AI-Powered Generation",
    description:
      "Leverage OpenAI integration for intelligent schema generation, perfect for rapid prototyping and business application development.",
    icon: <Icons.gpt className="h-6 w-6" />,
    color: "bg-evelan-warning text-white",
  },
];

export const Features: FC = () => {
  return (
    <section className="container mx-auto max-w-5xl space-y-28 px-6 py-32  ">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        {features.map((feature) => {
          return (
            <div key={feature.title}>
              <div
                className={`${feature.color} mb-3 grid h-12 w-12 place-items-center rounded-xl`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold md:text-xl">{feature.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 md:text-base">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
