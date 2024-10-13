import React from "react";
import Link from "next/link";

export default function TopNavigation() {
  return (
    <nav
      className="w-full flex flex-col items-center p-4 rounded-b-xl"
      style={{ backgroundColor: "#BDC497", color: "black" }}
    >
      <div className="text-6xl font-header mb-4">bud</div>
      <div className="flex space-x-10">
        <Link href="/" className="font-sans text-xl">
          home
        </Link>
        <Link href="/progress" className="font-sans text-xl">
          progress
        </Link>
        <Link href="/shop" className="font-sans text-xl">
          shop
        </Link>
        <Link href="/settings" className="font-sans text-xl">
          settings
        </Link>
      </div>
    </nav>
  );
}
