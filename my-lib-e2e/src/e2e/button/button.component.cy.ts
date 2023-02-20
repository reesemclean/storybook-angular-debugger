describe('my-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-testing-button').should('exist');
  });
});
