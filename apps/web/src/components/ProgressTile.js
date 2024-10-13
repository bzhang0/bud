import React from "react";
import { Icon } from "@iconify/react";

const ProgressTile = ({ icon, color, description, value }) => {
  return (
    <div
      className="w-auto mb-4 p-4 rounded-lg shadow-m"
      style={{ color: color, backgroundColor: "#EAE8E8" }}
    >
      <div className="flex justify-between">
        <Icon icon={icon} width={24} height={24} className="mt-0.5 mr-1" />
        <p className="font-header text-3xl ml-1">{value}</p>
      </div>
      <p className="font-sans text-sm text-right mr-0.5">{description}</p>
    </div>
  );
};

export default ProgressTile;
