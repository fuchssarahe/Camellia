## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * Header
    * SiteNav
    * SearchBar
      * SearchBarSuggestionIndex
        * SearchSuggestionItem
  * **Splash**
    * SplashBanner
    * SiteDescription
  * **NewUser**
    * UserForm
    * Splash
  * **Login**
    * LoginForm
    * Splash
  * **TeasIndex**
    * TeaIndexItem
    * TeaForm
    * **TeaDetail**
      * TeaOverview
        * TeaPreferencesForUser
          * OwnershipForm
        * ReviewForm
      * TeaIdentifiers
      * TeaDetailedInfo
      * TeaSteepInfo
        * TeaSteepDetail
      * ReviewsIndex
        * ReviewIndexItem
          * ReviewHeader
      * ReviewForm
      * **TeaForm**
  * **Dashboard**
    * UserOverview
      * User Information
    * TeasIndex
      * TeaIndexItem
    * OwnedTeasIndex
      * OwnedTeaIndexItem
    * ReviewsIndex
      * ReviewIndexItem
        * ReviewHeader
  * **RegionsIndex**
    * RegionIndexItem
  * **TeaTypeIndex**
    * TeaTypeIndexItem
  * **BrowseOptions**
    * BrowseBanner
    * ReviewsIndex
      * ReviewIndexItem
        * ReviewHeader
    * RegionsIndex
      * RegionIndexItem
    * TeaTypeIndex
      * TeaTypeIndexItem
  * **OwnershipIndex**
    * OwnedTeaIndexItem

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Splash` **path:** index
  * **component:** `NewUser` **path:** `new-user`
  * **component:** `Login` **path:** `login`
  * **component:** `Dashboard` **path:** `dashboard`
  * **component:** `TeasIndex` **path:** `teas`
    * **component:** `TeaDetail` **path:** `teas/:teaId`
      * **component:** `TeaForm` **path:** `edit`
  * **component:** `RegionsIndex` **path:** `regions`
  * **component:** `TeaTypeIndex` **path:** `tea-types`
  * **component:** `BrowseOptions` **path:** `explore`
  * **component:** `OwnershipIndex` **path:** `my-teas`
