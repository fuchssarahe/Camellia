# Camellia

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Camellia is a web application built using Ruby on Rails and React.js, meant for reviewing teas and managing personal tea inventories. The underlying structure of the application is inspired by Couchsurfing.  

At a minimum, this app will satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Teas
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Reviews
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Tea Search [By origin region, type, and popularity]
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Inventory
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

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

### Phase 1: Backend setup and Front End User Authentication (1.5 days, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] Splash page - user signup/signin modals
  - [ ] setup Webpack & Flux scaffold for
  - [ ] `UserForm`
  - [ ] `LoginForm`
- [ ] blank landing page after signin

### Phase 2: Teas Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Teas can be created and read through the API.

- [ ] create `Tea` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for teas (`TeasController`)
- [ ] jBuilder views for teas
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Tea Flux Architecture and Router (2 days, W1 F 6pm)

**Objective:** Teas can be read through the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each tea component, building out the flux loop as needed.
  - [ ] `TeasIndex`
  - [ ] `TeaIndexItem`
  - [ ] `TeaForm`
  - [ ] `TeaDetail`
  - [ ] `TeaOverview`
  - [ ] `TeaPreferencesForUser`
  - [ ] `TeaIdentifiers`
  - [ ] `TeaDetailedInfo`
  - [ ] `TeaSteepInfo`
  - [ ] `TeaSteepDetail`

### Phase 4: Start Styling (1 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Type Ahead Search (1.5 days, W2 Tu 12pm)

**Objective:** User will have the ability to search for teas by name/description, by region, or by type.

- build out API, Flux loop, and components for:
  - [ ] `RegionsIndex`
  - [ ] `RegionIndexItem`
  - [ ] `TeaTypesIndex`
  - [ ] `TeaTypeIndexItem`
- Use CSS to style new views
- Implement search suggestions
  - [ ] `SearchBar`
  - [ ] `SearchBarSuggestionIndex`
  - [ ] `SearchSuggestionItem`

### Phase 6: Ownerships (0.5 day, W2 Tu 12pm)

**Objective:** Ownerships belong to a tea and a user. An inventory of ownerships will appear as a list of teas on the dashboard for the user.  

- [ ] create `Ownership` model
- build out API, Flux loop, and components for:
  - [ ] `OwnershipForm`
  - [ ] `OwnershipIndex`
  - [ ] `OwnedTeaIndexItem`
- Use CSS to style new views

### Phase 7: Reviews (1 days, W2 Th 12pm)

**Objective:** Reviews belong to a tea and a user. Review information for a tea appears in the tea profile. The current user's review appears in the left-hand panel of the tea profile.

- [ ] create `Review` model
- build out API, Flux loop, and components for:
  - [ ] `ReviewsIndex`
  - [ ] `ReviewIndexItem`
  - [ ] `ReviewHeader`
  - [ ] `ReviewForm`
- Use CSS to style new views

### Phase 8: Follows (0.5 days, W2 Th 12pm)

**Objective:** Follows belong to a follower and a followed user. Reviews which are posted by followed users will appear in an index on the follower's dashboard.  

- [ ] create `Follow` model
- [ ] include follow buttons inside the `ReviewIndexItem`
- Use CSS to style new views

### Phase 9: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Recording tea consumption + stats
- [ ] Where to buy
- [ ] Steep preferences (gaiwan vs british)
- [ ] User profiles
- [ ] Pagination for search results
- [ ] Multiple sessions

<!-- [phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md -->
