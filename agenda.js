const agenda = {};

agenda.currentLesson = [7, 4]; // [ week, lesson in week ] 1-based

// All strings in this data will be preprocessed by a Markdown converter.
// So you can use **bold**, _italic_ and [hyperlinks](http://www.example.com).
// HTML-tags will work too, and line-breaks inside ``-strings will be converted to <br>.
agenda.program = [
  // The progam is an array of weeks.
  [
    // A week is just an array of lesson-objects.
    {
      // A lesson is an object.
      date: "Thursday Aug 25th",
      title: "Kick-off", // title is optional
      content: [
        // content is optional, can also be a single string.
        "Kick-off",
        "Getting the Arduino to work with your laptop",
        "Getting your browser to work with mail-links",
        "Start with [chapter 1 – introduction to the Arduino](/ch1-intro-arduino/index.html)",
      ],
    },
  ],
  [
    {
      date: "Monday Aug 29st",
      title:
        "[chapter 1 – introduction to the Arduino](/ch1-intro-arduino/index.html)",
      content: [
        "Assignments 1.3—1.10",
        "_Assignment 1.11 is left for the next day_",
      ],
    },
    {
      date: "Tuesday Aug 30st",
      title:
        "[chapter 2 – intro to JavaScript](/ch2-intro-javascript/index.html)",
      content: [
        "Assignment 1.11 of [chapter 1](/ch1-intro-arduino/index.html)",
        "Assignments 2.3—2.10",
      ],
    },
    {
      date: "Wednesday Aug 31nd",
      title:
        "[chapter 3 – interactivity in JavaScript with _functions_](/ch3-interactivity-functions/index.html)",
      content: [
        "Assignments 3.3—3.11",
        "_(Assignment 3.12 is left for the next lesson)_",
      ],
    },
    {
      date: "Thursday Sep 1th",
      title:
        "[chapter 4 – calculations and storing results in _variables_](/ch4-calculations-variables/index.html)",
      content: ["Assignment 3.12", "Assignments 4.2—4.7"],
    },
  ],
  [
    {
      date: "Monday Sep 5th",
      title:
        "[chapter 5 – russian dolls for data: variables _inside_ variables](/ch5-variables-inside-variables/index.html)",
      content: ["Assignments 5.2—5.12"],
    },
    {
      date: "Tuesday Sep 6th",
      title:
        "[chapter 6 – _debugging_ code that doesn't work](/ch6-debugging/index.html)",
      content: [
        "Assignments 6.2—6.5",
        "bonus Assignment 6.6 _if you have the time_",
      ],
    },
    {
      date: "Wednesday Sep 7th",
      title:
        "[chapter 7 – how functions communicate: _parameters_ and _return values_](/ch7-more-about-functions/index.html)",
      content: ["Assignments 7.2—7.11 "],
    },
    {
      date: "Thursday Sep 8th",
      title:
        "[chapter 8 – _true_, _false_, and choosing with _if-statements_](/ch8-true-false-if/index.html)",
      content: [
        `from ch7: Assignment 7.12, 
           _(7.12.e is bonus, skip this if you don't have the time)_`,
        "Assignments 8.1—8.12",
      ],
    },
  ],
  [
    {
      date: "Monday Sep 12th",
      title:
        "[chapter 9 – more about if-statements and _conditions_](/ch9-more-if-conditions/index.html)",
      content: [
        "video's 9a en 9b,",
        "_aandachtig lezen:_ tekstblok over logical operators,",
        "asignments 9.1—9.8",
      ],
    },
    {
      date: "Tuesday Sep 13th",
      title:
        "[chapter 10 – more about functions: _local variables_ and _side effects_](/ch10-locals-and-side-effects/index.html)",
      content: [
        "opdrachten 10.1—10.7,",
        "_aandachtig lezen:_ tekstblok over side effects versus return values,",
      ],
    },
    {
      date: "Wednesday Sep 14rd",
      title:
        "[chapter 11 – fun with data types](/ch11-fun-with-datatypes/index.html)",
      content: [
        "opdrachten 11.1,",
        "_aandachtig lezen:_ tekstblok over datatypes,",
        "opdrachten 11.2 and 11.6",
      ],
    },
    {
      date: "Thursday Sep 15th",
      title:
        "[chapter 12 – recap](/ch12-recap/index.html)",
      content: [
        "leeswerk: [What is a concept map?](https://cmap.ihmc.us/docs/conceptmap.php) (alleen inleiding),",
        "leeswerk: [How people learn](https://cmap.ihmc.us/docs/howpeoplelearn.php) (helemaal, is kort),",
        "instruction-box over installeren CMap tools,",
        "opdrachten 12.1 and 12.5",
      ],
    },
  ],
  [
    {
      date: "Monday Sep 19th",
      title:
        "[chapter 13 – loops](/ch13-loops/index.html)",
      content: [
        "Assignments 13.1—13.10",
        "read carefully: the text box about for-loops",
      ],
    },
    {
      date: "Monday Sep 20th",
      title:
        "[chapter 13 – loops _(continued)_](/ch13-loops/index.html) and [chapter 14 – visuals](/ch14-canvas-animation/index.html)",
      content: [
        "Assignments 13.9—13.10 (_niet 13.11_)",
        "Assignments 14.1—14.2",
      ],
    },
    {
      date: "Tuesday Sep 21th",
      title:
        "[chapter 14 – visuals with canvas and animation _(continued)_](/ch14-canvas-animation/index.html)",
      content: ["Assignments 14.1 tot 14.6"],
    },
    {
      date: "Wednesday Sep 22th",
      title:
        "[chapter 14 – animation _(continued)_](/ch14-canvas-animation/index.html) and [chapter 15 – methods](/ch15-methods/index.html)",
      content: [
        "Assignments 14.7—14.8",
        "Assignments 15.1—15.7",
      ],
    },
    {
      date: "Thursday Sep 29th",
      title:
        "[chapter 15 – active objects do it with _methods_ _(continued)_](/ch15-methods/index.html)",
      content: ["Assignments 15.8—15.11"],
    },
  ],
  [
    {
      date: "Monday Oct 3th",
      title:
        "[chapter 16 – final assignment _javascript_: Battleships](/javascript-battleships/index.html)",
      content: [
        "_introduction Battle Ships assignment_",
        "Video battleships code walkthrough",
      ],
    },
    {
      date: "Tuesday Oct 4th",
      title:
        "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "Wednesday Oct 5th",
      title: "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "Thursday Oct 6th",
      title: "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "_Sunday_ Oct 9th",
      title: "23:00: _deadline_ [Zeeslag](/javascript-battleships/index.html)",
      content: [],
    },
  ],
  [
    {
      date: "Monday Oct 10th",
      title:
        "[chapter 17 – final assignment _Arduino_: Inbraakalarm](/arduino-burglar-alarm/index.html)",
      content: [
        "_introduction Arduino Alarm assignment_",
      ],
    },
    {
      date: "Tuesday Oct 11th",
      title: "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "Wednesday Oct 12th",
      title: "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "Thursday Oct 13th",
      title: "",
      content: [
        "regular meeting schedule where we support making the assignment",
      ],
    },
    {
      date: "Sunday Oct 16th",
      title:
        "23:00: _deadline_ [Inbraakalarm](/arduino-burglar-alarm/index.html)",
      content: [],
    },
  ],
];
