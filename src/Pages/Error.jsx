import React from "react";
import { useRouteError } from "react-router";
import PageNotFound from "../Componants/PageNotFound";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <PageNotFound></PageNotFound>;
};

export default Error;
