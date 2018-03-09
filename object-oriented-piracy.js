function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    const weight = this.draft - (this.crew * 1.5);
    if (weight > 20) {
        return true;
    } else {
        return false;
    }
};