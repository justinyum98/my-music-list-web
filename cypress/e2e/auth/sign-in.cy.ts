describe('Authentication / Sign in', () => {
    afterEach(() => {
        cy.signOut();
    });

    it('should sign in with credentials', () => {
        cy.visit('/');

        cy.signIn();

        cy.url().should('include', '/dashboard');
        cy.getCookie('next-auth.session-token').should('exist');
    });
});
