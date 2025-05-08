export const emailValidation = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^[0-9]{10}$/;

  return regex.test(phoneNumber);
};
