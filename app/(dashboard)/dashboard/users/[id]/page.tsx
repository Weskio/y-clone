import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const {id} = params;

  return <div>Single User {id}</div>;
};

export default page;
