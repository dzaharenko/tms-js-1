const myArr = [12, 53, 20, 18, 22, 10, 43, 57, 50, 1, 0, 100];

const replaceZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!(item % 10)) {
      const reg = /0/g;
      arr[i] = item.toString().replace(reg, 'zero');
    }
  }

  return arr;
};

const result = replaceZero(myArr);

console.log(result);
