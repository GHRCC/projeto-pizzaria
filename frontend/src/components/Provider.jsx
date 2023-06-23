"use client";
import { SessionProvider, sessionProvider } from "next-auth/react";

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
