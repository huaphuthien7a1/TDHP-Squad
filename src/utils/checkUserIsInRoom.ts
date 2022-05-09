export const checkUserIsInRoom = (userId: string, members: any): boolean => {
  let i: any;
  for (i of members) {
    if (i._id === userId) {
      return true;
    }
  }
  return false;
};
