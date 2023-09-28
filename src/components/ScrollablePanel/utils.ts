export const getNextIndex = (
  curIndex: number,
  deltaY: number,
  numPageIds: number,
) => {
  if (deltaY > 0) {
    return Math.min(curIndex + 1, numPageIds - 1);
  } else if (deltaY < 0) {
    return Math.max(curIndex - 1, 0);
  }
  return curIndex;
};
