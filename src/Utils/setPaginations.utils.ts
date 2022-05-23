// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const nextPage = (setOffSet: (offSet: number) => void, offSet: number) => {
  setOffSet(offSet + 10);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const prevPage = (setOffSet: (offSet: number) => void, offSet: number) => {
  if (offSet === 0) return;
  setOffSet(offSet - 10);
};

export const initialPage = (setOffSet: (offSet: number) => void) => {
  setOffSet(0);
};
