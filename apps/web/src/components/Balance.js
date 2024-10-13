import React from "react";

import cookieBite from "@iconify/icons-la/cookie-bite";
import { PROGRESS_BAR, COLORS } from "../utils/constants";
import { Icon } from "@iconify/react";

export default function Balance({ points }) {
  return (
    <div
      className="relative w-full rounded-full flex items-center justify-center"
      style={{
        height: `${PROGRESS_BAR.height}px`,
        backgroundColor: COLORS.gray,
      }}
    >
      <Icon icon={cookieBite} width={24} height={24} className="mr-1" />
      <p className="font-header">{points}</p>
    </div>
  );
}
