# React Chinese Auction

# step 1: create React App

Project Development Workflow



# Cart Component
1. Set Active Task Management Spreadsheet
2. Create branch cart-component
3. Products.js
4. Handle "Add To Cart" to this.props.addToCart(product)
5. App.js
6. Add cartItems to state as []
7. Create addToCart(product)
8. Slice, Check product existance, add to cartitems
9. Cart.js
10. Define cartItems, order from this.props
11. Check cartItems.length and show message
12. List carItems {cartItems.length > 0 && }
13. index.css
14. Style cart, cart-header, cart-items (img, li)
15. Use LocalStorage on App constructor to load cart items (JSON.parse)
16. Use LocalStorage on addToCart to save cart items (JSON.stringify)

#Checkout Form
1. Set Active Task Management Spreadsheet
2. Create branch checkout-form
3. Cart.js
4. Make cart items persistent
5. Use LocalStorage on App constructor to load cart items (JSON.parse)
6. Use LocalStorage on addToCart to save cart items (JSON.stringify)
7. Handle Click on Process
8. Update showCheckout state to tru on click
9. Conditional rendering Checkout Form
10. Get Email, Name and Address required input
11. Define handleInput function
12. Add Checkout Button
13. Handle onSubmit Form Event by this.createOrder
14. Create order object and pass to parent to handle it
15. Publish changes

#Add Modal and Animation
1. Set Active Task Management Spreadsheet
2. Create branch animation-modal
3. Show Animation
4. Install react-reveal
5. Create fade effect from bottom for products
6. Create fade effect from left for add to cart
7. Create fade effect from right for show checkout form
8. Open Modal by click on product image
9. Install react-modal
10. Products.js
11. Import Modal
12. Set state for product to null
13. Define openModal and closeModal
14. Show Modal if product exists
15. Create Modal
16. Create zoom effect for modal
17. index.css
18. Style Product Details
19. Commit and Publish changes
20. Pull request, merge, change to master
21. Task Management Spreadsheet set to done





