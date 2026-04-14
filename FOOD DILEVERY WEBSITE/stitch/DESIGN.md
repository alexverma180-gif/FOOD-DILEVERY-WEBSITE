# Design System Document: The Culinary Motion

This design system is a bespoke framework crafted for a premium, high-energy food delivery experience. We are moving away from the "industrial" look of standard delivery apps toward a "High-End Editorial" aesthetic. This system treats food as art and the interface as a curated gallery—playful yet authoritative, vibrant yet sophisticated.

---

## 1. Creative North Star: "The Kinetic Gourmet"
The goal is to capture the momentum of a bustling kitchen and the warmth of a dinner invitation. We break the rigid, "boxed-in" layout of traditional apps by using **intentional asymmetry**, **overlapping imagery**, and **tonal layering**. This is not a flat interface; it is a physical space where elements float, stack, and breathe.

---

## 2. Color Theory & Surface Logic
Our palette utilizes high-contrast "Lead" for grounded authority and "Gold Finger" for appetite-stimulating energy.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Structural boundaries must be defined solely through background color shifts.
*   **Surface-to-Surface Transition:** Place a `surface-container-low` section against a `surface` background to define a zone.
*   **The Signature Glow:** Instead of lines, use the `tertiary-container` (#FCF1CC) as a subtle backdrop to highlight "Deal" cards or "New" restaurant tags.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested physical layers. 
*   **Base:** `surface` (#F8F6F0).
*   **Sectioning:** `surface-container` (#EAE8E2) for grouping related categories.
*   **Elevation:** `surface-container-lowest` (#FFFFFF) for the most interactive elements (e.g., the active order card).

### The "Glass & Gradient" Rule
To elevate the "Gold Finger" (#735800/primary) from a flat utility color to a premium brand asset:
*   **Signature Gradients:** Use a linear gradient from `primary` (#735800) to `primary-container` (#FBC51F) at a 135° angle for Hero CTAs.
*   **Frosting:** Use semi-transparent `surface-container-lowest` with a `backdrop-filter: blur(12px)` for floating navigation bars or "Quick Add" modals to allow food photography to bleed through.

---

## 3. Typography: Editorial Impact
We utilize a sophisticated pairing that balances the high-energy "Roboto Condensed" feel with a more modern, spacious rhythm.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Hooks." Use large, bold weights for restaurant names and hero offers. The wide stance of Jakarta creates an expensive, editorial feel.
*   **Body & Titles (Be Vietnam Pro):** This is our "Utility." It provides exceptional readability at small sizes for ingredient lists and delivery times, balancing the condensed energy of the brand with breathability.

| Level | Token | Font | Size | Weight | Character Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Plus Jakarta Sans | 3.5rem | 700 | -0.02em |
| **Headline** | `headline-md` | Plus Jakarta Sans | 1.75rem | 600 | -0.01em |
| **Title** | `title-md` | Be Vietnam Pro | 1.125rem | 500 | 0 |
| **Body** | `body-lg` | Be Vietnam Pro | 1rem | 400 | 0.01em |
| **Label** | `label-md` | Be Vietnam Pro | 0.75rem | 600 | 0.05em (All Caps) |

---

## 4. Elevation & Depth: Tonal Layering
We do not use generic shadows. We use light and color to create a sense of height.

*   **The Layering Principle:** Achieve depth by "stacking." A `surface-container-lowest` card sitting on a `surface-container-low` section creates a natural lift.
*   **Ambient Shadows:** For "floating" elements like a Floating Action Button (FAB) or a checkout bar, use:
    *   `box-shadow: 0 12px 32px -4px rgba(46, 47, 43, 0.08);`
    *   The shadow is never black; it is a tinted version of `on-surface` (#2E2F2B) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components
All components follow the **Roundedness Scale**, with a default of `1rem` (16px) to maintain a friendly, approachable character.

### Buttons: The Kinetic Interaction
*   **Primary:** A gradient of `primary` to `primary-container`. `border-radius: full`. On hover, use a subtle `primary-dim` glow.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.

### Cards: The "Food First" Window
*   **Rule:** Forbid divider lines within cards.
*   **Structure:** Use `2rem` (xl) rounded corners for restaurant hero images. Overlap the "Rating" chip onto the image by -12px to create a 3D effect.

### Selection & Input
*   **Chips:** Use `tertiary-container` (#FCF1CC) for unselected states and `primary` (#735800) for selected states.
*   **Input Fields:** Use `surface-container-low` as the background. On focus, the field should not gain a border, but rather shift to `surface-container-lowest` with a subtle `primary` ambient shadow.

### Additional Signature Components
*   **The "Vibe" Filter:** A horizontal scrolling list of high-contrast icons (Lead #212121) representing food moods (e.g., "Late Night," "Healthy," "Cheat Day") using `lg` (2rem) rounded containers.

---

## 6. Do’s and Don'ts

### Do:
*   **Use Asymmetry:** Place a large dish image off-center, bleeding off the screen to suggest "abundance."
*   **Embrace Negative Space:** Let the `surface` color (#F8F6F0) act as a palate cleanser between high-energy sections.
*   **Tint Your Greys:** Ensure all neutral containers have a hint of the "Hint Yellow" (#FCF1CC) to keep the UI feeling warm and edible.

### Don't:
*   **Don't use 1px Dividers:** Use vertical white space (32px or 48px) to separate restaurant categories instead.
*   **Don't use Pure Black:** Use `on-background` (#2E2F2B) for text to maintain a premium, soft-contrast feel.
*   **Don't use Sharp Corners:** Even the smallest "Add" button must have at least a `sm` (0.5rem) radius to stay within the playful brand identity.