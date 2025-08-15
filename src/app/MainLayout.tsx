import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "@/scenes/general/header/Header";
import Footer from "@/scenes/general/Footer";

type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};

const MainLayout = ({ children, title = "My App" }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
