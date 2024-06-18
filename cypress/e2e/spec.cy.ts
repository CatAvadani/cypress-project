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
    cy.get('form select').first().select('To Read');
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
    cy.get('form select').first().select('To Read');
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
});

describe('Book Tracker - Filter Functionality', () => {
  beforeEach(() => {
    cy.task('reseed');
    cy.visit('/');
  });

  it('should filter books by "To Read" status', () => {
    // Select "To Read" from the filter dropdown
    cy.get('select').last().select('To Read');

    // Assert that only "To Read" books are visible
    cy.get('[data-testid="book-card"]').should('have.length', 2);
    cy.get('[data-testid="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: To Read');
    });
  });

  it('should filter books by "Reading" status', () => {
    // Select "Reading" from the filter dropdown
    cy.get('select').last().select('Reading');

    // Assert that only "Reading" books are visible
    cy.get('[data-testid="book-card"]').should('have.length', 2);
    cy.get('[data-testid="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: Reading');
    });
  });

  it('should filter books by "Completed" status', () => {
    // Select "Completed" from the filter dropdown
    cy.get('select').last().select('Completed');

    // Assert that only "Completed" books are visible
    cy.get('[data-testid="book-card"]').should('have.length', 2);
    cy.get('[data-testid="book-card"]').each(($el) => {
      cy.wrap($el).contains('Status: Completed');
    });
  });
});
