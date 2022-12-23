/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function (nums) {
    let outputArr = [];
    for (let i = 0; i < nums.length; i++) {
      outputArr.push(nums[i] + (outputArr.length === 0 ? 0 : outputArr[i - 1]))
    }
    return outputArr;
  };