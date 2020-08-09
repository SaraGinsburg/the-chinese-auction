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

Node.JS

#Create Products Backend
1.  Install nodemon globally
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

Redux

#Add Redux
1. what is redux (diagram)
2. update task on spreadsheet
3. create branch add-redux-products
4. npm install redux react-redux redux-thunk
5. create types
6. types.js
7. define FETCH_PRODUCTS
8. actions/productActions.js
9. declare fetchProducts
10. create reducers
11. reducers/productReducers.js
12. define case FETCH_PRODUCTS
13. create store
14. store.js
15. import redux
16. set initial state
17. define initialState
18. create store
19. import productReducers
20. combine reducers
21. Use store
22. App.js
23. import store
24. wrap all in Provider
25. connect products
26. components/Products.js
27. connect to store
28. import fetchProducts
29. fetch products on did mount
30. package.json
31. set proxy to http://127.0.0.1:5000
32. npm run server
33. check products list
34. commit and publish
35. send pull request and merge
36. update spreadsheet

#Add Redux To Filter
1. Updte task and branch
2. types.js
3. create FILTER_PRODUCTS_BY_SIZE
4. create ORDER_PRODUCTS_BY_PRICE
5. actions/productActions.js
6. create filterProducts
7. move app.js filterProducts logic here
8. create sortProducts
9. move app.js filterProducts logic here
10. reducers/productReducers.js
11. case FILTER_PRODUCTS_BY_SIZE
12. case ORDER_PRODUCTS_BY_PRICE
13. Filter.js
14. connect props: size, sort, items and filteredItems
15. connect actions: filterProducts and sortProducts
16. show loading if no filteredProducts
17. App.js
18. remove Filter props
19. check result
20. update task and branch

#Add Redux To Cart
1. Updte task and branch
2. types.js
3. create ADD_TO_CART
4. create REMOVE_FROM_CART
5. actions/cartActions.js
6. create addToCart
7. create removeFromCart
8. reducers/cartReducers.js
9. case ADD_TO_CART
10. case REMOVE_FROM_CART
11. Cart.js
12. connect props: cartItems
13. connect actions: removeFromCart
14. Product.js
15. add action addToCart
16. App.js
17. remove Cart props
18. store.js
19. set initial cartItems to localStorage
20. check result
21. update task and branch

Advanced Topics

#Create Order
1. Backend
2. server.js
3. create order modal
4. get /api/orders
5. post /api/orders
6. delete /api/orders/:id
7. Frontend
8. create types
9. types.js
10. CLEAR_ORDER, CLEAR_CART, CREATE_ORDER
11. create actions
12. actions/orderActions.js
13. createOrder(order)
14. clearOrder()
15. create reducers
16. reducers/orderReducers.js
17. case CREATE_ORDER
18. case CLEAR_ORDER
19. Update Cart Component
20. components/Cart.js
21. connect order, createOrder, clearOrder
22. form onSubmit={this.createOrder}
23. createOrder() this.props.createOrder(order)
24. closeModal() this.props.clearOrder()
25. render()
26. const { cartItems, order } = this.props;
27. {order && (}

#Manage Orders
1. Add new page
2. Install react-router-dom
3. App.js
4. Import BrowserRouter, Route, Link
5. render()
6. BrowserRouter
7. Route path="/admin" component={AdminScreen}
8. Route path="/" exact={true} component={HomeScreen}
9. HomeScreen.js
10. AdminScreen.js
11. components/Orders.js
12. render()
13. Orders
14. Backend
15. server.js
16. app.get("/api/orders")
17. app.delete("/api/orders/:id")
18. Frontend
19. types.js
20. FETCH_ORDERS
21. actions/orderActions.js
22. fetchOrders()
23. reducers/orderReducers.js
24. case FETCH_ORDERS {orders: action.payload}
25. components/Orders.js
26. connect orders, fetchOrders
27. componentDidMount() fetchOrders
28. render()
29. !orders
30. Loading...
31. table orders
32. index.css
33. style orders