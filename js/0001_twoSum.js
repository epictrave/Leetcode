/**
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * Time Conplexity: O(N²)
 * Space Conplexity: O(1)
 */
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * Time Conplexity: O(N)
 * Space Conplexity: O(N)
 */
const twoSumTwoPassHashTable = (nums, target) => {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    comp[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (comp[rest] && comp[rest] != i) {
      return [i, comp[rest]];
    }
  }
};

/**
 * Time Conplexity: O(N)
 * Space Conplexity: O(N)
 */
const twoSumOnePassHashTable = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[target - nums[i]] !== undefined) {
      return [comp[target - nums[i]], i];
    }
    comp[nums[i]] = i;
  }
};
