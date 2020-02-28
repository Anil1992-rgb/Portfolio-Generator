const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
convertFactory = require('electron-html-to');

const questions = [{
        type: "list",
        name: "color",
        message: "Which color template do you want?",
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

            const queryUrl = `https://api.github.com/users/${answers.username}`;
            const starsUrl = `https://api.github.com/users/${answers.username}/starred`;

            axios.get(queryUrl).then((res) => {
                axios.get(starsUrl).then((stars) => {

                    res.data.color = answers.color
                    const html = generateHTML(res, stars);
                    writeToFile("homepage.html", html);
                    console.log(res.data);


                    //PDF CONVERSION USING ELECTRON
                    var conversion = convertFactory({
                        converterPath: convertFactory.converters.PDF
                    });

                    conversion({ html: html }, function(err, result) {
                        if (err) {
                            return console.error(err);
                        }

                        console.log(result.numberOfPages);
                        console.log(result.logs);
                        result.stream.pipe(fs.createWriteStream('./homepage.pdf'));
                        conversion.kill();
                    });
                })
            })
        })
}
init();