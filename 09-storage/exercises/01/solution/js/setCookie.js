const setCookie = (string) => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 15 * 60 * 1000);
  document.cookie = `token=${string};expires=${expiresDate}; path=/`;
};

export default setCookie;
