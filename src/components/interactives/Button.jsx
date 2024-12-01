import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Button({
  icon,
  iconStyle,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color = "bg-primary",
  animation = true,
}) {
  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
    iconStyle = "size-[18px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
    iconStyle = "size-[24px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";

  const CustomTagName = removeAnchor ? "div" : tagName || "a";

  return (
    <CustomTag
      tagName={CustomTagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: buttonLink })}
      className=""
    >
      <Animation>
        <button
          onClick={onClick}
          className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-darker hover:scale-110`}
        >
          <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
            {React.cloneElement(icon, { className: iconStyle })}
            <p className={`flex items-center ${textclassName}`}>{label}</p>
          </div>
        </button>
      </Animation>
    </CustomTag>
  );
}
