import React from "react";

import { PROGRESS_BAR, COLORS } from "../utils/constants";

import { Icon } from "@iconify/react";
import sleepIcon from "@iconify/icons-mdi/sleep";
import footPrintIcon from "@iconify/icons-mdi/foot-print";
import fireIcon from "@iconify/icons-mdi/fire";

export default function ProgressBar({ red, green, blue }) {
  const totalProgress = red + green + blue;

  return (
    <div
      className="relative w-full rounded-full"
      style={{
        height: `${PROGRESS_BAR.height}px`,
        backgroundColor: COLORS.gray,
      }}
    >
      <div
        className="rounded-full absolute"
        style={{
          backgroundColor: COLORS.blue,
          width: `${red + green + blue}%`,
          height: `${PROGRESS_BAR.height}px`,
        }}
      >
        {blue >= 10 && (
          <Icon
            icon={sleepIcon}
            className="absolute right-0 transform"
            style={{
              top: `${PROGRESS_BAR.height / 6}px`,
              right: `${PROGRESS_BAR.height / 3}px`,
            }}
            width={(PROGRESS_BAR.height * 2) / 3}
            height={(PROGRESS_BAR.height * 2) / 3}
          />
        )}
      </div>
      <div
        className="h-6 rounded-full absolute"
        style={{
          backgroundColor: COLORS.green,
          width: `${red + green}%`,
          height: `${PROGRESS_BAR.height}px`,
        }}
      >
        {green >= 10 && (
          <Icon
            icon={footPrintIcon}
            className="absolute right-0 transform"
            style={{
              top: `${PROGRESS_BAR.height / 6}px`,
              right: `${PROGRESS_BAR.height / 3}px`,
            }}
            width={(PROGRESS_BAR.height * 2) / 3}
            height={(PROGRESS_BAR.height * 2) / 3}
          />
        )}
      </div>
      <div
        className="h-6 rounded-full absolute"
        style={{
          backgroundColor: COLORS.red,
          width: `${red}%`,
          height: `${PROGRESS_BAR.height}px`,
        }}
      >
        {red >= 10 && (
          <Icon
            icon={fireIcon}
            className="absolute right-0 transform"
            style={{
              top: `${PROGRESS_BAR.height / 6}px`,
              right: `${PROGRESS_BAR.height / 3}px`,
            }}
            width={(PROGRESS_BAR.height * 2) / 3}
            height={(PROGRESS_BAR.height * 2) / 3}
          />
        )}
      </div>
    </div>
  );
}
