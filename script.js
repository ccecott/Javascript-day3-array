let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true

    },
    {
        name: "Jack",
        score: 59,      //change back to 59
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];

const addScore = (array, name, score, date) => {

    //let passFail = score < 60 ? false : true;                      

    array.push({ name: name, score: score, date: date, passed: score >= 60 })
};


addScore(scores, "Jill", 99, "2020-09-15");
console.log(scores);

//delete scores by index using SPLICE
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
};
//deleteScoreByIndex(scores, 2);
//console.log(scores);

//delete scores by name using FINDINDEX and SPLICE

const deleteScoreByName = (name, array) => {
    const indexToRemove = array.findIndex((scoreElement) => {
        return scoreElement.name === name;
    });
    array.splice(indexToRemove, 1);

};
// deleteScoreByName("Joe", scores);
// console.log(scores);

const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true;
    } else {
        passed = false;
    }
    array[index].score = score;
    array[index].passed = passed;
};
editScore(scores, 0, 40);
console.log(scores);

const findScoreByName = (array, name) => {
    return array.find((scoreElement) => {
        return scoreElement.name === name;
    });
};
console.log(findScoreByName(scores, "Jill")); //returns an object

const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach((scoreElement) => {
        if (scoreElement.score < currentLowestScore.score) {
            currentLowestScore = scoreElement;

        }

    });
    return currentLowestScore;
};
console.log(findLowestScore(scores));

const findAverageQuizScore = (array) => {
    let currentScore = 0;
    for (let scoreElement of array) {
        currentScore += scoreElement.score;
    }
    return currentScore / array.length;
};
console.log(findAverageQuizScore(scores));

const filterScores = (array, property, value) => {
    return array.filter((scoreElement) => {
        return scoreElement[property] === value;
    });
};
console.log(filterScores(scores, "name", "Jill"));

//sort by ascending order
const sortScoresAsc = (array) => {
    return array.sort((a, b) => {
        if (a.score < b.score) {
            return -1;
        } else if (a.score > b.score) {
            return 1;
        } else {
            return 0;
        }
    })
};
console.log(sortScoresAsc(scores));

//sort by descending order
const sortScoresDsc = (array) => {
    return array.sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        } else if (a.score > b.score) {
            return 1;
        } else {
            return 0;
        }
    })
};
console.log(sortScoresDsc(scores));