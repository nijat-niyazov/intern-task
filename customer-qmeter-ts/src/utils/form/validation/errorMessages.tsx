export const errorMessages = {
  name: 'Invalid Name and Last Name',
  email: "Invalid email pattern",
  phoneNumber: 'Phone number must have only numbers',
};

// export function getErrorMessage(field, value) {
//   // phoneNumber

//   if (field === 'phoneNumber') {
//     switch (true) {
//       case /^0/.test(value):
//         return "Phone number can't start with 0";
//         break;

//       case !/^\d{5,}$/.test(value):
//         return "Phone number can't have less than 5 characters";
//         break;

//       default:
//         break;
//     }
//   }

//   // email

//   if (field === 'email') {
//     switch (true) {
//       case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value):
//         return 'White space not allowed';
//         break;

//       default:
//         break;
//     }
//   }
// }
