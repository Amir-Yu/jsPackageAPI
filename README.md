Create an API for deliveries:

 The API should use 4 schemas: Users, Couriers, Senders, Deliveries.
 
 Create “Authenticate” endpoint.
 
 The endpoint should authenticate a user by getting a username and password from the user and returning an access token.
 
 Create “Add Delivery” endpoint.
 
 Only the sender can add a delivery.
 
 Create “Get Deliveries” endpoint.
 
 The endpoint should take a date as a mandatory parameter and return a list of all the deliveries for that date.
 
 For a sender, return all the deliveries created by this sender.
 
 For a courier, return only the deliveries that are assigned to him.
 
 Bonus - Support pagination.
 
 Create “Assign Delivery” endpoint.
 
 The endpoint should take a delivery and a courier and assign the delivery to the courier.
 
 Each courier can be assigned up to 5 deliveries a day.
 
 Only a sender can assign a delivery.
 
 Create “Courier Revenue” endpoint.
 
 The endpoint should return the courier’s revenue for a specific date range.
 
 The date range must be in the past.
 
 A user can see its revenue only.
 
 All endpoints must be authenticated (except authenticate).
 
 These are the fields that the product needs in each scheme. You can add fields
 
 according to your design:
 
 You may add fields that you think are required for the project
 

1. Couriers:

- firstName
- lastName
- phoneNumber
- vehicle type

2. Deliveries:

- package size
- cost
- description
- date

3. Senders:

- companyName

4. Users
