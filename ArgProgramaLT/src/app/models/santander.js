function getMaximunAmount(quantity, m) {
  let n = 0;
  let arr1 = [];
  let maxRevenue = 0;

  n = quantity.length;

  for (let i = 0; i < n; i++) {
    arr1.push(quantity[i]);
  }

  arr1.sort(function (a, b) {
    return a - b;
  });
  arr1.reverse();

  while (m > 0) {
    m--;

    let X = arr1[0];
    arr1.shift();
    maxRevenue += X;
    arr1.push(X - 1);
    arr1.sort(function (a, b) {
      return a - b;
    });
    arr1.reverse();
  }
  return maxRevenue;
}
console.log(getMaximunAmount([10, 10, 8, 9, 1], 6));

function slotWheels(history) {
  let totalStops = 0;
  let historyOrdered = history.map((e) =>
    [...e].sort((a, b) => b - a).join("")
  );
  console.log(historyOrdered);

  for (let i = 0; i < historyOrdered[0].length; i++) {
    totalStops += Math.max(...historyOrdered.map((e) => e[i]));
  }
  return totalStops;
}

console.log(slotWheels(["137", "364", "115", "724"]));
