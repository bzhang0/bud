"use client";
import React from "react";
import Head from "next/head";

import localFont from "next/font/local";

const neco = localFont({
  src: [
    {
      path: "fonts/Neco-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Neco-MediumItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-neco",
});

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className={`${neco.variable} font-sans italic text-4xl`}>Bud</h1>
      </div>
    </>
  );
}
