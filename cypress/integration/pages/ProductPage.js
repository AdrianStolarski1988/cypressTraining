
class ProductPage{
    constructor() {
        
    }

    checkTitleOfWebsite(title) {
        cy.title().should('eq', title);
    }


}
export default ProductPage;