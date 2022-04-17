import { useEffect, useState } from "react";

const useFetch = () => {
  const [servises, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [servises];
};

export default useFetch;
