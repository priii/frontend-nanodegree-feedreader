/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // to check the url& name is not empty comparing it to 0
        it('all url are defined and its not empty', function() {
            //expect(allFeeds).toBeDefined();
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and its not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    //import * as matchers from 'jasmine-jquery-matchers';
    describe("The Menu", function() {
        var menuIcon = $('.menu-icon-link');
        var menuHidden = $('.menu-hidden');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // By default when the page loads menu icons length is 1 (which is hidden) the length changes to 0 when the menuIcon is clicked!
        it('Menu element is hidden by default', function() {
            expect(menuHidden.length).toBe(1);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('Menu appears when clicked', function() {
            menuIcon.click();
            menuHidden = $('.menu-hidden');
            expect(menuHidden.length).toBe(0);
        });
        it('Menu disappears when clicked again', function() {
            menuIcon.click();
            menuHidden = $('.menu-hidden');
            expect(menuHidden.length).toBe(1);
        });

    });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // loadFeed(0) loads the first feed ! using done() to inform asynch function runs succesfully to the program
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });

        });
        // checking article class ".entry" and ".feed" not to be 0 ! by default it has 10 entries !
        it('load feed has atleast single entry', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // getting the text from the container of two different feeds (0 and 1 which is udacity and css trick feeds) and comparing them to check whether the contant actually changes or not!
        var feed_zero,
            feed_one;
        beforeEach(function(done) {
            loadFeed(1, function() {
                feed_one = $('.feed').text();
                loadFeed(0, function() {
                    feed_zero = $('.feed').text();
                done();
            });
        });
        });
        it('load function changes content', function() {
            expect(feed_one).not.toBe(feed_zero);
        });

    });

}());
