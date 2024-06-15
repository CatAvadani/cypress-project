describe('Book Tracker', () => {
  beforeEach(() => {
    cy.task('reseed');
  });

  it('should add a new book', () => {
    cy.visit('/');
    cy.get('h1').contains('Book Tracker').should('be.visible');
    cy.get('input[placeholder="Title"]').type('New Book');
    cy.get('input[placeholder="Author"]').type('John Doe');
    cy.get('input[placeholder="Image URL"]').type(
      'https://example.com/image.jpg'
    );
    cy.get('select').select('To Read');
    cy.get('button[type="submit"]').click();
    cy.contains('New Book').should('be.visible');
  });
});
