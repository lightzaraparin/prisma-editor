import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const title = "Evelan Prisma Editor | Professional Prisma Schema Editor";
  const description =
    "Evelan Prisma Editor: Professional Prisma Schema Editor and visualization tool. Built for growth-oriented businesses and professional developers.";
  
  // Dynamic URL generation
  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL || 'http://localhost:3000';
  };
  
  const url = getBaseUrl();
  
  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          siteName: title,
        }}
        twitter={{
          handle: "@evelan_gmbh",
          site: "@evelan_gmbh",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Evelan Prisma Editor, professional prisma visualizer, enterprise schema editor, business database design, Prisma schema generator, prisma schema builder, Prisma.io, Prisma Schema, prisma editor online, Prisma Schema Editor, Prisma schema visualization, Prisma schema editing, Database schema editor, Visual database schema design, SQL generation from Prisma schema, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Evelan GmbH",
          },
        ]}
      />
      <Head>
        <meta
          name="google-site-verification"
          content="8U9A6jsEwr0vCbYVqJC33MwLSq7YNbk5uRIz8EJdKjs"
        />
        <meta
          name="google-site-verification"
          content="JASFKuP84nQMaTJje9zpZ6EVmipJnzcQv37h8t1Kuv4"
        />
        <meta name="msvalidate.01" content="548C832C1081145B2047BAB9C7452E7F" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F8EGGW12QB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-F8EGGW12QB');
        `}
      </Script>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
