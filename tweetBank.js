const _ = require('lodash');
let tweetBank = [];
let numberOfTweets = 10;

function add (name, content) {
    // let tweetId = tweetBank.length + 1;
    tweetBank.push({ name: name, content: content, tweetId: tweetBank.length});
}

//deep cloning the array so that the original is not changed
//when someone sorts or filter
function list () {
    return _.cloneDeep(tweetBank);
}

function find (properties) {
    return _.cloneDeep(_.filter(tweetBank, properties));
}

module.exports = {
    add: add,
    list: list,
    find: find
};

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};



for (let i = 0; i < numberOfTweets; i++) {
    module.exports.add( getFakeName(), getFakeTweet());
}

console.log(list());
