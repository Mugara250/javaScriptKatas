function shuffle(deck: number[]): number {
    const sortedDeck = [...deck].sort((a, b) => a - b);
    if (deck.every((item, index) => item === sortedDeck[index])) return 0;

    let shuffleCount = 0;
    let equal = false;

    for (let i = 0; i < deck.length - 1; i++) {
        shuffleCount += 1;
        if (deck[i] === deck[deck.length - 1]) continue;

        let itemToBeShuffled: number | undefined = deck.shift();
        deck.push(itemToBeShuffled ?? 0);

        if (deck.every((item, index) => item === sortedDeck[index])) {
            equal = true;
            break;
        }
    }

    return equal ? shuffleCount : -1;
}

