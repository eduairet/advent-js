export function optimizeIntervals(intervals: number[][]) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 1;
    while (i < intervals.length) {
        const [currentStart, currentEnd] = intervals[i];
        const [_, lastEnd] = intervals[i - 1];

        if (currentStart > lastEnd) i++;
        else {
            intervals[i - 1][1] = Math.max(currentEnd, lastEnd);
            intervals.splice(i, 1);
        }
    }
    return intervals;
}
