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
}
var liquorObject= {}
module.exports = {
    before: browser => {
        liquorObject = browser.page.liquorPO()
        liquorObject.navigate() 
    },
    after: browser => {
        browser.end()
    },
    'Testing the navbar': browser => {
        navBar(liquorObject)
        liquorObject.pause(1000)
    }
}