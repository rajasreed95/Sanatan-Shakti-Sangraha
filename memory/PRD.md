# सनातन शक्ति संग्रह (Sanatan Shakti Sangrah) - Foundation Website

## Original Problem Statement
Build a website for a charitable foundation named "सनातन शक्ति संग्रह (Sanatan Shakti Sangrah)" with the tagline "तमसो मा ज्योतिर्गमय (Tamaso mā jyotirgamaya)".

## Product Requirements
- **Foundation Name:** सनातन शक्ति संग्रह (Sanatan Shakti Sangrah)
- **Tagline:** तमसो मा ज्योतिर्गमय (From darkness, lead me to light)
- **Color Scheme:** Soft golden/saffron with whites

## Core Features (Completed)
### Frontend
- [x] Hero section with foundation branding and logo
- [x] About Us section with Gurukul Parampara content
- [x] Mission section with user-provided media
- [x] Vision section with user-provided media
- [x] Founders' Message section
- [x] How to Help / Get Involved section
- [x] Footer with Instagram profile link and contact info

### Interactive Features
- [x] Volunteer Form Dialog (Name, email, phone, volunteer type, message)
- [x] Donate Dialog with two options:
  - Donate Supplies (shows shipping address)
  - Donate Money (shows bank account details)
- [x] Admin Dashboard at `/admin` with:
  - Login protection
  - Volunteer submissions table
  - Search functionality
  - CSV export

### Backend
- [x] POST /api/volunteer - Submit volunteer form
- [x] GET /api/volunteer - Retrieve all submissions
- [x] GET /api/proxy-video - Video proxy for CORS handling

## Tech Stack
- **Frontend:** React, TailwindCSS, Shadcn/UI
- **Backend:** FastAPI (Python)
- **Database:** MongoDB

## What's Been Implemented (Latest - Jan 13, 2026)
- [x] Removed "Made with Emergent" sticky badge from homepage
- [x] Removed default credentials hint from admin login page
- [x] Updated page title to "सनातन शक्ति संग्रह | Sanatan Shakti Sangrah"

## Admin Credentials
- **Username:** admin
- **Password:** sanatan@2026
- **Note:** Credentials are stored in `/app/frontend/src/components/AdminLogin.jsx`

## Future/Backlog (P2)
- [ ] Move admin credentials to backend environment variables (security improvement)
- [ ] Add pagination for volunteer submissions in admin dashboard
- [ ] Deploy the application

## Key Files
- `/app/frontend/public/index.html` - HTML template
- `/app/frontend/src/components/AdminLogin.jsx` - Admin login component
- `/app/frontend/src/mock.js` - Content and configuration
- `/app/backend/server.py` - FastAPI backend
