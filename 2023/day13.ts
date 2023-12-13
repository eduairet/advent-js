export function calculateTime(deliveries: string[]) {
    const totalTime = deliveries.reduce((a: number, c: string) => {
        const [hh, mm, ss] = c.split(':').map(Number);
        const totalSeconds = hh * 3600 + mm * 60 + ss;
        return a + totalSeconds;
    }, 0);
    const remainingTime = 7 * 3600 - totalTime;
    const absRemainingTime = Math.abs(remainingTime);
    const onTime = remainingTime > 0 ? '-' : '';
    const [hh, mm, ss] = [
        Math.trunc(absRemainingTime / 3600),
        Math.trunc((absRemainingTime % 3600) / 60),
        absRemainingTime % 60,
    ].map(n => String(n).padStart(2, '0'));
    return `${onTime}${hh}:${mm}:${ss}`;
}
