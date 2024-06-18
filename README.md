# Book Tracker

## Project Description

Book Tracker is a full-stack web application that allows users to manage a collection of books. Users can add new books, update the status of existing books, and delete books. The application is built using Next.js for the frontend, a Node.js backend, and a Prisma database.

## Setup Instructions

### Installation

1. Clone the repository:

   git clone (https://github.com/CatAvadani/cypress-project.git)
   cd repository directory

### Install the dependencies:

npm install

## Set up the database:

npx prisma migrate dev --name init
npx prisma db seed

## Start the development server:

npm run dev

## Run Cypress tests

npm run test

## User Flow Documentation

### 1. Visit Home Page and View Existing Books

**Flow:**

- The user visits the home page.
- The user sees a list of existing books displayed on the page.

**User Actions:**

- The user navigates to the home page by entering the URL in the browser.

**Expected Results:**

- The page loads and displays a list of existing books.
- Each book displays its title, author, image, and status.
- The user sees buttons to change the status and delete the book.

### 2. Add a New Book

**Flow:**

- The user fills out the form with the book's title, author, image URL, and selects the status from the dropdown.
- The user clicks the "Add Book" button to submit the form.

**User Actions:**

- The user enters the title in the "Title" input field.
- The user enters the author's name in the "Author" input field.
- The user enters the image URL in the "Image URL" input field.
- The user selects the book's status from the dropdown.
- The user clicks the "Add Book" button.

**Expected Results:**

- The new book is added to the list of books displayed on the home page.
- The form fields are cleared after the book is added.
- The newly added book is visible on the list with its title, author, image, and status.

### 3. Update Book Status

**Flow:**

- The user selects a book from the list.
- The user clicks on one of the status buttons (To Read, Reading, Completed) to change the status of the book.

**User Actions:**

- The user locates the book they want to update.
- The user clicks the desired status button.

**Expected Results:**

- The status of the selected book is updated.
- The updated status is displayed next to the book's information.

### 4. Delete a Book

**Flow:**

- The user selects a book from the list.
- The user clicks the "Delete" button to remove the book from the list.

**User Actions:**

- The user locates the book they want to delete.
- The user clicks the "Delete" button.

**Expected Results:**

- The book is removed from the list.
- The deleted book no longer appears on the home page.

```

```
