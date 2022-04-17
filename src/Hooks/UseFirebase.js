import { useState } from "react";

const UseFirebase = () => {
  const [UserDetails, SetUseDetails] = useState({});
  return { UserDetails, SetUseDetails };
};

export default UseFirebase;
