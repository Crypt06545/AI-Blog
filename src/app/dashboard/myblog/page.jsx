"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
const getUserDataByEmail = () => {
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (isLoaded && user) {
      // console.log(user?.fullName);

      console.log(user?.primaryEmailAddress?.emailAddress);
    }
  }, [isLoaded, user]);

  return (
    <div>
      {/* {params.email} */}
      this is blog
    </div>
  );
};

export default getUserDataByEmail;
