///<reference types="cypress"/>

class HomePage {
    constructor() {
        this.url = 'http://automationpractice.com/'
        this.title = 'My Store'
        this.firstDisplayedProduct = "#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span"
    }

    enterMainSite() {
        cy.visit(this.url);
    }

    checkTitleOfWebsite() {
        cy.title().should('eq', this.title);
    }

    addProductToCart() {
        cy.get(this.firstDisplayedProduct)
        .scrollIntoView()
        .wait(1000)
        .click()
    }

}

export default HomePage;