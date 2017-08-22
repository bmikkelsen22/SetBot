import * as rl from 'readline';

export class IO {
    static readLine(prompt: string) {
        return new Promise<string>((resolve, reject) => {
            const i = rl.createInterface(process.stdin, process.stdout, null);
            i.question(prompt, (answer) => {
                resolve(answer);
            });
        });
    }

    static writeLine(message: string) {
        console.log(message);
    }
} 