Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
  };
  const nums = [1, 2, 3];
  console.log(nums.last()); // 3
  
  const empty = [];
  console.log(empty.last()); // -1
    