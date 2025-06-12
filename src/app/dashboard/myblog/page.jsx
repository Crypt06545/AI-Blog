"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      console.log("Username:", user.username);
      console.log("Email:", user.primaryEmailAddress?.emailAddress);
    }
  }, [isLoaded, user]);

  return <div>This is my page</div>;
};

export default Page;
