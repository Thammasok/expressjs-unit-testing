const twoSumBigOnSquared = function (nums, target) {
  const len = nums.length

  if (len > 0) {
    let currentIndex = 0

    for (i = 1; i < len; i++) {
      for(j = 0; j < len; j++) {
        if (nums[currentIndex] + nums[j] === target) {
          return [currentIndex, j]
        }
      }
      currentIndex = i
    }
  }
  
  return false
}

module.exports = {
  twoSumBigOnSquared
}