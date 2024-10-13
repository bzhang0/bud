import React from "react";
import Head from "next/head";
import TopNavigation from "./TopNavigation";

export default function DefaultContent({ children }) {
  return (
    <>
      <Head></Head>
      <div className="flex min-h-screen">
        <div className="w-1/6"></div> {/* Left margin */}
        <div className="w-2/3 ml-8 mr-8 mx-auto">
          {/* add a div here that stacks the components */}
          <TopNavigation />
          {children}
        </div>
        <div className="w-1/6"></div> {/* Right margin */}
      </div>
    </>
  );
}
