var thirdMax = function(nums) {
    let first = -Infinity;
    let sec = -Infinity;
    let third = -Infinity;

    for(let i=0;i<=nums.length;i++){
        if(nums[i]>first){
            third=sec;
            sec=first;
            first=nums[i];
        }else if(nums[i]>sec && nums[i]<first ){
            third=sec;
            sec=nums[i];
        }else if(nums[i]<sec && nums[i]>third) third =nums[i];
    }
    if(third!==-Infinity) return third;
    return first;
        
};
console.log(thirdMax([2,2,3,1]));