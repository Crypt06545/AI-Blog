"use client";

import { blogsApi } from "@/app/redux/api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";


export default function ReduxProvider({ children }) {
  return (
    <ApiProvider api={blogsApi}>
      {children}
    </ApiProvider>
  );
}
