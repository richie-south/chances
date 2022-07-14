"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chance = void 0;
function chance(...values) {
    const random = Math.floor(Math.random() * 100);
    const result = values
        .reduce((data, [percentage, event]) => {
        const startStep = data.total;
        const endStep = data.total + percentage - 1;
        if (data.total > 100) {
            throw new Error('Total percentage is larger than 100.');
        }
        return {
            total: data.total + percentage,
            steps: [
                ...data.steps,
                [
                    [startStep, endStep],
                    [percentage, event],
                ],
            ],
        };
    }, {
        total: 1,
        steps: [],
    })
        .steps.find(([[start, end]]) => {
        return random <= end && random >= start;
    });
    return result ? result[1][1] : undefined;
}
exports.chance = chance;
