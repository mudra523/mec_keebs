const isUserLoggedIn = () => {
  const uid = localStorage.getItem('uid');
  return uid ? true : false;
}

const getUid = () => {
  const uid = localStorage.getItem('uid');
  return uid;
}

const signout = () => {
  localStorage.clear();
  window.location.replace("/login");
}

export { isUserLoggedIn, signout, getUid }