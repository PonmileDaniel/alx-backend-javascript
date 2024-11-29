process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    process.stdin.write(`Your name is: ${input}\n`)
    process.stdin.end();
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n')
})