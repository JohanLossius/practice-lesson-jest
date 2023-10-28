// test('It adds 1 and 2 and gets 3 as a result', () => {
//   expect(1 + 2).toEqual(3);
// });


import { addNr, addNr2, sumExport } from "./script";

test('It adds two numbers, and checks if it equals the sum of 15', () => {
  expect(addNr + addNr2).toEqual(15);
});

test('It checks if the function returns 15', () => {
  expect(sumExport).toEqual(15);
});