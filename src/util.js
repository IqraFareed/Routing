export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/iqrafareed");

  return res;
};
