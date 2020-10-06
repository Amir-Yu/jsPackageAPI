Create an API for deliveries:

1. The API should use 4 schemas: Users, Couriers, Senders, Deliveries.
2. Create “Authenticate” endpoint.
3. The endpoint should authenticate a user by getting a username and password from the user and returning an access token.
4. Create “Add Delivery” endpoint.
5. Only the sender can add a delivery.
6. Create “Get Deliveries” endpoint.
7. The endpoint should take a date as a mandatory parameter and return a list of all the deliveries for that date.
8. For a sender, return all the deliveries created by this sender.
9. For a courier, return only the deliveries that are assigned to him.
10. Bonus - Support pagination.
11. Create “Assign Delivery” endpoint.
12. The endpoint should take a delivery and a courier and assign the delivery to the courier.
13. Each courier can be assigned up to 5 deliveries a day.
14. Only a sender can assign a delivery.
15. Create “Courier Revenue” endpoint.
16. The endpoint should return the courier’s revenue for a specific date range.
17. The date range must be in the past.
18. A user can see its revenue only.
19. All endpoints must be authenticated (except authenticate).
20. These are the fields that the product needs in each scheme. You can add fields
    according to your design:
    You may add fields that you think are required for the project

21. Couriers:

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
