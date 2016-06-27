# Flux Cycles

## User Cycles

### Session API Request Actions

* `createSession`
  0. invoked from `LoginForm`
  0. `POST /api/session` is called
  0. `receiveCurrentUser` is set as the callback

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. `User` store updates `_user` and emits change

### User API Request Actions

* `createUser`
  0. invoked from `UserForm`
  0. `POST /api/users` is called
  0. `receiveCurrentUser` session response is set as the callback

### Store Listeners

* `Header` component listens to `User` store

## Review Cycles

### Reviews API Request Actions

* `fetchReviews`
  0. invoked from `ReviewsIndex` on willMount with query params (date specific, tea specific, and followed users specific)
  0. `GET /api/reviews` is called, passing params.
  0. `receiveReviews` is set as the callback.

* `createReview`
  0. invoked from `ReviewForm` on
  0. `POST /api/teas/:id/reviews` is called
  0. `receiveSingleReview` is set as the callback

* `updateReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `removeReview`
  0. invoked from delete review button (in review list item) `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the callback.


### Reviews API Response Actions

* `receiveReviews`
  0. invoked from an API callback
  0. `Reviews` store updates `_reviews` and emits change

* `receiveSingleReview`
  0. invoked from a API callback
  0. `Reviews` store updates `_reviews` and emits change

* `removeReview`
  0. invoked from an API callback
  0. `Reviews` store updates `_reviews` and emits change

### Store Listeners

* `ReviewsIndex` component listens to the `Reviews` store
* `TeaOverview` component listens to the `Reviews` store
* `TeaSteepInfo` component listens to the `Reviews` store (triggers TeaActions - fetchSingleTea)

## Tea Cycles

### Teas API Request Actions

* `fetchTeas`
  0. invoked from `TeasIndex` on didMount with query params
  0. `GET /api/teas` is called.
  0. `receiveTeas` is set as the callback.

* `createTea`
  0. invoked from `TeaForm` button `onClick`
  0. `POST /api/teas` is called.
  0. `receiveSingleTea` is set as the callback.

* `fetchSingleTea`
  0. invoked from `TeaDetail` on  `didMount`/`willReceiveProps`; invoked from `TeaSteepInfo` on changes in `Reviews` store
  0. `GET /api/teas/:id` is called.
  0. `receiveSingleTea` is set as the callback.


### Teas API Response Actions

* `receiveTeas`
  0. invoked from an API callback.
  0. `Tea` store updates `_teas` and emits change.

* `receiveSingleTea`
  0. invoked from an API callback.
  0. `Tea` store updates `_teas[id]` and emits change.


### Store Listeners

* `TeasIndex` component listens to `Tea` store.
* `TeaDetail` component listens to `Tea` store.

## Ownership Cycles

### API Request Actions
* `fetchOwnedTeas`
  0. invoked from `OwnedTeasIndex` on willMount
  0. `GET /api/owned_teas` is called with query params (specific to current user).
  0. `receiveOwnedTeas` is set as the callback.

* `createOwnership`
  0. invoked from `OwnershipForm` create ownership button `onClick` in `TeaDetail`
  0. `POST /api/owned_teas` is called.
  0. `receiveSingleOwnership` is set as the callback.

* `updateOwnership`
  0. invoked from `OwnershipForm` `onSubmit`
  0. `PATCH /api/owned_teas/:id` is called.
  0. `receiveSingleTea` is set as the callback.

* `deleteOwnership`
  0. invoked from remove tea button `onClick` in `OwnedTeaIndexItem`
  0. `DELETE /api/owned_teas/:id` is called.
  0. `removeOwnership` is set as the callback.

### API Response Actions

* `receiveOwnedTeas`
  0. invoked from an API callback.
  0. `OwnedTea` store updates `_teas` and emits change.

* `receiveSingleOwnership`
  0. invoked from an API callback.
  0. `OwnedTea` store updates `_teas[id]` and emits change.

* `removeOwnership`
  0. invoked from an API callback.
  0. `OwnedTea` store removes `_teas[id]` and emits change.

### Store Listeners

* `OwnedTeasIndex` listens to the `OwnedTeas` store


## SearchSuggestion Cycles

### API Request Actions

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onInput`
  0. `GET /api/teas` (or `GET /api/tea-regions` or `GET /api/tea-types`) is called with `query` param.
  0. `receiveSearchSuggestions` is set as the callback.

### API Response Actions

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

### API-less Actions

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty or `onBlur`
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestionIndex` component listens to `SearchSuggestion` store.

## Tea-Regions Cycles

* `fetchAllRegions`
  0. invoked from `RegionsIndex` on willMount
  0. `GET /api/tea-regions` is called.
  0. `receiveAllRegions` is set as the callback.

### API Request Actions

* `receiveAllRegions`
  0. invoked from an API callback.
  0. `TeaRegions` store updates `_regions` and emits change.

### API Response Actions

### Store Listeners

* `RegionsIndex` listens to the `TeaRegions` store


## Tea-Types Cycles

### API Request Actions

* `fetchAllTeaTypes`
  0. invoked from `TeaTypesIndex` on willMount
  0. `GET /api/tea-types` is called.
  0. `receiveAllTeaTypes` is set as the callback.

### API Response Actions

* `receiveAllTeaTypes`
  0. invoked from an API callback.
  0. `TeaTypes` store updates `_types` and emits change.

### Store Listeners
  * `TeaTypesIndex` listens to the `TeaTypes` store
