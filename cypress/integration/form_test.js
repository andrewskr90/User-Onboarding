describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('check for correct elements showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    })

    it('select name input, type name in it, make sure type named matches output', () => {
        nameInput()
            .should('have.value', '')
            .type('Tyler')
            .should('have.value', 'Tyler')
    })

    it('select email input, type email in it, make sure type email matches output', () => {
        emailInput()
            .should('have.value', '')
            .type('andrewstyler97@outlook.com')
            .should('have.value', 'andrewstyler97@outlook.com')
    })

    it('select password input, type password in it, make sure type password matches output', () => {
        passwordInput()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password')
    })

    it('check terms of service, uncheck it, then check it again', () => {
        termsInput()
            .check().uncheck().check()
    })

    it('fill out form and check for working submit button', () => {
        nameInput()
            .should('have.value', '')
            .type('Tyler')
        emailInput()
            .should('have.value', '')
            .type('andrewstyler97@outlook.com')
        passwordInput()
            .should('have.value', '')
            .type('password')
        termsInput()
            .check().uncheck().check()
        submitBtn()
            .click()

    })

    it('make sure form cant be submitted when values are null', () => {
        nameInput()
        .should('have.value', '')
    emailInput()
        .should('have.value', '')
    passwordInput()
        .should('have.value', '')
    termsInput()
        .check().uncheck()
    submitBtn()
        .should('be.disabled')
    })
    


    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
})