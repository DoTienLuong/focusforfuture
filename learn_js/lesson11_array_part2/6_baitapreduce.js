
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(sports){
    var sum = function(acc, element){
        return element.gold + acc;  
    }
    var kq = sports.reduce(sum, 0);
    return kq;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23






