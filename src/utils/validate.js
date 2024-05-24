export const checkCredentials = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );
  if (!isEmailValid) {
    return 'Email is Invalid';
  }
  if (!isPasswordValid) {
    return 'Password is Invalid';
  }
  return null;
};
