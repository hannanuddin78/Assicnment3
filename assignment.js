//  feet To Mile start Now

function feetToMile(feet) {
    var mile = feet / 5280.0;
    return mile;
}
// 5280.0 ft = 1 mile
var result = feetToMile(1000);
console.log(result);

//  feet To Mile End Now


//  Wood Calculator Start Now

function woodCalculator(chair, tabile, bad) {
    var chairWoodNeed = chair * 1;
    var tabileWoodNeed = tabile * 3;
    var badWoodNeed = bad * 5;
    var totalWoodNeed = chairWoodNeed + tabileWoodNeed + badWoodNeed;
    return totalWoodNeed;
}

var woodresult = woodCalculator(10, 5, 5);
console.log(woodresult);

//  Wood Calculator End Now


//  Brick Calculator Start Now

function brickCalculator(fullHeightBuilding){
    var perFeetBrick = 1000;
    if(fullHeightBuilding > 0 && fullHeightBuilding <= 10){
        var totalFeet = (fullHeightBuilding * 15);
        var allBrick = (totalFeet * perFeetBrick);
        return allBrick;
    }
    else if(fullHeightBuilding > 10 && fullHeightBuilding <= 20){
        var firstToTen = 10 * 15 * perFeetBrick;
        var extraHeight = fullHeightBuilding - 10;
        var extraBrick =  extraHeight * 12 * perFeetBrick;
        var allBrick = extraBrick + firstToTen;
        return allBrick;
    }
    else if(fullHeightBuilding > 20){
        var firstToTen = 10 * 15 * perFeetBrick;
        var elevenToTwenty = 10 * 12 * perFeetBrick;
        var extraHeight = fullHeightBuilding - 20;
        var extraBrick = extraHeight * 10 *perFeetBrick;
        var allBrick = extraBrick + firstToTen + elevenToTwenty;
        return allBrick;
    }
    else{
        return "please type your Building FLoor number";
    }
}

var totalAllBrick = brickCalculator(20);
console.log(totalAllBrick);

//  Brick Calculator End NOW


//  Tiny Friend Start Now

function tinyFriends(names) {
    var smallest = names[0];
    for (let i = 0; i < names.length; i++) {
        var crntname = names[i]
        if( crntname.length < smallest.length ) {
            smallest = crntname;
        }
    }
    return smallest
}

var smallestname = tinyFriends(['akash', 'smTareq', 'HannanAkash', 'Tasnim', 'Dev'])
console.log(smallestname)

//  Tiny Friend End Now