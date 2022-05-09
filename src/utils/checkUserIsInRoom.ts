export const checkUserIsInRoom = (userId: string, members: any) => {
  let i;
  for (i in members) {
    if (i === userId) return true;
  }
  return false;
};
