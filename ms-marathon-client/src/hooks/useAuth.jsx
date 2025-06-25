import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const authDetails = use(AuthContext);
  return authDetails;
};

export default useAuth;
