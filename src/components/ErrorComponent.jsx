import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <div>Error: {errorData.statusText}</div>
  )
}

export default ErrorComponent