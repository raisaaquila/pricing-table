# pricing-table
 
The HTML uses div elements to create a container for the pricing table.
Each Airpods is represented as a .pricing-card div containing:
A title (.plan-title)
A price (.plan-price)
A list of features (.plan-features)
A "Buy Now" button (.buy-now)
CSS Styling:

The CSS styles the body to center the pricing table.
.pricing-table uses Flexbox to layout the pricing cards.
Each .pricing-card has a gradient background, rounded corners, padding, and box-shadow for a modern look.
The .plan-title and .plan-price classes style the title and price text.
.plan-features styles the list of features, with .unavailable applying a strikethrough to unavailable features.
.buy-now styles the button, adding hover effects for interactivity.
JavaScript Functionality:

The JavaScript waits for the DOM content to load, then attaches click event listeners to all "Buy Now" buttons.
When a button is clicked, an alert displays the plan title, indicating which plan's button was clicked.
