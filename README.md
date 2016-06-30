# Camellia

[Heroku link][heroku]

[heroku]: https://unsteeped.herokuapp.com/

## Minimum Viable Product

Camellia is a web application built using Ruby on Rails and React.js, meant for reviewing teas and managing personal tea inventories. The underlying structure of the application is inspired by [Couchsurfing](https://www.couchsurfing.com/).  

At a minimum, this app will satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Teas
  - [ ] teas hold information on type, region, and steep specifications
  - [ ] each tea has a profile page listing details and reviews
- [ ] Tea Search
  - [ ] search for by tea name
  - [ ] search bar is easily accessible from the header of any page
  - [ ] search yields an index of teas and minimal details like rating and type
- [ ] Tea Inventory
  - [ ] users can add teas to their personal inventory
  - [ ] owned teas will appear on the dashboard for the user
  - [ ] owned teas aren't visible to other users
- [ ] Reviews
  - [ ] users can review teas
  - [ ] reviews appear on the profile for a tea
  - [ ] user reviews are averaged into a rating for a tea

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days, W1 W 12pm)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [x] create `User` model
- [x] authentication
- [x] CSS to style Splash page - user signup/signin modals
- [x] setup Webpack & Flux scaffold for
  - [x] `SignupForm`
  - [x] `LoginForm`
- [x] blank landing page after signin
- [x] set up guest/demo login

### Phase 2: Teas Model, API, and basic APIUtil (1 day, W1 Th 12pm)

**Objective:** Teas can be created and read through the API.

- [x] create `Tea` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for teas (`TeasController`)
- [x] jBuilder views for teas
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Tea Flux Architecture and Router (2.5 days, W2 T 6pm)

**Objective:** Teas can be read through the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] implement each tea component, building out the flux loop as needed.
  - [ ] `TeasIndex`
  - [ ] `TeaIndexItem`
  - [ ] `TeaForm`
  - [ ] `TeaDetail`
  - [ ] `TeaOverview`
  - [ ] `TeaDetailedInfo`
- [ ] use CSS to style views

### Phase 4: Type Ahead Search (1 day, W2 W 6pm)

**Objective:** User will have the ability to search for teas by name/description, by region, or by type.

- [ ] Use CSS to style new views
- [ ] Implement search suggestions
  - [ ] `SearchBar`
  - [ ] `SearchBarSuggestionIndex`
  - [ ] `SearchSuggestionItem`

### Phase 5: Ownerships (1 day, W2 Th 6pm)

**Objective:** Ownerships belong to a tea and a user. An inventory of ownerships will appear as a list of teas on the dashboard for the user.  

- [ ] create `Ownership` model
- [ ] build out API, Flux loop, and components for:
  - [ ] `OwnershipForm`
  - [ ] `OwnershipIndex`
  - [ ] `OwnedTeaIndexItem`
- [ ] Use CSS to style new views

### Phase 6: Reviews (1 day, W2 F 6pm)

**Objective:** Reviews belong to a tea and a user. Review information for a tea appears in the tea profile. The current user's review appears in the left-hand panel of the tea profile.

- [ ] create `Review` model
- [ ] build out API, Flux loop, and components for:
  - [ ] `ReviewsIndex`
  - [ ] `ReviewIndexItem`
  - [ ] `ReviewHeader`
  - [ ] `ReviewForm`
- [ ] Use CSS to style new views

### Bonus Features (TBD)
- [ ] Follows
- [ ] Recording tea consumption + stats
- [ ] Where to buy
- [ ] Steep preferences (gaiwan vs british)
- [ ] Company profiles
- [ ] User profiles
- [ ] Pagination for search results
- [ ] Multiple sessions

<!-- [phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md -->
