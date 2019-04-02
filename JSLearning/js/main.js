/******************************
* Coding tutorial challenge 1: 
*/ 
// height calculated in meters, mass in kgs

/*
var markHeight, markMass, markBMI, isMarkLarger;
var johnHeight, johnMass, johnBMI, isJohnLarger;

markMass = 92;
markHeight = 1.8;

johnMass = 78;
johnHeight = 2.0;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

isMarkLarger = markBMI > johnBMI;
isJohnLarger = johnBMI > markBMI;

console.log('Marks BMI: ' + markBMI);
console.log('Johns BMI: ' + johnBMI);
console.log('Is Mark larger than john? : ' + isMarkLarger);
console.log('Vice versa, Is john larger than mark? : ' + isJohnLarger);
*/



/******************************
* Coding tutorial challenge 2: 
*/

/*
var jScore1 = 110, jScore2 = 110, jScore3 = 110;
var mScore1 = 110, mScore2 = 110, mScore3 = 110;
var maryScore1 = 110, maryScore2 = 110, maryScore3 = 114;

var jTotal = jScore1 + jScore2 + jScore3;
var mTotal = mScore1 + mScore2 + mScore3;
var maryTotal = maryScore1 + maryScore2 + maryScore3;

var jAvg = jTotal / 3;
var mAvg = mTotal / 3;
var maryAvg = maryTotal / 3;

switch (true) {
    case mAvg > jAvg && mAvg > maryAvg:
        console.log('Marks average score is greater than Johns and Mary\'s scores: mark = ' + mAvg + ' john = ' + jAvg + ' Mary = ' + maryAvg);
        break;
    case jAvg > mAvg && jAvg > maryAvg:
        console.log('Johns average score is greater than Mark and Mary\'s scores: mark = ' + mAvg + ' john = ' + jAvg + ' Mary = ' + maryAvg);
        break;
    case maryAvg > mAvg && maryAvg > jAvg:
        console.log('Mary\'s average score is greater than Mark and John\'s scores: mark = ' + mAvg + ' john = ' + jAvg + ' Mary = ' + maryAvg);
        break;
    case mAvg === jAvg && mAvg === maryAvg:
        console.log('All players had the same average scores! mark = ' + mAvg + ' john = ' + jAvg + ' Mary = ' + maryAvg);
        break;
    default: break;
}
*/



/******************************
* Coding tutorial challenge 3: 
*/

// spends amounts $124, $48, and $268 on three separate occasions to restaurants.
// likes to tip 20% if below 50. 15% if between 50 and 200. 10% if above 200.
// get 2 arrays: one contains the tip amounts he should pay for each restaurant visit.
// other contains the total amount he paid for each visit.
/*
function CalculateTipPercentage(value) {
    switch (true) {
        case value < 50:
            return 0.2;
        case value >= 50 && value < 200:
            return 0.15;
        case value >= 200:
            return 0.1;
        default: return 0;
    }
}

var restaurantVisits = [124, 48, 268];
console.log(restaurantVisits);

var tipArray = [CalculateTipPercentage(restaurantVisits[0]) * restaurantVisits[0], CalculateTipPercentage(restaurantVisits[1]) * restaurantVisits[1],
    CalculateTipPercentage(restaurantVisits[2]) * restaurantVisits[2]];

console.log(tipArray);

var totalArray = [restaurantVisits[0] + tipArray[0], restaurantVisits[1] + tipArray[1], restaurantVisits[2] + tipArray[2]];
console.log(totalArray);
*/



/******************************
* Coding tutorial challenge 4: 
*/
// Use functions within objects to come back to the BMI calculator.

/*
var JohnObject = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.75,
    calcBMI: function calcBMI() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var MarkObject = {
    firstName: 'Mark',
    lastName: 'Jones',
    mass: 78,
    height: 1.75,
    calcBMI: function calcBMI() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

JohnObject.calcBMI();
MarkObject.calcBMI();
console.log(JohnObject, MarkObject);

function CompareBMI(value1, value2) {
    if (value1.BMI > value2.BMI) {
        console.log('Higher BMI value: ' + value1.firstName + ' ' + value1.lastName + ' @ ' + value1.BMI + ' kgs.');
    }
    else if (value2.BMI > value1.BMI) {
        console.log('Higher BMI value: ' + value2.firstName + ' ' + value2.lastName + ' @ ' + value2.BMI + ' kgs.');
    }
    else if (value1.BMI === value2.BMI) {
        console.log('ABSOLUTE UNITS!! BOTH HAVE DAT SAME MASS!');
    }
}

CompareBMI(JohnObject, MarkObject);
*/



/******************************
* Coding tutorial challenge 5: 
*/
// Revisit the tip tip calculator but use objects, arrays, and LOOPS this time!
// John tips 20% if the bill is less than 50$. 
// John tips 15% if the bill is between 50 and 200$.
// John tips 10% if the bill is greater than 200$.
/*
var john = {
    visits: [124, 48, 268, 180],
    tipLogic: function (value) {
        this.tip = 0;
        
        switch (true) {
            case value < 50:
                this.tip = .2;
                break;
            case value >= 50 && value < 200:
                this.tip = .15;
                break;
            case value >= 200:
                this.tip = .1;
                break;
            default: this.tip = 0;
                break;
        }
        
        return this.tip;
    },
    totalSpent: function () {
        this.sum = 0;

        for (var i = 0; i < this.visits.length; i++) {
            this.sum += (this.visits[i] + (this.tipLogic(this.visits[i]) * this.visits[i]));
        }
        return this.sum;
    }
};

console.log(john);
console.log(john.totalSpent());
*/



console.log('New section starts now');