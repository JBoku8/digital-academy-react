export const setValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getValue = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};
export const checkValue = (key) => !!localStorage.getItem(key);
export const removeValue = (key) => localStorage.removeItem(key);
