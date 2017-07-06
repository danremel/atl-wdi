[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

<!-- Answer #1 -->
//Task and Project are the objects
  //Both task and project will have properties
    //A task will need a name, and in order to track how long it took, it will need a start time and completion time
    //A project will need a name, a description, and a list of tasks within that project

var task = {
  name: "Sweep floor";
  startTime: "1pm";
  completeTime: "4pm";
  }
var projects = {
  name: "Chores";
  description: "Clean the house"
  tasks: ["Sweep the floor", "Wipe the counters", "Vacuum the carpet", "Make the bed"];
  }

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

<!-- Answer 2 -->
//The app needs to store photos and share them with others, while being able to group the photos together in albums
  //The photos object will need to store the photo's identifier number, description, date taken, and name of the user
  //The user object will need the name of the photographer, age, gender, and location
  //The album object will need to store the photos, and who it is shared with

var user = {
  name: "Dan";
  age: 23;
  gender: "Male";
  location: "Atlanta, GA";
}
var photo = {
  identifier: 28194;
  description: "Vacation in Texas";
  date: "05/04/16";
  photographer: user;
}
var album = {
  photographs: [photo, photo, photo];
  sharedUsers: [user, user, user]
}

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

<!-- Answer 3 -->
//This app monitors the time and manages the house's temperature, and uses that information to manage the lights and adjust the thermostat of the house.

var light = {
  brightness: "dim",
  location: "bedroom",
  name: "ceiling light"
};

var homeSystem = {
  temp: "73 degrees",
  setOfLights: ["bedroom", "kitchen", "dining room", "bathroom"]
};

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

<!-- Answer 4 -->
//Shoe store app provides a list of shoes for sale
  //User will be able to add products (shoes) to a cart
  //Purchased cart will be saved as a past order

var shoe = {
  name: "Air Jordans",
  description: "These are some pretty sweet Jordans.",
  price: "$100"
};

var cart = {
  product: shoe,
  quantity: 1,
  orderStatus: "completed"
};

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

<!-- Answer 5 -->
An advantage of this representation is that each station is referred to by its actual name, instead of nameless numbers in an array. This helps the user identify their stop by name instead of a number.

On the other hand, it can also be seen as a disadvantage because it is techinically unable to tell the user *how many* stops the user must go through until they reach their destination.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

<!-- Answer 6 -->
Option #1 would be better for the doctor's reference, because their appointments are nested within that doctor's information, keeping them all organized in one place for that specific doctor. However, for any other user it looks very cluttered and complicated. 

Option #2 would be the best all around, because it organizes the information by appointment >> doctor, patient. Instead of the information heirarchy starting with the doctor, it starts with the appointment, providing equal preference for both the doctor and the patient.


## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

<!-- Answer 7a -->
  A Player has:
     a name
     an assigned game piece
 
  A Game has:
     an X player
     an O player
     a set of moves, made with X and O pieces
 
  A Move has:
     a designated player's turn
     a position on the board, i.e. row x column

b.  How might those entities be represented in JavaScript code?

<!-- Answer 7b -->
  var game = {
    var playerOne = {
      name: "Jack",
      gamePiece: "X"
    }
    var playerTwo = {
      name: "Jill",
      gamePiece: "O"
    }
    var moves = {
      var moveOne = {
        turn: playerOne,
        position: 2 x 2,
      }
    }
  }

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

<!-- Answer 7c -->
The entities I have chosen create clear guidelines for creating the object model. 
The representations I have chosen create a clear, logical structure for the game.