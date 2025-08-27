'use client'
import { useEffect } from "react";
import { redirect } from "next/navigation";

//Once using database remove UseEffect
export default function HomeLayout({
  children,
}: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("user")) {
      redirect("/dashboard");
    }
  }, []);

  return <>
    {children}
    </>;
}