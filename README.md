### Whats Working
- Sign up with email and password
- Database connection working
- Storing data correctly to db
    - Able to view that data using psql
    - Hashing password correctly with crypto
- Login and reroute to `/dashboard`

### Whats Broken
- `/request-reset` sends a 404 and doesn't log anything in the console as expected
- `/api/login/route.ts` has a type error `Argument of type 'number' is not assignable to parameter of type 'string'.`
