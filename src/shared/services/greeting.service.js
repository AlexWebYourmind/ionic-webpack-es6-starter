/* @flow */

module.exports = () => {

    let greetings: Array<string> = [
        'Hello World',
        'Hello Javascript',
        'Hello Ionic',
        'Hello Angular',
        'Hello Webpack'
    ];

    return {
        getGreetings: () => {
            return greetings;
        }
    };
};