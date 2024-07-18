

describe('Desafio', () => {

    beforeEach(() => {

        cy.visit('https://automationexercise.com/');

    });
    it('Test Case 13: Verificar Produto do Carinho', () => {

        cy.scrollTo(0, 500)

        cy.get('a[href="/product_details/2"]')
        .click()

        cy.get('#quantity')
        .clear()
        .type(4)

        cy.get(':nth-child(5) > .btn')
        .click()

        cy.contains('View Cart')
        .click()

    });
 it('Test Case 14: Registrar no Ckeckout ', () => {
        
        adicionarProdutoCart()

        cy.get('.col-sm-6 > .btn')
        .click()

        cy.get('.modal-body > :nth-child(2) > a > u')
        .click()

        cadastroCliente()

        checkout()

        cy.contains('Delete Account')
        .click()
        
        cy.contains('Continue')
        .click()

    });
    it('Test Case 15: Registrar antes do checkout', () => {
        
        cy.contains(' Signup / Login')
        .click()

        cadastroCliente()

        adicionarProdutoCart()

        checkout()

    });

    it('Test Case 16: Login Antes do Checkout', () => {
       
        cy.contains(' Signup / Login')
        .click()
        
        cy.get('[data-qa="login-email"]')
        .type('Francisco.bigio@gmail.com')
        
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
        
        cy.contains("button", 'Login')
        .click()

        adicionarProdutoCart()

        checkout()
        
    });
    it('Test Case 17: Remover itens do Carinho ', () => {
       
        adicionarProdutoCart()

        cy.get('.cart_quantity_delete > .fa')
        .click()

    });

    it('Test Case 18: Categoria de Produto', () => {
       
        cy.scrollTo(0, 500)

        cy.get(':nth-child(1) > .panel-heading > .panel-title > a')
        .click()
        
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
        .click()
        
        cy.get('.title')
        .should('be.visible')
        
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a')
        .click()
        
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a')
        .click()

    });

    after(() => {

        excluirConta()

    });
});

function excluirConta(){

    cy.contains(' Signup / Login')
        .click()
        
        cy.get('[data-qa="login-email"]')
        .type('Francisco.bigio@gmail.com')
        
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
        
        cy.contains("button", 'Login')
        .click()
        
        cy.contains('Delete Account')
        .click()
        
        cy.contains('Continue')
        .click()
}

function adicionarProdutoCart(){

    cy.scrollTo(0, 500)

    cy.get('a[href="/product_details/2"]')
    .click()

    cy.get('#quantity')
    .clear()
    .type(4)

    cy.get(':nth-child(5) > .btn')
    .click()

    cy.contains('View Cart')
    .click()

}

function checkout(){

    cy.get(':nth-child(10) > a')
    .should('have.text', ' Logged in as Francisco Bigio')

    cy.contains('Cart')
    .click()

    cy.get('.col-sm-6 > .btn')
    .click()

    cy.get('.form-control')
    .type('Por favor tenham mais cuidado com a minha entrega')

    cy.get(':nth-child(7) > .btn')
    .click()

    cy.get('[data-qa="name-on-card"]')
    .type('Francisco M Bigio')

    cy.get('[data-qa="card-number"]')
    .type('1234 5678 9012 3456')

    cy.get('[data-qa="cvc"]')
    .type('025')

    cy.get('[data-qa="expiry-month"]')
    .type('07')

    cy.get('[data-qa="expiry-year"]')
    .type('2028')

    cy.get('[data-qa="pay-button"]')
    .click()

    cy.contains('Your order has been confirmed!')
    .should('be.visible')

}

function cadastroCliente(){

    cy.get('[data-qa="signup-name"]')
    .type('Francisco Bigio')

    cy.get('[data-qa="signup-email"]')
    .type('Francisco.bigio@gmail.com')

    cy.contains("button", 'Signup')
    .click()

    cy.get('#id_gender1')
    .click()

    cy.get('#password')
    .type("Flamengo")

    cy.get('#days')
    .select('22')

    cy.get('#months')
    .select('July')

    cy.get('#years')
    .select('2002')

    cy.get('#newsletter')
    .click()

    cy.get('#optin')
    .click()

    cy.get('#first_name')
    .type('Francisco')

    cy.get('#last_name')
    .type('Bigio')

    cy.get('#address1')
    .type('Casa da mãe Joana,500')
    
    cy.get('#country')
    .select('Canada')

    cy.get('#state')
    .type('Ottawa')

    cy.get('#city')
    .type('Ottawa City')

    cy.get('#zipcode')
    .type('25870-540')

    cy.get('#mobile_number')
    .type('987974564')

    cy.contains('Create Account')
    .click()

    cy.contains('Continue')
    .click()
}