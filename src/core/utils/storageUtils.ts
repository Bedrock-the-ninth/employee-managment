// /src/core/utils/storageUtils.ts
export const getItem = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item;
};

export const setItem = (key: string, value: string): number => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log(
      `Encountered an error while trying to set ${value} for the key ${key}.\nError: ${error}`,
    );
    return 1;
  }
  return 0;
};

export const removeItem = (key: string): number => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(
      `Encountered an error while trying to remove the element with the key ${key}.\nError: ${error}`,
    );
    return 1;
  }
  return 0;
};

export const clearStorage = (): number => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(
      `Encountered an error while trying to clear browser storage.\nError: ${error}`,
    );
    return 1;
  }
  return 0;
};
