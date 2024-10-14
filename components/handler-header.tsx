"use client";

import { ArrowLeftToLine } from "lucide-react"; //icons for back button
import { UserButton, useUser } from "@stackframe/stack";
import { useTheme } from "next-themes";
import { Logo } from "./logo";

// type Back = {
//   name: React.ReactNode;
//   href: string;
//   icon: LucideIcon;
// };

export default function HandlerHeader() {
  const user = useUser();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="fixed w-full z-50 p-4 h-14 flex items-center py-4 border-b justify-between bg-background">
        <Logo link={user ? "/dashboard" : "/"} />

        <div className="flex items-center justify-end gap-5">
          <UserButton
            colorModeToggle={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          />
        </div>
<div className="fixed w-full z-50 p-4 h-14 flex items-center py-4 border-b justify-content bg-background dark font-weight-bold">
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.history.back();
    }}
    className="flex items-center" // Align icon and text
  >
    <ArrowLeftToLine className="mr-2" /> {/* Add margin for spacing */}
    Back
  </button>
</div>

      </header>
      <div className="min-h-14" /> {/* Placeholder for fixed header */}
    </>
  );
}
