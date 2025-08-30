'use client'
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("user")) {
      redirect("/");
    }
  }, []);

  return <>
    {children}
    </>;
}