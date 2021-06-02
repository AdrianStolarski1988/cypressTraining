///<reference types="cypress"/>
import HomePage from "../pages/HomePage"
import ProductPage from "../pages/ProductPage"

describe('Get Into Main Site',function() {


    const hp = new HomePage();
    const pp = new ProductPage();

    it('enter to main site, and check title of website', () => {
        
        hp.enterMainSite();
        hp.checkTitleOfWebsite();
    });

    it('go to product', () => {
        // const hp = new HomePage();
        hp.addProductToCart();
        cy.wait(2000);
    });

    it('check title of product page', ()=> {
        
        pp.checkTitleOfWebsite('Faded Short Sleeve T-shirts - My Store');
    })
})