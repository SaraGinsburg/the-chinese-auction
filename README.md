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