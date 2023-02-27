pragma circom 2.0.3;

template VerifySum(numItems) {
  signal input numbers[numItems];
  signal output out;

  signal sum[numItems];
  sum[0] <== numbers[0];

  for (var i = 1; i < numItems; i++) {
    sum[i] <== numbers[i] + sum[i-1];
  }

  out <== sum[numItems - 1];
}

component main = VerifySum(10);