export const filterByInput = (inputStr, array) => {
  let lowerCaseInput = inputStr.toLowerCase();
  return array.filter(lesson => {
    return lesson.title.toLowerCase().includes(lowerCaseInput);
  });
};
