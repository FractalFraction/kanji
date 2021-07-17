# kanji
This project is to give me practice using third-party apis to display some info on japanese kanji.

#Installation Instructions
The project dependencies can be installed through npm, by running the package manager
```zsh
npm install
```

## Running the tests
The logic of the program is tested using [jasmine][https://jasmine.github.io/] and is run through the browser by typing in to the console
```zsh
$ npm test
```
or
```zsh
$ npx jasmine-browser-runner runSpecs
```

User interaction feature tests use the Cypress testsing framework in conjunction with http-serve, 
```zsh
$ npx http-serve
$ npx 
```

Please note that the baseURL in the cypress.json should be set to the http address given by running http serve. For example, by default the port is set to 8080 with http-serve giving
http://127.0.0.1:8080. The base url 
```json
{
  "baseURL": "http://localhost:8080"
}
```

## Requirement
As an avid learner of Japanese, 
So that I can remember the kanji,
I would like a website that displays information about them






