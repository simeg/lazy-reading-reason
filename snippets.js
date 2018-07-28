calculateTime = function (a, b) {
    var c = 0 == this.words.length ? this.wordCount : this.words.length,
        d = this.rawWordCount > 0 ? this.rawWordCount : c;
    return 6e4 * d / a * (c - b) / c
};

