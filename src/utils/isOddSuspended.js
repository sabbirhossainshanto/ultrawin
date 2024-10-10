const isOddSuspended = (runner) => {
  if (runner?.status !== "OPEN" && runner?.status !== "ACTIVE") {
    return true;
  }else{
    return false
  }
};

export default isOddSuspended;
