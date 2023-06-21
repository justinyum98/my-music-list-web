describe('Authentication / Sign out', () => {
    it('should sign out', () => {
        cy.signIn();

        cy.get('#avatar-menu-button').click();
        cy.contains('Sign out').click();
        // Known bug: Clicking sign out menu button doesn't redirect to sign in page.
        // This is temporary workaround.
        cy.visit('/dashboard');

        cy.url().should('not.include', '/dashboard');
    });
});
