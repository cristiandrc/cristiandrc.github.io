import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialState) => {
  const [state, setState] = useState(initialState);
  let parsedItem;
  const localStorageItem = localStorage.getItem(itemName);

  useEffect(() => {
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialState));
      parsedItem = initialState;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setState(parsedItem);
  }, []);

  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
    setState(item);
  };

  return [state, saveItem];
};

export { useLocalStorage };
