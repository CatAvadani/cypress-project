describe('Book Tracker', () => {
  beforeEach(() => {
    cy.task('reseed');
    cy.visit('/');
  });

  it('should add a new book', () => {
    // User visits the homepage
    cy.get('h1').contains('Book Tracker').should('be.visible');

    // User fills the form to add a new book
    cy.get('[data-cy="input-title"]').type('New Book');
    cy.get('[data-cy="input-author"]').type('John Doe');
    cy.get('[data-cy="input-image-url"]').type(
      'https://example.com/image4.jpg'
    );
    cy.get('[data-cy="select-status"]').select('To Read');
    cy.get('[data-cy="button-submit"]').click();

    // User sees the new book in the list
    cy.contains('New Book').should('be.visible');
  });

  it('should update the status of a book', () => {
    // User adds a new book
    cy.get('[data-cy="input-title"]').type('Book to Update');
    cy.get('[data-cy="input-author"]').type('Jane Doe');
    cy.get('[data-cy="input-image-url"]').type(
      'https://example.com/image4.jpg'
    );
    cy.get('[data-cy="select-status"]').select('To Read');
    cy.get('[data-cy="button-submit"]').click();

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

  it('should delete a book', () => {
    // Add a new book
    cy.get('[data-cy="input-title"]').type('Book to Delete');
    cy.get('[data-cy="input-author"]').type('Jane Doe');
    cy.get('[data-cy="input-image-url"]').type(
      'https://example.com/image4.jpg'
    );
    cy.get('[data-cy="select-status"]').select('To Read');
    cy.get('[data-cy="button-submit"]').click();

    // Verify the new book is added
    cy.contains('Book to Delete').should('be.visible');

    // Delete the book
    cy.contains('Book to Delete')
      .parent()
      .within(() => {
        cy.get('[data-cy="delete-button"]').click();
      });

    // Adding a wait to ensure the DOM updates
    cy.wait(1000);

    // Verify the book is deleted
    cy.contains('Book to Delete', { timeout: 10000 }).should('not.exist');
  });
});

describe('Book Tracker - Filter Functionality', () => {
  beforeEach(() => {
    cy.task('reseed');
    cy.visit('/');
  });

  it('should filter books by "To Read" status', () => {
    // Select "To Read" from the filter dropdown
    cy.get('[data-cy="filter-select"]').select('To Read');

    // Assert that only "To Read" books are visible
    cy.get('[data-cy="book-card"]').should('have.length', 2);
    cy.get('[data-cy="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: To Read');
    });
  });

  it('should filter books by "Reading" status', () => {
    // Select "Reading" from the filter dropdown
    cy.get('[data-cy="filter-select"]').select('Reading');

    // Assert that only "Reading" books are visible
    cy.get('[data-cy="book-card"]').should('have.length', 2);
    cy.get('[data-cy="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: Reading');
    });
  });

  it('should filter books by "Completed" status', () => {
    // Select "Completed" from the filter dropdown
    cy.get('[data-cy="filter-select"]').select('Completed');

    // Assert that only "Completed" books are visible
    cy.get('[data-cy="book-card"]').should('have.length', 2);
    cy.get('[data-cy="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: Completed');
    });
  });

  it('should display all books when "All" is selected', () => {
    // Select "All" from the filter dropdown
    cy.get('[data-cy="filter-select"]').select('All');

    // Assert that all books are visible
    cy.get('[data-cy="book-card"]').should('have.length', 6);
  });
});
