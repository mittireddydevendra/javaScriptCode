const str = "javascript";

const frequency = {};

for (const char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);