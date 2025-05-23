"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import Button from "../button/Button";
const ChangeMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Button onClickHandler={toggleTheme}>
        {theme === "light" ? (
          <div className="w-[25px] h-[25px]  pt-1">
            <IoMoonOutline className="w-full h-full text-[rgba(30,58,138)]" />
          </div>
        ) : (
          <div className="min-w-[25px] min-h-[25px] pt-1">
            <IoSunnyOutline className="w-full h-full" />
          </div>
        )}
      </Button>
    </div>
  );
};
export default ChangeMode;
