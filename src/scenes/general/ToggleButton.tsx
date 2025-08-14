"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border-dark-gray border rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={24} className="text-dark-gray" />
      ) : (
        <Moon size={24} className="text-dark-gray" />
      )}
    </button>
  );
};
