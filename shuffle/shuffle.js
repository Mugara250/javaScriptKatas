var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function shuffle(deck) {
    var sortedDeck = __spreadArray([], deck, true).sort(function (a, b) { return a - b; });
    if (deck.every(function (item, index) { return item === sortedDeck[index]; }))
        return 0;
    var shuffleCount = 0;
    var equal = false;
    for (var i = 0; i < deck.length - 1; i++) {
        shuffleCount += 1;
        if (deck[i] === deck[deck.length - 1])
            continue;
        var itemToBeShuffled = deck.shift();
        deck.push(itemToBeShuffled !== null && itemToBeShuffled !== void 0 ? itemToBeShuffled : 0);
        if (deck.every(function (item, index) { return item === sortedDeck[index]; })) {
            equal = true;
            break;
        }
    }
    return equal ? shuffleCount : -1;
}
console.log(shuffle([4, 3, 2, 1]));
