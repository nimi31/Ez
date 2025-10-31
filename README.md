# EZ Labs Front-End Assignment

A responsive single-page React application recreating the provided Figma UI for the “Join the Story” contact section.

## Features
- Pixel-accurate split layout (text + contact form)
- Responsive design for 480p → 1440p
- Validation for empty fields and email format
- API integration (POST / api/contact-us)
- Shows “Form Submitted” after success
- Includes Postman dump verifying API structure

⚠️ Note: API sometimes returns **503 Service Temporarily Unavailable** or fails due to CORS policy; verified through Postman.

## Run Locally
```bash
npm install
npm start
