var navBar = function (liquorObject) {
    liquorObject
        .api.pause(500)
    liquorObject
        .waitForElementPresent('@Liquor')
        .click('@Liquor')
        .waitForElementPresent('@home')
        .waitForElementPresent('@Recipes')
        .click('@Recipes')
        .verify.containsText('@recipeResults', "Cocktail Recipes")
        .waitForElementPresent('@liquor2')
        .click('@liquor2')
        .waitForElementPresent('@home')
        // .click('@Videos')
        // .waitForElementPresent('@videoResults')
        // .verify.containsText('@videoResults', "Curbside Cocktails")
        // .waitForElementPresent('@liquor2')
        // .click('@liquor2')
        // .waitForElementPresent('@home')
        .click('@CityGuides')
        .waitForElementPresent('@cityResults')
        .verify.containsText('@cityResults', "CITY GUIDES")
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@Spirits')
        .waitForElementPresent('@spiritsResult',)
        .verify.containsText('@spiritsResult', "EXPLORE TYPES OF LIQUOR")
        .click('@liquor2')
        .waitForElementPresent('@home')
        // .click('@Community')
        // .assert.urlContains('drinkwire')
        // .click('@liquor2')
        // .waitForElementPresent('@home')
        .click('@Bartenders')
        .waitForElementPresent('@bartenderResults')
        .verify.containsText('@bartenderResults', "The Bar Life" )
}
var liquorObject= {}
var searching = function (liquorObject){
    liquorObject
        .waitForElementPresent('@searchInput')
        .setValue('@searchInput',[ 'Mezcal', liquorObject.api.Keys.ENTER])
        .waitForElementPresent('@searchResults')
        .verify.containsText('@searchResults', "Mezcal")
        .assert.urlContains('Mezcal')
        .click('@liquor2')
        .waitForElementPresent('@home')
        .waitForElementPresent('@searchInput')
        .setValue('@searchInput',[ 'Caipirinha', liquorObject.api.Keys.ENTER])
        .waitForElementPresent('@searchResults')
        .verify.containsText('@searchResults', "Caipirinha")
        .assert.urlContains('Caipirinha')
        .click('@liquor2')
        .waitForElementPresent('@home')
        .waitForElementPresent('@searchInput')
        .setValue('@searchInput',[ 'jfeisodflkf', liquorObject.api.Keys.ENTER])
        .waitForElementPresent('@searchResults')
        .verify.containsText('@searchResults', "No Results")
        .assert.urlContains('jfeisodflkf')



    

}

module.exports = {
    beforeEach: browser => {
        liquorObject = browser.page.liquorPO()
        liquorObject.navigate() 
    },
    after: browser => {
        liquorObject.end()
    },
    'Testing the navbar': browser => {
        navBar(liquorObject)
        liquorObject.pause(1000)
    },
    'Search Bar Test': browser => {
        liquorObject
        searching(liquorObject)
        
        
            

        
  }
}