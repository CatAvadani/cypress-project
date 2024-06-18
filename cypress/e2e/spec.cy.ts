describe('Book Tracker', () => {
  beforeEach(() => {
    cy.task('reseed');
    cy.visit('/');
  });

  it('should add a new book', () => {
    // User visits the homepage
    cy.get('h1').contains('Book Tracker').should('be.visible');

    // User clicks on the "Add Book" button
    cy.get('input[placeholder="Title"]').type('New Book');
    cy.get('input[placeholder="Author"]').type('John Doe');
    cy.get('input[placeholder="Image URL"]').type(
      'https://example.com/image.jpg'
    );
    cy.get('select').select('To Read');
    cy.get('button[type="submit"]').click();

    // User sees the new book in the list
    cy.contains('New Book').should('be.visible');
  });

  it('should update the status of a book', () => {
    // User adds a new book
    cy.get('input[placeholder="Title"]').type('Book to Update');
    cy.get('input[placeholder="Author"]').type('Jane Doe');
    cy.get('input[placeholder="Image URL"]').type(
      'https://example.com/image3.jpg'
    );
    cy.get('select').select('To Read');
    cy.get('button[type="submit"]').click();

    // User sees the new book in the list
    cy.contains('Book to Update').should('be.visible');

    // User updates the status to 'Reading'
    cy.contains('Book to Update').parent().contains('Reading').click();

    // The status of the book is updated and reflected on the homepage
    cy.contains('Book to Update')
      .parent()
      .contains('Status: Reading')
      .should('be.visible');
  });

  // it('should delete a book', () => {
  //   // User adds a new book
  //   cy.get('input[placeholder="Title"]').type('Book to Delete');
  //   cy.get('input[placeholder="Author"]').type('Jane Doe');
  //   cy.get('input[placeholder="Image URL"]').type(
  //     'https://example.com/image4.jpg'
  //   );
  //   cy.get('select').select('To Read');
  //   cy.get('button[type="submit"]').click();

  //   // User sees the new book in the list
  //   cy.contains('Book to Delete').should('be.visible');

  //   // User deletes the book
  //   cy.contains('Book to Delete')
  //     .parent()
  //     .within(() => {
  //       cy.contains('Delete').click();
  //     });

  //   // The book is removed from the list on the homepage
  //   cy.contains('Book to Delete', { timeout: 10000 }).should('not.exist');
  // });
});
