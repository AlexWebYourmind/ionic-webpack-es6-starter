'use strict';

module.exports = () => {

    let greetings = [
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