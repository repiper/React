# React

Create a Node/Express/MongoDB/ReactJS app called nytreact. This will be a recreation of the NYT Articles Search exercise application we built back in Week 6. Running this application will:


Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.

If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.

You'll need several Express routes for your app:

/api/articles (get) - your components will use this to query MongoDB for all saved articles

/api/articles (post) - your components will use this to save an article to the database

/api/articles (delete) - your components will use this to delete a saved article in the database

* (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes

The layout should include at least two React Components for each page Home and Saved.

Home - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

Saved - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page may be made up of multiple smaller components or JSX that renders plain HTML elements.


