export class Time {
    static async tick(miliseconds: number = 500): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, miliseconds)
        })
    }
}