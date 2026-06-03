function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(2, 3, function(result) {
  console.log(result);
});