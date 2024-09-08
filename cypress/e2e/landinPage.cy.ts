describe('FloatingNav Component', () => {
    beforeEach(() => {
      // Visit the page where the component is mounted
      cy.visit('http://localhost:3000');
    });
  
    it('should render navigation items correctly', () => {
      const navItems = ['About', 'Projects', 'Blogs', 'Experiences'];
  
      // Check if all nav items are rendered and visible
      navItems.forEach((item) => {
        cy.contains(item).should('be.visible');
      });
  
      // Check if the profile name is visible
      cy.contains('FARHI Said').should('be.visible');
  
      // Verify the "Download CV" button is rendered
      cy.contains('Download CV').should('be.visible');
    });
  
    it('should open and close the modal when clicking the search icon', () => {
      // Open the modal by clicking the search icon
      cy.get('.search').click(); 
  
      
      cy.get('body').click(0, 0);
  
      // Verify the modal is no longer visible
    });
  
    it('should update search results when typing into the search input', () => {
      // Open the modal
      cy.get('.search').click(); 
  
      cy.get('input[type="text"]').type('React');
  
      // Verify the search results are updated
      cy.contains('React.js').should('be.visible'); // Assuming "React" is part of search results
  
      // Type a query that gives no results
      cy.get('input[type="text"]').clear().type('UnknownTech');
    });
  
    it('should submit the search form correctly', () => {
      // Open the modal
      cy.get('.search').click(); 
  
      // Type into the input and submit the form
      cy.get('input[type="text"]').type('react');
      cy.get('form').submit();
  
      // Verify search results are updated after form submission
      cy.contains('React.js').should('be.visible');
    });
  
    it('should close the modal when clicking outside', () => {
      // Open the modal
      cy.get('.search').click(); 
  
      // Verify the modal is open
  
      // Click outside the modal to close it
      cy.get('body').click(0, 0);
  
      // Verify the modal is closed
    });
  });
  