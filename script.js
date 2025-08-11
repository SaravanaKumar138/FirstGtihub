let finalArray = [];
const nestedArray = [1, [2, 3], [4, 5], 6];
nestedArray.forEach((el) => {
  if (el.length > 1) {
    el.forEach((cur) => {
      finalArray.push(cur);
    });
  } else finalArray.push(el);
});
console.log("Saravana Kumar B");
console.log(finalArray);
