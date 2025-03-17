import { useEffect } from "react";

const BlockConsole = () => {
  useEffect(() => {
    console.log = function () {}; // console.log ni bloklash
    console.warn = function () {}; // console.warn ni bloklash
    console.error = function () {}; // console.error ni bloklash
  }, []);

  return null;
};

export default BlockConsole;