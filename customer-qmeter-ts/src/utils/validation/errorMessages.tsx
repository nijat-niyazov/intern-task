export const errorMessages = {
  // name: 'Name must consist of 2 words and each word must have at least 2 characters',
  // email:
  //   "Pattern must be like example@example.com and don't contain any white space",
  // phoneNumber:
  //   "Phone number must contains only numbers",
};

function getErrorMessage(field, value) {
  if (field === 'phoneNumber') {
    switch (true) {
     
      case /^0/.test(value):
        return 'Phone code starts with 0';
        break;

      case value?.length < 5:
        return 'Phone code has less than 5 characters';
        break;
     
        default:
        return 'Phone number must contains only numbers';
    }
  }
}

console.log(getErrorMessage('phoneNumber'), '023');

