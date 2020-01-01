const inquirer = require("inquirer");

const axios = require("axios");

const generateHTML = require("./generateHTML");

const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "rawlist",
        name: "color",
        message: "what is your favorite color?",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
        ]
    },

    {
        type: "input",
        name: "username",
        message: "what is your GitHub username?"
    }

];

function prompUser() {
    return inquirer.prompt(questions)
}

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)

}

function init() {
    prompUser()
        .then(function(answers) {

            axios
                .get(`https://api.github.com/users/${username}/`)
                .then(function(res) {
                    console.log(res.data);
                });

            const html = generateHTML(answers, );


            writeToFile("homepage.html", html);


        })
}
init();