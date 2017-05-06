# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# How I completed this project.

1. Reviewed the functionality of the application within your browser.
2. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
3. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
4. To test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL and name  is not empty.
  *I checked the url & name is not empty comparing it to an null value.*
5. Wrote a new test suite named `"The menu"` and a test ensures the menu element is hidden by default and the menu changes visibility when the menu icon is clicked.
  *By default when the page loads menu icons length is 1 (which is hidden) the length changes to 0 when the menuIcon is clicked!*
6. Wrote a new test suite named `"Initial Entries"` and a test that ensures when the `loadFeed` function is called and it has at least a single `.entry` element within the `.feed` container .
    *The loadFeed(0) loads the first feed ! using done() to inform asynch function runs succesfully to the program*
    *By checking article class ".entry" not to be 0 ! by default it has 10 entries !*
7. Wrote a new test suite named `"New Feed Selection"` and a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes .
  *By getting the header title of two different feeds (0 and 1 which is udacity and css trick heading) and comparing them to check whether the contant actually changes or not!*

## To Run this project
1. Download or cloan the [frontend-nanodegree-feedreader](https://github.com/priii/frontend-nanodegree-feedreader) project!
2. Run the index.html file in your chrome Browser.
3. At the end of the page you can find all the testing under "jasmine" heading.
