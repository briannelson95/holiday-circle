# Holiday Circle
A self-hosted gift exhang. The idea is a webapp that will allow users to spin up a docker container that allows them to create and join holiday gift exchanges. I want this app to have a sleek design with a fun way to reveal the person that they choose. I also want a way for users to create wish lists of items or themes so the gifter knows what to get the reciever.

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

## Ideal Features
- [ ] Ability to install and run with docker `docker-compose pull && docker-compose up -d`
    - [ ] Inside the `docker-compose.yml` I want an option to run the prisma stuido `bunx prisma studio || npx prisma studio` so users will be able to visualize their data inside the browser `default: false`
- [ ] Users to create their own gift exchanges 
- [ ] Ability to invite others to a gift exchange with shareable link (email/text)
- [ ] Interactive name drawing
    - Fun animation of a gift box opening and displaying the name of your pick (tap to open/reveal)
- [ ] Create a wish list unique to a specifit gift exchange
    - Not a general wish list as exchanges can have different budgets
    - Inside the exchange you'll only see the wish list of the person for that unique exchange
    - [ ] Option to "search" or add items you've added to other exchanges so you don't have to add something more than once


#### Notes
Making use of prisma studio was incredibly helpful for adding example data to the database as there's no other way to do so at the moment `bunx prisma studio`