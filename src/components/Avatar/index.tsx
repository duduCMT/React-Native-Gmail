import { Image } from "react-native";
import clsx from "clsx";

import { AvatarProps } from "./types";

export function Avatar({ size = "medium", ...rest }: AvatarProps) {
  return (
    <Image 
      className={clsx("rounded-full", {
        "w-8 h-8": size === "small",
        "w-10 h-10": size === "medium",
      })} 
      {...rest} 
    />
  );
};