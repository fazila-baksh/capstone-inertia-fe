# Project Title

Inertia

## Overview

Inertia is a lifestyle app that allows users to track their daily habits. It is designed to help individuals maintain consistency in building habits and stay motivated.

### Problem Space

Building and maintaining habits can be challenging, especially without a system to track progress and stay motivated. Inertia addresses this pain point by providing a user-friendly platform for habit tracking, enabling users to visualize their progress and build consistent routines.

### User Profile

Who will use your app?

- Individuals looking to develop and maintain positive habits.
- Individuals seeking a simple and effective tool to track their progress.

How will they use it?

- Users will add the habits they would like to track and check off completed habits daily and review their progress.

### Features

As a user, I want to be able to create a list of habits I want to track (e.g., exercise, reading, hydration).
As a user, I want to be able to set goals for my habits (e.g. 7 days a week).
As a user, I want to be able to track my progress (how many times have I completed the habit in a week/month)
As a user, I want to log my daily progress for each habit (e.g., mark that I exercised today).
As a user, I want to view my progress over time for each habit.

## Implementation

### Tech Stack

- React
- Express
- React-router
- Axios
- MySQL Database
- Knex
- CORS

### APIs

Daily affirmations API

### Sitemap

Home Page:

- a daily affrimations banner
- overview of all habits
- ability to add new habits
- a rate your day section, where users can click the emoji that best describes their day and write one sentence sumarizing their day

Individual Habit Page:

- the description of the habit and the users weekly goal of the habit ( "x" times a week)
- ability to edit the habit
- ability to delete the habit
- a graph showing the yearly progress of that habit

Weekly Habit Page:

- overview of all habits and the progress for that week

Add Page:

- add a new habit for tracking

Edit Page:

- edit a specific habit to make it more specific/aligned with personal goals

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Endpoints

POST /habits - create new habit with a name and goal

request:
{
"name": "Water",
"goal_daily": 8
"goal_weekly": 7
},

{
"name": "Exercise",
"goal_weekly": 4
}

response:
{
"id": 1,
"name": "Exercise",
"goal_weekly": 4,
"progress": 0,
}

GET /habits - retrieve all habits stored

{
"id": 1,
"name": "Exercise",
"goal_weekly": 4,
"progress": 2,
}

GET /habits/:id - retrieve habit by specific id

{
"id": 1,
"name": "Exercise",
"goal_weekly": 4,
"progress": 2,
}

## Roadmap

- Create client (front-end)

  - create react app and outline basic file structure

- Create server (back-end)

- Create migration

- Create seeds with sample habit data

- Feature: Homepage

  - build and style homepage
  - api call for affirmation banner
  - create GET/habits endpoint to get all habits and display in a list
  - create POST end point to store data when habit is completed
  - Add Page
    - build and style add page
    - create POST endpoint to add habit

- Feature: Weekly Page

  - build and style weekly page
  - create GET/weekly endpoint to get all habits and display in a chart

- Feature: Individual Habit

  - build and style indiviual habit page
  - create GET/habit endpioint to get the specific habit based on id and display information
  - create GET/habit endpoint to get the year data and display on line graph
  - Edit Page:
    - build and style edit habit pages
    - create PUT endpoint to edit a habit
  - build and style delete modal
  - create DELETE

- Debug

- DEMO!

## Future Implementations

- Authentication: user registration and login

- Rate your day: Currently the rate your day function is only stored in the database. I would like to add a component on the weekly page that shows all the entries for that week

- Journal: include a way for users to write daily journal entires

- Historical data: users have the abilitity to access weekly data from past weeks and not only the current week

- Reminder Notifications: notifications to encourage and motivate users to log their habit progress daily and weekly
