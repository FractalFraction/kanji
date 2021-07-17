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
$ npx cypress open
```

Please note that the baseURL in the cypress.json should be set to the http address given by running http serve. For example, by default the port is set to 8080 with http-serve giving
http://127.0.0.1:8080. The base url 
```json
{
  "baseURL": "http://localhost:8080"
}
```

## Requirements
```
As an avid learner of Japanese, 
I want to remember the kanji, 
So that I can read japanese. 
```

## User Stories
``` 
As an avid learner of Japanese,
I want to see the kanji on the page,
So that I can remember how it looks

As an avid learner of Japanese,
I want to hear the kanji pronunciation on the page,
So that I can remember the reading

As an avid learner of Japanese,
I want to know what words use the kanji,
So that I can remember related vocabulary

As an avid learner of Japanese,
I want to know the translation
So that I can learn the word
```

## Domain Model
What is the behaviour of my program? What do I want it to do?

The user will need to make a request to a server to look up some information about the kanji. 

The user will therefore need a feature to search for something.

I will need to create a test to implement a search bar in the program. 

### Feature Test

The feature test should encode the following behaviour:
User Input: [KanjiName: fire] -> [Image of Kanji], [Sound of Kanji], [Reading of Kanji]
