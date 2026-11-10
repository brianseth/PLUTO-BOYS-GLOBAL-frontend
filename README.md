# PLUTO BOYZ GLOBAL - Frontend

A music-themed web app frontend with user registration, login, and a protected dashboard. It talks to a separate Node/REST backend hosted on Render.

**Live demo:** [add your GitHub Pages link]

## Features
- Register and login forms with validation
- Token-based session (stored in the browser)
- Protected dashboard that redirects to login if you're signed out
- Responsive layout for phones and desktops

## Tech stack
- HTML, CSS, vanilla JavaScript (fetch API)
- Backend: [add language/framework] hosted on Render

## Project structure
```
index.html       Login page
register.html    Sign-up page
dashboard.html   Protected page
script.js        API calls, form handling, logout, route guard
style.css        Styling
```

## Run locally
1. Clone the repo:
   `git clone https://github.com/brianseth/PLUTO-BOYS-GLOBAL-frontend.git`
2. Open `index.html` in a browser, or use a local server such as VS Code Live Server.
3. The app uses the hosted API set in `BASE_URL` at the top of `script.js`.

## Notes
- The first request can take up to a minute if the Render server is asleep.
- The dashboard check on the frontend is only for user experience. The backend must verify the token on every protected request.

## Roadmap
- Load real tracks from the backend
- Better error messages
- Add a music player

## License
[Choose one, e.g. MIT]