import React, { use } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  return <div>id : ${id}</div>;
};

export default page;
