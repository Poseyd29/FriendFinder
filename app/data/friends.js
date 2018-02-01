function Friend(name, image, answers) {
    this.name = name;
    this.image = image;
    this.answers = answers;
}
function getRandom(n) {
    return Math.floor(Math.random() * n) + 1;
}

function populateArray() {

    let tempArr = [];
    for (var i = 0; i < 10; i++) {
        tempArr.push(getRandom(4))
    }
    return tempArr;

}

function profiles(x) {
    let profileArray = [];
    for (let i = 1; i <= x; i++) {
        profileArray.push(new Friend(`Person ${i}`, "image", populateArray()));
    }
    return profileArray;

}

const friendsArray = [{
        name: 'Person 1',
        image: 'image',
        answers: [3, 3, 4, 4, 3, 3, 1, 1, 1, 1]
    },
    {
        name: 'Person 2',
        image: 'image',
        answers: [1, 2, 2, 4, 2, 2, 3, 4, 4, 2]
    },
    {
        name: 'Person 3',
        image: 'image',
        answers: [4, 1, 4, 4, 1, 2, 3, 4, 3, 4]
    },
    {
        name: 'Person 4',
        image: 'image',
        answers: [1, 3, 3, 3, 3, 2, 1, 1, 3, 3]
    },
    {
        name: 'Person 5',
        image: 'image',
        answers: [4, 1, 3, 3, 3, 3, 4, 1, 1, 4]
    },
    {
        name: 'Person 6',
        image: 'image',
        answers: [4, 3, 3, 1, 4, 1, 1, 3, 4, 3]
    },
    {
        name: 'Person 7',
        image: 'image',
        answers: [2, 4, 3, 3, 2, 4, 3, 3, 3, 4]
    },
    {
        name: 'Person 8',
        image: 'image',
        answers: [3, 2, 2, 3, 3, 1, 4, 4, 1, 1]
    },
    {
        name: 'Person 9',
        image: 'image',
        answers: [2, 2, 2, 2, 2, 2, 3, 2, 4, 2]
    },
    {
        name: 'Person 10',
        image: 'image',
        answers: [3, 3, 4, 2, 3, 2, 1, 1, 1, 4]
    }


];

module.exports = friendsArray;