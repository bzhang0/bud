import React from "react";
import DefaultContent from "../../components/DefaultContent";
import ProgressRing from "../../components/ProgressRing";
import { PROGRESS_RING, COLORS } from "../../utils/constants";

import ProgressTile from "@/components/ProgressTile";
import sleepIcon from "@iconify/icons-mdi/sleep";
import footPrintIcon from "@iconify/icons-mdi/foot-print";
import fireIcon from "@iconify/icons-mdi/fire";

const tiles = [
  {
    icon: fireIcon,
    description: "calories burned",
    value: 2000,
    color: COLORS.red,
  },
  {
    icon: footPrintIcon,
    description: "steps taken",
    value: 1000,
    color: COLORS.green,
  },
  {
    icon: sleepIcon,
    description: "hours of sleep",
    value: 8,
    color: COLORS.blue,
  },
];

const rings = [
  {
    color: COLORS.red, // Red color
    progress: 0.75,
  },
  {
    color: COLORS.green, // Green color
    progress: 0.5,
  },
  {
    color: COLORS.blue, // Blue color
    progress: 0.25,
  },
];

export default function Progress() {
  return (
    <>
      <DefaultContent>
        <h2 className="font-header text-3xl mt-8 mb-8">progress</h2>
        <div className="flex flex-row justify-between">
          <svg
            width={PROGRESS_RING.ringSize}
            height={PROGRESS_RING.ringSize}
            className="m-4"
          >
            {rings.map((ring, index) => (
              <ProgressRing
                key={index}
                radius={
                  (PROGRESS_RING.ringSize - PROGRESS_RING.strokeWidth) / 2 -
                  index * (PROGRESS_RING.strokeWidth + PROGRESS_RING.gap)
                }
                strokeWidth={PROGRESS_RING.strokeWidth}
                progress={ring.progress}
                color={ring.color}
                backgroundColor={COLORS.gray}
                center={PROGRESS_RING.center}
              />
            ))}
          </svg>
          <div className="flex flex-col justify-between">
            {tiles.map((tile, index) => (
              <ProgressTile key={index} {...tile} />
            ))}
          </div>
        </div>
      </DefaultContent>
    </>
  );
}
