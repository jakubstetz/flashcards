# Flashcards

## Description

This project was completed as part of the Codecademy Full-Stack Engineer skill path; it constitutes a challenge project on the skill path.

This web application serves as a simple flashcards app. It allows the user to create topics, create quizzes within topics, and create flashcards to use in quizzes. Flashcards have a front and a back.

The purpose of this project was to practice working with Redux, applying all of the knowledge and skills gained in the Redux, Redux-React, and Redux Toolkit libraries from the preceding unit

## Skills Practiced

- *React*
- *Redux:*
  - Creating a store.
  - Creating reducers.
  - Creating and processing actions.
  - Using Redux Toolkit for simplification of Redux code.

## Original Codecademy Prompt

"In this project, you will practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over."

### Project Requirements

At a high level, your application will be able to handle the following URL routes, each with their own functionality:

On the `'/topics/new'` page:
- Users can create topics

On the `'/topics'` page:
- Users can view all topics * Users can click on an individual topic and be redirected to the page for that topic

On the `'/topics/:topicId'` page:
- Users can view an individual topic and all quizzes for that topic
- Users can click on a quiz associated with a topic and be redirected to that quiz’s page

On the `'quizzes/new'` page:
- Users can create quizzes that are associated with topics and contain lists of flashcards
- Users can add and remove card fields in the new quiz form

On the `'/quizzes'` page:
- Users can view all quizzes
- Users can click on an individual quiz and be redirected to that quiz’s page

On the '/quizzes/:quizId' page:
- Users can view an individual quiz and flip cards over

### Tasks

#### Task 1 (5 on Codecademy)

Your first task is to write code to manage the state associated with topics. In the **src/features/topics** directory, create a new file containing a slice that:
- Is named `topicsSlice`.
- Has initial state consisting of an object that includes one property, `topics`, which corresponds to an empty object. This inner `topics` object will eventually hold all topics keyed by `id`.
- Has an `addTopic` action. You can expect the payload for this action to look like `{id: '123456', name: 'name of topic', icon: 'icon url'}`. Store these values in the state as a new topic object.
- Each topic object added to the state should also have a `quizIds` property, which will correspond to an array containing the `id`s of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty `quizIds` array so that all topics in the state conform to the same shape.
- Create a selector that selects the `topics` object nested within `initialState`.
- Export the selector as well as the action creators and reducer that your slice generates.

#### Task 2 (6 on Codecademy)

Add the topics slice to the app’s store.

#### Task 3 (7 on Codecademy)

In **src/features/topics/Topics.js**, import the selector defined in your slice and use it to access all the topics in state, and replace the empty object currently assigned to `topics` with the topics in state.

#### Task 4 (8 on Codecademy)

Next, you’ll need to hook the new topic form up to the action creators your slice generates. In **src/components/NewTopicForm.js**, import `addTopic` and dispatch it from the event handler that runs when the new topic form is submitted.

Verify that your code is working by filling out the form and submitting it. You should be redirected to the `/topics` page and should see your newly created topic there.

#### Task 5 (9 on Codecademy)

Great work! Now that you can create topics, your next task is to build out the necessary functionality to add quizzes to your app. This will involve creating two new slices—one for the quizzes themselves and one for the cards that comprise them—and adding an action to your topics slice to associate quizzes with the topic to which they belong. To start, create in the **src/features/quizzes** directory, create a new file containing a slice for quizzes that:
- Is named `'quizzesSlice'`
- Has initial state consisting of an object that includes one property, `quizzes`, which corresponds to an empty object. This inner `quizzes` object will eventually hold all quizzes keyed by `id`.
- Has an `addQuiz` action. This action will receive a payload of the form `{ id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}`.
- Has a selector which returns all quizzes from state.
- Export the selector as well as the action creators and reducer that your slice generates.
- Is added to the store.

#### Task 6 (10 on Codecademy)

Next, you should add an action to your topics slice that adds a quiz’s `id` to the `quizIds` array of the topic with which the newly created quiz is associated. This action will receive the same payload the quizzes slice `addQuiz` action received in the form `{ id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}`.

#### Task 7 (11 on Codecademy)

To test your work, you’ll need to connect your action creator to **src/components/NewQuizForm** and make sure the component works. First, import your topics selector from your topics slice and replace the variable `topics`, which is currently assigned an empty object, with a call to that selector.

#### Task 8 (12 on Codecademy)

Next, import the action from your quiz slice and dispatch it from the `handleSubmit()` event handler that fires when the new quiz form is submitted.

Remember, that action creator expects to receive a payload of the form `{ id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}`. You’ll have to generate an `id` by calling `uuidv4`. For now, pass the empty `cardIds` array variable for the `cardIds` property (you’ll change that in a later task).
Test that your action creator works by filling out the new quiz form. After your quiz is created you should be rerouted to the `/quizzes` page and should see your newly created quiz there.

#### Task 9 (13 on Codecademy)

Lastly, import your selector in **src/features/quizzes/Quizzes.js**, **src/features/quizzes/Quiz.js**, and **src/features/topics/Topic.js** and make sure those components are displaying the correct data:
- The `Quizzes` component should render a `Link` for each quiz value in the quizzes slice of state.
- The `Quiz` component uses the `react-router-dom` method `useParams()` to determine the `quizId` to render. Therefore, it needs the full set of quizzes to find the appropriate quiz object to render.
- The `Topic` component should replace the empty object assigned to `quizzes` with the selector.

#### Task 10 (14 on Codecademy)

Great work! Next, in the **src/features/cards** directory, create a new file containing slice for cards that:
- Is named `'cardsSlice'`
- Has initial state consisting of an object that includes one property, `cards`, which corresponds to an empty object. This inner `cards` object will eventually hold all cards keyed by `id`.
- Has an `addCard` action. This action will receive a payload of the form `{ id: '123', front: 'front of card', back: 'back of card'}`.
- Has a selector that returns a card with the given `id`.
- Is added to the store.

#### Task 11 (15 on Codecademy)

Lastly, connect your `addCard` action creator to the new quiz form. In **src/components/NewQuizForm**, in the event handler that fires when the quiz form is submitted, iterate through the `cards` in that form’s local state, and for each one:
1. `dispatch` your `addCard` action creator. You will have to generate an `id` for each card using `uuidv4`.
2. Store the `id` you create for each card in the `cardIds` array we’ve provided for you. Remember, your action creator expects to receive a payload of the form `{ id: '123', front: 'front of card', back: 'back of card'}`. You want to collect all the `cardIds` in an array so that you can pass them to the action creator that generates new quizzes. To use `uuidv4` to create an `id`, call the function like so: `uuidv4()`.

#### Task 12 (16 on Codecademy)

You previously passed an empty array for `cardIds` to the action creator that generates a new quiz. Now that you have written code to collect an array of all the cardIds created whenever the new quiz form is submitted, replace the empty array with this array of `cardIds`.

To test that your code is working, create a new quiz with some cards. Navigate to that quiz from the `/quizzes` page, and verify that your cards show up. Flip them over by clicking on them to make sure that you’ve correctly captured all of the state belonging to each card.

#### Task 13 (17 on Codecademy)

Now that you can add new cards, you’ll need to display cards on the individual quiz page. The `Quiz` component renders a list of `Card` components, so in **src/features/cards/Card.js**, import your cards selector and use it to access all the cards in state.

## License

MIT License

Copyright (c) [2024] [Hugo Stetz]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.