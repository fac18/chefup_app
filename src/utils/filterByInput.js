export const filterByInput = (inputStr, array) => {
  let lowerCaseInput = inputStr.toLowerCase();
  //input string and lesson.title will only match using includes() if both are lower case
  return array.filter(lesson => {
    return lesson.title.toLowerCase().includes(lowerCaseInput);
  });
};
