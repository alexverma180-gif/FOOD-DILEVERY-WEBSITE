# Goal Description

Convert the imported Google Stitch UI files into a fully deployable Vite + React web application. Configure environment variables, production build scripts, client-side routing setups, and automated deployment via GitHub actions.

## Proposed Changes

### Vite + React Initialization
- Run Vite template in the workspace root to setup React.
- Install `tailwindcss`, `postcss`, `autoprefixer`, and `react-router-dom`.
- Configure `tailwind.config.js` with the custom colors, fonts, and animations from [code.html](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/code.html).

### Component Breakdown
Break [stitch/code.html](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/code.html) into modular React components under `src/components/`:
- `Navbar.jsx`
- `Hero.jsx`
- `FeaturedCategories.jsx`
- `TrackingSection.jsx`
- `WhyFoodie.jsx`
- `Testimonial.jsx`
- `AppCTA.jsx`
- `Footer.jsx`
- `Checkout.jsx` (New dummy route for 'Order Now' and 'Membership' buttons)

Create `src/pages/Home.jsx` to assemble the landing page.
Set up routing in `src/App.jsx`.

### Asset Management
- Move images and other assets ([screen.png](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/screen.png)? Oh wait, the images in [code.html](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/code.html) are from external URLs, but I will review if local ones are needed).
- The prompt mentions: "Ensure all assets (images of the pizza, burger, and tracking map) are correctly linked in the components." I will use the external URLs found in the [code.html](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/code.html) or download them into `src/assets` if required. Wait, the prompt says "assets ... are correctly linked". I'll use the images from the Stitch output.

### Environment Setup
- Create `.env.example` with placeholders for `VITE_BACKEND_URL`, `VITE_MAP_API_KEY`, and `VITE_PAYMENT_GATEWAY_KEY`.
- Modify the application (e.g. `TrackingSection.jsx` and `Checkout.jsx`) to consume these environment variables using `import.meta.env`.

### Build & Deployment Configuration
- Update `package.json` build scripts for optimization if needed (Vite default is already optimized to `dist`).
- Create `vercel.json` and/or `netlify.toml` for client-side SPA routing fallback to index.html.
- Create `.github/workflows/deploy.yml` for GitHub Actions.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the application builds successfully to the `dist` folder without errors.

### Manual Verification
- Start the app with `npm run dev` and manually verify that:
  - The UI matches the original [code.html](file:///c:/Users/alexv/OneDrive/Desktop/FOOD%20DILEVERY%20WEBSITE/stitch/code.html).
  - 'Order Now' and 'Membership' buttons route to the checkout page.
  - The environment variables are correctly loaded and logged/displayed where expected.
