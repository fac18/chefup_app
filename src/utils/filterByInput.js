export const filterByInput = (inputStr, array) => {
  //input string and lesson.title will only match using includes() if both are lower case
  if (inputStr === undefined) {
    return array;
  } else {
    return array.filter(lesson => {
      let lowerCaseInput = inputStr.toLowerCase();
      return lesson.title.toLowerCase().includes(lowerCaseInput);
    });
  }
};
