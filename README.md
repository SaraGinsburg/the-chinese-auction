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

#Create Products Backend
1. Install nodemon globally
2. Add server.js
3. Install express body-parser mongoose shortid
4. Install MongoDB
5. app = express()
6. app.use(bodyParser.json())
7. mongoose.connect()
8. create Product model
9. app.post("/api.products")
10. Postman send post request
11. route.get("/api/products")
12. route.delete("/api/products/:id")