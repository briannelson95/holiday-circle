# Self Hosted Gift Exchange
The idea is a webapp that will allow users to spin up a docker container that allows them to create and join holiday gift exchanges. I want this app to have a sleek design with a fun way to reveal the person that they choose. I also want a way for users to create wish lists of items or themes so the gifter knows what to get the reciever.

## Built With
- NextJS
- Prisma
- PostgreSQL
- Docker

## To Do
- [ ] Ability to logout
- [ ] Route the newly added database data to the correct exchange page
- [ ] Styling

### Whats Working
- Sign up with email and password
- Database connection working
- Storing data correctly to db
    - Able to view that data using psql
    - Hashing password correctly with crypto
- Login and reroute to `/dashboard`
- Added relational tables to database for `GiftExchange` and `GuestList`
- Fetch and display correct data for the currently logged in user

### Whats Broken
- `/request-reset` sends a 404 and doesn't log anything in the console as expected
- `/api/login/route.ts` has a type error `Argument of type 'number' is not assignable to parameter of type 'string'.`

#### Notes
Making use of prisma studio was incredibly helpful for adding example data to the database as there's no other way to do so at the moment `bunx prisma studio`