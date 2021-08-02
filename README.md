# This is UI demo for Rizek

- The entire code was written in [StackBlitz ⚡️](https://stackblitz.com/edit/rizek-demo) and can be checked there as well; The purpose for doing so was that it automatically hosts the code.

## How to start local?
- Clone this Github repository
- One the repo is cloned, run `npm install`
- Run `npm run start`
- After that the application should be up and running on port `3000` or any other if `3000` is in use.
- The current service endpoint uses [Glitch](https://glitch.com/), which may go down (free tier) anytime, in such case, please host the [Service](https://github.com/jaywalker21/rizek-services-demo) following it's `README` and update path for same in `src/config/urls.js`.

## Future Scope

- Feature: Show multi-select dropdown to choose different transport types. (Service support also needed)
- Add more unit tests, especially for the components.
- Make UI more responsive (for higher res) and update the current color palette.
- Write more generic code for `apiCall` helper and some other `utils`.
- Add more comments in the code for more clarity.

