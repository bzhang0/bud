"use client";
import React from "react";
import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import DefaultContent from "@/components/DefaultContent";

import Balance from "@/components/Balance";

export default function Home() {
  return (
    <>
      <DefaultContent>
        <h2 className="font-header text-3xl mt-8 mb-8">at a glance</h2>
        <div className="flex justify-between">
          <div className="w-3/4">
            <ProgressBar red={30} green={10} blue={10} />
          </div>
          <div className="w-1/6">
            <Balance points={300} />
          </div>
        </div>
        <h2 className="font-header text-3xl mt-8">pao</h2>
        <div className="mt-5 flex flex-row">
          <div className="w-1/2 m-5 p-5">
            <Image
              src="/img/pao.png"
              alt="pao the panda"
              layout="responsive"
              width={144}
              height={144}
            />
          </div>
          <div className="w-1/2 m-5 pt-5 pl-5 pr-5 pb-10 flex flex-col-reverse text-right font-sans text-xl">
            <p>
              Pao feels... <em>sleepy</em>
            </p>
          </div>
        </div>
      </DefaultContent>
    </>
  );
}
