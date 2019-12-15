
module.exports = {
    url: 'https://www.liquor.com/',
    // commands: [testCommands],
    elements: {
        //PAGE LAYOUT SELECTOR
        //pageContent: '#content',
        //NAVBAR SELECTORS
        Liquor: ('[class="navbar-brand"]'),
        Recipes: {
            selector: '//a[text()="Recipes"]',
            locateStrategy: 'xpath'
        },
        Videos: {
            selector: '//a[text()="Videos"]',
            locateStrategy: 'xpath'
        },
        CityGuides: {
            selector: '//a[text()="City Guides"]',
            locateStrategy: 'xpath'
        },
        Spirits: {
            selector: '//a[text()="Spirits"]',
            locateStrategy: 'xpath'
        },
        Community: {
            selector: '//a[text()="Community"]',
            locateStrategy: 'xpath'
        },
        Bartenders: {
            selector: '//a[text()=” Bartenders”]',//space is not a typo
            locateStrategy: 'xpath'
        },
        
        //social media
        Facebook: {
            selector: '//i[@class=“fab fa-facebook-square”]',
            locateStrategy: 'xpath'
        },
        Instagram: {
            selector: '//i[@class=“fab fa-instagram”]',
            locateStrategy: 'xpath'
        },
        Pintrest: {
            selector: '//i[@class=“fab fa-pinterest”]',
            locateStrategy: 'xpath'
        },
        Youtube: {
            selector: '//i[@class=“fab fa-youtube”]',
            locateStrategy: 'xpath'
        },
        Twitter: {
            selector: '//i[@class=“fab fa-twitter”]',
            locateStrategy: 'xpath'
        },

        home: {
            selector: '//div[@class=“spnf_button-wrap”]',
            locateStrategy: 'xpath'
        },     
        //SEARCH SELECTORS
        
        searchInput: {
            selector: '(//input[@class=“form-control”])[2]',
            locateStrategy: 'xpath'
        },
        
        //resulting pages
        recipeResults: {
            selector: '(//div[@class= "col-xs-12"])[3]',
            locateStrategy: 'xpath'
        },
        videoResults: {
            selector: '(//span[text()="Curbside Cocktails"])[2]',
            //rad way to find a selector ,--Mars note
           locateStrategy: 'xpath'
        },
        cityResults: {
            selector: '//div[@class="mosaic-row sort-header"]',
            locateStrategy: 'xpath'
        },
        SpiritResults: {
            selector: '//span[text() ="Explore types of liquor"]',
            //rad way to find a selector ,--Mars note
           locateStrategy: 'xpath'
        },
        


        // searchResult: '#firstHeading',
        // noSearchResult: '.mw-search-nonefound',
        // searchInputButton: '[name="go"]',
        // //ACCOUNT LOGIN
        // accountLogin: '[class="loginText mw-ui-input"]',
        // passwordLogin: '[class="loginPassword mw-ui-input"]',
        // loginButton: '[name="wploginattempt"]',
        // navLoginButton: '#pt-login'

    }
}
