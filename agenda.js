const agenda = {}

agenda.currentLesson = [2, 1] // [ week, lesson in week ] 1-based

// All strings in this data will be preprocessed by a Markdown converter.
// So you can use **bold**, _italic_ and [hyperlinks](http://www.example.com).
// HTML-tags will work too, and line-breaks inside ``-strings will be converted to <br>.
agenda.program = [
  // The progam is an array of weeks.
  [
    // A week is just an array of lesson-objects.
    {
      // A lesson is an object.
      date: 'Thursday Aug 25',
      title: 'Kick-off', // title is optional
      content: [
        // content is optional, can also be a single string.
        'Kick-off',
        'Getting the Arduino to work with your laptop',
        'Getting your browser to work with mail-links',
        'Start with [chapter 1 – introduction to the Arduino](/ch1-intro-arduino/index.html)'
      ]
    }
  ],
  [ // week 1
    {
      date: 'Monday Aug 29',
      title:
        '[chapter 2 – intro to JavaScript](/ch2-intro-javascript/index.html)',
      content: [
        'Assignments 2.3—2.10'
      ]
    },
    {
      date: 'Tuesday Aug 30',
      title:
        '[chapter 1 – introduction to the Arduino](/ch1-intro-arduino/index.html)',
      content: [
        'Assignments 1.3—1.11',
      ]
    },
    {
      date: 'Wednesday Aug 31',
      title:
        '[chapter 3 – interactivity in JavaScript with functions](/ch3-interactivity-functions/index.html)',
      content: [
        'Assignments 3.3—3.11',
        'Assignment 3.12 is left for the next lesson'
      ]
    },
    {
      date: 'Thursday Sep 1',
      title:
        '[chapter 4 – calculations and storing results in variables](/ch4-calculations-variables/index.html)',
      content: [
        'Assignment 3.12', 
        'Assignments 4.2—4.7'
      ]
    }
  ],
  [ // week 2
    {
      date: 'Monday Sep 5',
      title:
        '[chapter 5 – russian dolls for data: variables inside variables](/ch5-variables-inside-variables/index.html)',
      content: [
        'Assignments 5.2—5.12'
      ]
    },
    {
      date: 'Tuesday Sep 6',
      title:
        "[chapter 6 – debugging code that doesn't work](/ch6-debugging/index.html)",
      content: [
        'Assignments 6.2—6.5',
        'Bonus: Assignment 6.6 if you have the time'
      ]
    },
    {
      date: 'Wednesday Sep 7',
      title:
        '[chapter 7 – how functions communicate: parameters and return values](/ch7-more-about-functions/index.html)',
      content: [
        'Assignments 7.2—7.11'
      ]
    },
    {
      date: 'Thursday Sep 8',
      title:
        '[chapter 7](/ch7-more-about-functions/index.html) and [chapter 8 – true, false, and choosing with if-statements](/ch8-true-false-if/index.html)',
      content: [
        'First: Assignment 8.2',
        'Then: Assignment 7.12',
        "Bonus: 7.12.e, skip this if you don't have the time",
        'Assignments 8.3—8.6'
      ]
    }
  ],
  [ // week 3
    {
      date: 'Monday Sep 12',
      title:
        '[chapter 8 – true, false, and choosing with if-statements  _(continued)_](/ch8-true-false-if/index.html)',
      content: [
        'Assignments 8.7—8.12'
      ]
    },
    {
      date: 'Tuesday Sep 13',
      title:
        '[chapter 9 – more about if-statements and conditions](/ch9-more-if-conditions/index.html)',
      content: [
        "Videos 9a and 9b",
        'Read textblock about logical operators',
        "Assignments 9.2, and 9.3",
        "Assignments 8.10 - 8.11, if not finished",
        "Asignments 9.4 - 9.8"
      ]
    },
    {
      date: 'Wednesday Sep 14',
      title:
        '[chapter 10 – more about functions: local variables and side effects](/ch10-locals-and-side-effects/index.html)',
      content: [
        "Video 10a",
        "Assignments 9.7 and 9.8., if not finished",
        "Video 10b",
        'Assignments 10.2—10.4',
        'Read textblock about side effects versus return values',
        'Assignments 10.5—10.7'
      ]
    },
    {
      date: 'Thursday Sep 15',
      title:
        '[chapter 11 – fun with data types](/ch11-fun-with-datatypes/index.html)',
      content: [
        'Read textblock about datatypes,',
        'Assignments 11.2 and 11.6'
      ]
    }
  ],
  [ // week 4
    {
      date: 'Monday Sep 19',
      title: '[chapter 12 – recap](/ch12-recap/index.html)',
      content: [
        'Read: [What is a concept map?](https://cmap.ihmc.us/docs/conceptmap.php) (alleen inleiding),',
        'Read: [How people learn](https://cmap.ihmc.us/docs/howpeoplelearn.php) (helemaal, is kort),',
        'Instruction-box about installing CMap tools,',
        'Assignments 12.1 and 12.5'
      ]
    },
    {
      date: 'Tuesday Sep 20',
      title: '[chapter 12 – recap _(continued)_](/ch12-recap/index.html)',
      content: [
        'Finish assignments'
      ]
    },
    {
      date: 'Wednesday Sep 21',
      title: '[chapter 13 – loops](/ch13-loops/index.html)',
      content: [
        'Assignments 13.2—13.3',
        'Read carefully the text box about for-loops',
        'Assignments 13.4—13.7'
      ]
    },
    {
      date: 'Thursday Sep 22',
      title:
        '[chapter 13 – loops _(continued)_](/ch13-loops/index.html)',
      content: [
        'Assignments 13.8—13.12 (skip 13.11)'
      ]
    }
  ],
  
  [ // week 5
    {
      date: 'Monday Sep 26',
      title:
        '[chapter 14 – visuals with canvas and animation](/ch14-canvas-animation/index.html)',
      content: [
        'Assignments 14.1 tot 14.5'
      ]
    },
    {
      date: 'Tuesday Sep 27',
      title:
        '[chapter 14 – animation _(continued)_](/ch14-canvas-animation/index.html)',
      content: [
        'Assignments 14.6—14.8'
      ]
    },
    {
      date: 'Wednesday Sep 28',
      title:
        '[chapter 15 – active objects do it with methods](/ch15-methods/index.html)',
      content: [
        'Assignments 15.1—15.7'
      ]
    },
    {
      date: 'Thursday Sep 29',
      title:
        '[chapter 15 – active objects do it with methods _(continued)_](/ch15-methods/index.html)',
      content: [
        'Assignments 15.8—15.11'
      ]
    }
  ],
  [ // week 6
    {
      date: 'Monday Oct 3',
      title:
        '[chapter 16 – final assignment javascript: Battleships](/javascript-battleships/index.html)',
      content: [
        'introduction Battle Ships assignment',
        'Video battleships code walkthrough'
      ]
    },
    {
      date: 'Tuesday Oct 4',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Wednesday Oct 5',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Thursday Oct 6',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Sunday Oct 9',
      title: '23:00: deadline [Zeeslag](/javascript-battleships/index.html)',
      content: []
    }
  ],
  [ // week 7
    {
      date: 'Monday Oct 10',
      title:
        '[chapter 17 – final assignment Arduino: Inbraakalarm](/arduino-burglar-alarm/index.html)',
      content: ['introduction Arduino Alarm assignment']
    },
    {
      date: 'Tuesday Oct 11',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Wednesday Oct 12',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Thursday Oct 13',
      title: '',
      content: [
        'regular meeting schedule where we support making the assignment'
      ]
    },
    {
      date: 'Sunday Oct 16',
      title:
        '23:00: deadline [Inbraakalarm](/arduino-burglar-alarm/index.html)',
      content: []
    }
  ]
]
