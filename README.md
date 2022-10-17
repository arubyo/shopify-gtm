Shopify Checkout Page datalayer for UA, GA4 and Google Ads conversion event

GTM Container includes 
- Purchase Event
- Phone clicks
- Email clicks
- Social clicks
- Form Submission 
All variable & triggers

How to set up 
- Import the JSON container into GTM and change the UA/GA4 variables 
- Add the shopify checkout code to the checkout page and change the Google Ads conversion label (first line) and the GTM container code (last line) 


- GTM should still be implemented in the theme.liquid 
- Google ads should also be implemented in the theme.liquid 



Universal Analytics 
- Purchase Goal is a destination and should be as follows

Destination: Regular exp - \/checkout\/thank_you
Funnel: ON  
1. Homepage
^/$
2. Collections 
^/collections/([a-zA-Z0-9]|-|?page=[0-9])*$
3. Product Page
.*/products/.*
4. Cart
/cart
5. Checkout Information
\/checkouts/\
6. Shipping
?step=shipping_method
7. Payment
?previous_step=shipping_method&step=payment_method

GA4 
- Add new conversion events that you want to record 
