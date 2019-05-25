import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/orgs/nodejs")
      .then(response => response.json())
      .then(data => {
        let tempArray: any = [];
        // TODO: Fix lint error
        // eslint-disable-next-line
        Object.keys(data).map(function(key) {
          tempArray[key] = data[key];
        });
        return tempArray;
      })
      .then(data => setResult(data))
      .catch(error => console.error(error));
  }, []); // <-- The empty array stops the effect from running after the initial render.

  return result;
};
