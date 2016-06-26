## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Header
    * SiteNav
    * TeaSearch
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
    * **TeaDetail**
      * TeaOverview
        * TeaPreferencesForUser
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
    * TeasIndex
      * TeaIndexItem
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
