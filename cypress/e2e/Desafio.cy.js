describe('Desafio', () => {

    beforeEach(() => {

        cy.visit('https://automationexercise.com/');

    });
    it(' Teste Case 1: Criação de Conta', () => {
        cy.contains('Signup / Login')
        .click()

        cadastroCliente()
    });
    it('Teste Case 2: Logar com Conta Criada ', () => { 
        cy.contains('Signup / Login')
        .click()
    
        cy.get('[data-qa="login-email"]')
        .type('Francisco.bigio@gmail.com')
    
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
    
        cy.contains("button", 'Login')
        .click()
    });
    it('Teste Case 3: Logar com Conta Criada com Email ou Senha errado ', () => {
        cy.contains('Signup / Login')
        .click()
    
        cy.get('[data-qa="login-email"]')
        .type('Francisco.miguez@gmail.com')
    
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
    
        cy.contains("button", 'Login')
        .click()

        cy.contains('Your email or password is incorrect!')
        .should('have.text', 'Your email or password is incorrect!')
    });
    it('Teste Case 4: Deslogar de uma conta', () => {
        cy.contains('Signup / Login')
        .click()
    
        cy.get('[data-qa="login-email"]')
        .type('Francisco.bigio@gmail.com')
    
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
    
        cy.contains('button', 'Login')
        .click()

        cy.contains('Logout')
        .click()
    });

    it('Teste Case 5: Tentar criar uma conta com Email ja Cadastrado', () => {
        cy.contains('Signup / Login')
        .click()

        cy.get('[data-qa="signup-name"]')
        .type('Francisco Bigio')

        cy.get('[data-qa="signup-email"]')
        .type('Francisco.bigio@gmail.com')

        cy.contains("button", 'Signup')
        .click()

        cy.contains('Email Address already exist!')
        .should('have.text', 'Email Address already exist!')

        excluirConta()
    });
    it('Teste Case 6: Formulário de Contato', () => {
        cy.contains('Contact us')
        .click()

        cy.get('[data-qa="name"]')
        .type('Francisco Bigio')

        cy.get('[data-qa="email"]')
        .type('Francisco.bigio@gmail.com')

        cy.get('[data-qa="subject"]')
        .type('Erro do site')

        cy.get('[data-qa="message"]')
        .type('Esse site está cheio de problemas, não consigo fazer as minhas compras, quando eu clico em comprar a camisa azul não entra no meu carinho')

        cy.get('input[type=file]')
        .click()
        .selectFile('july-18-2019-interacting-galaxies-am-1316-241.jpg')

        cy.contains('Submit')
        .click()
    });
    it(' Teste Case 7: Verificar a Página dos testes de caso', () => {  
        cy.contains("button", 'Test Cases')
        .click()
    });

    it('Test Case 8: Verificar Produto', () => {
        cy.contains('Products')
        .click()

        cy.scrollTo(0, 500)

        cy.get('a[href="/product_details/2"]')
        .click()
    });
    it('Test Case 9: Procurar Produto Específico', () => {
        cy.contains('Products')
        .click()

        cy.get('#search_product')
        .type('Winter Top')

        cy.get('#submit_search')
        .click()
    });
    it('Test Case 10: Verificar Inscrição', () => { 
    cy.scrollTo('bottom')

    cy.scrollTo(0,0,200)

    cy.get('#susbscribe_email')
    .type('Francisco.bigio@gmail.com')

    cy.get('#subscribe')
    .click()

    cy.get('.alert-success')
    .should('have.text', 'You have been successfully subscribed!')
    });
     it('Test Case 11: ', () => {  
        cy.contains('Cart')
        .click()
        
        cy.scrollTo('bottom')

        cy.scrollTo(0,0,200)
    
        cy.get('#susbscribe_email')
        .type('Francisco.bigio@gmail.com')
    
        cy.get('#subscribe')
        .click()
    
        cy.get('.alert-success')
        .should('have.text', 'You have been successfully subscribed!')
    });
    it('Test Case 12: Adicionar Produtos ao Carinho ', () => {
        cy.contains('Products')
        .click()

        cy.scrollTo(0, 500)

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.get('.modal-footer > .btn')
        .click()

        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.contains('View Cart')
        .click()
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
    it('Test Case 19: Marcas de Produto', () => {
        cy.contains('Products')
        .click()

        cy.scrollTo(0,700)

        cy.get('.brands_products > h2')
        .should('be.visible')

        cy.get('.brands-name > .nav > :nth-child(1) > a')
        .click()

        cy.get('.brands-name > .nav > :nth-child(2) > a')
        .click()
    });
    it('Test Case 20: Procurar Produto e Verificar Carinho Depois do Login', () => {
        cy.contains('Products')
        .click()

        cy.get('#search_product')
        .type('blue')

        cy.get('#submit_search')
        .click()

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.get('.modal-footer > .btn')
        .click()

        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.get('.modal-footer > .btn')
        .click()

        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.get('.modal-footer > .btn')
        .click()

        cy.contains('Cart')
        .click()

        cy.contains(' Signup / Login')
        .click()
        
        cy.get('[data-qa="login-email"]')
        .type('Francisco.bigio@gmail.com')
        
        cy.get('[data-qa="login-password"]')
        .type('Flamengo')
        
        cy.contains("button", 'Login')
        .click()
        
        cy.contains('Cart')
        .click()

        cy.contains('Delete Account')
        .click()
        
        cy.contains('Continue')
        .click()
    });
    it('Test Case 21: Adicionar Review ao Produto', () => {
        cy.contains('Products')
        .click()

        cy.scrollTo(0,500)

        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a')
        .click()

        cy.scrollTo(0,200)

        cy.get('#name')
        .type('Francisco Bigio')

        cy.get('#email')
        .type('Francisco.bigio@gmail.com')

        cy.get('#review')
        .type('É a melhor camisa que eu já comprei na minha vida')

        cy.get('#button-review')
        .click()

        cy.get('.col-md-12 > .alert-success')
        .should('be.visible')
    });
    it('Test Case 22: ', () => {
        cy.scrollTo(0,7500)

        cy.get('.recommended_items > .title')
        .should('be.visible')

        cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()

        cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .click()
    });
    it('Teste Case 23: ', () => {
        cy.contains(' Signup / Login')
        .click()
        
        cadastroCliente()

        adicionarProdutoCart()

        cy.get(':nth-child(10) > a')
        .should('have.text', ' Logged in as Francisco Bigio')

        cy.contains('Cart')
        .click()

        cy.get('.col-sm-6 > .btn')
        .click()

        cy.get('#address_delivery > .address_firstname') 
        .should('have.text', 'Mr. Francisco Bigio')

        cy.get( '#address_invoice > .address_firstname' )
        .should('have.text', 'Mr. Francisco Bigio')

        cy.get('#address_delivery > :nth-child(4)')
        .should('have.text', 'Casa da mãe Joana,500')

        cy.get( '#address_invoice > :nth-child(4)')
        .should('have.text', 'Casa da mãe Joana,500')

        cy.contains('Delete Account')
        .click()
        
        cy.contains('Continue')
        .click()
    });
    it('Test Case 24:', () => {
        adicionarProdutoCart()

        cy.get('.col-sm-6 > .btn')
        .click()

        cy.get('.modal-body > :nth-child(2) > a > u')
        .click()

        cadastroCliente()

        checkout()

        cy.get('[data-qa="continue-button"]')
        .click()

        cy.contains('Delete Account')
        .click()
        
        cy.contains('Continue')
        .click()
    });
    it('Test Case 25: ', () => { 
        cy.scrollTo('bottom')

        cy.get('.single-widget > h2')
        .should("be.visible")

        cy.get('#scrollUp > .fa')
        .click()

        cy.contains('Full-Fledged practice website for Automation Engineers')
        .should('be.visible')
    });
    it('Teste Case 26: ', () => {
        cy.scrollTo('bottom')

        cy.get('.single-widget > h2')
        .should("be.visible")

        cy.scrollTo('top')

        cy.contains('Full-Fledged practice website for Automation Engineers')
        .should('be.visible')
    });
});
function excluirConta(){
    cy.contains('Signup / Login')
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
