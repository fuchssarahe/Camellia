# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

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
  0. `POST /api/users`
  0. `receiveCurrentUser` session response is set as the callback

### Store Listeners

* `Header` component listens to `User` store

## Review Cycles

### Reviews API Request Actions

* fetchReviews
  0. invoked from `ReviewsIndex` on willMount with query params (date specific, tea specific, and followed users specific)
  0. `GET /api/reviews` is called, passing params.
  0. `receiveReviews` is set as the callback.

### Reviews API Response Actions

* receiveReviews
  0. invoked from an API callback
  0. `Reviews` store updates `_reviews` and emits change

### Store Listeners

* `ReviewsIndex` component listens to the `Reviews` store

## Tea Cycles

### Teas API Request Actions

* `fetchTeas`
  0. invoked from `TeasIndex` on didMount with query params
  0. `GET /api/teas` is called.
  0. `receiveTeas` is set as the callback.

<!-- * `createTea`
  0. invoked from new tea button `onClick`
  0. `POST /api/teas` is called.
  0. `receiveSingleTea` is set as the callback. -->

* `fetchSingleTea`
  0. invoked from `TeaDetail` `didMount`/`willReceiveProps`
  0. `GET /api/teas/:id` is called.
  0. `receiveSingleTea` is set as the callback.

* `updateTea`
  0. invoked from `TeaForm` `onSubmit`
  0. `PATCH /api/teas/:id` is called.
  0. `receiveSingleTea` is set as the callback.

* `destroyTea`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/teas/:id` is called.
  0. `removeTea` is set as the callback.

### Teas API Response Actions

* `receiveTeas`
  0. invoked from an API callback.
  0. `Tea` store updates `_teas` and emits change.

* `receiveSingleTea`
  0. invoked from an API callback.
  0. `Tea` store updates `_teas[id]` and emits change.

* `removeTea`
  0. invoked from an API callback.
  0. `Tea` store removes `_teas[id]` and emits change.

### Store Listeners

* `TeasIndex` component listens to `Tea` store.
* `TeaDetail` component listens to `Tea` store.


## Review Cycles

### Reviews API Request Actions

* `fetchReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveSingleReview` is set as the callback.

* `updateReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `destroyNotebook`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/notebooks/:id` is called.
  0. `removeNotebook` is set as the callback.

### Reviews API Response Actions

* `receiveReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `NotebooksIndex` component listens to `Notebook` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
