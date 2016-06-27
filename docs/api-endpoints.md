# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Teas

- `GET /api/teas`
  - Teas index/search
  - accepts `query` query param to list teas by attribute
- `POST /api/teas`
- `GET /api/teas/:id`

- `POST /api/teas/:id/reviews`

- `GET /api/tea-types`
- `GET /api/tea-regions`

### Reviews

- `GET /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Owned Teas

- `GET /api/owned_teas/`
  - this request calls on the teas controller, but includes ownership information
- `POST /api/owned_teas/`
- `PATCH /api/owned_teas/:id`
- `DELETE /api/owned_teas/:id/`
  - this request will delete an ownership from the db, returning the tea which corresponded to the ownership

### User Follows

- `GET /api/follows/`
  - should return recent reviews from users which current user is following
- `POST /api/follows/`
- `DELETE /api/follow/:following_id/`
