console.log("Just a test 123 .");

// Code testing for Workflow lesson learning Jest, Babel, and Unit testing

const addNr = 5;
const addNr2 = 10;

function additionFunction(one, two) {
  const sum = one + two;
  return sum;
}

const sumExport = additionFunction(addNr, addNr2);

export { addNr, addNr2, sumExport };