const calculateNumber = (a, b) => {
    const round = (n) => (n < 0 ? Math.ceil(n - 0.5) : Math.floor(n + 0.5));
    return round(a) + round(b);
};

module.exports = calculateNumber;
