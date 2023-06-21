describe('Authentication / Sign out', () => {
  it('should sign out', () => {
    cy.signIn();

    cy.get('[data-cy="avatar-menu-button"]').click();
    cy.contains('Sign out').click();
    cy.get('form').submit();

    cy.url().should('not.include', '/dashboard');
  });
});
