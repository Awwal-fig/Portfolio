# Interactive Project Focus Mode

## Goal

Turn each portfolio project into a memorable, immersive interaction without adding another unrelated global animation. Visitors should be able to click or tap anywhere on a project row and enter a focused project view that makes the imagery and story feel premium while preserving the portfolio’s minimal visual language.

## Current State

- React 19 + Vite + TypeScript.
- Styling is implemented in `src/index.css`; no animation or component library is installed.
- Project content is stored in the `projects` array in `src/App.tsx`.
- Each project already has:
  - title and year
  - description and optional intro
  - multiple local images
  - optional product URL
  - optional case-study URL
  - desktop image-width metadata
- Project titles and case-study text currently open external links directly.
- Galleries already support horizontal scrolling.
- The site already includes:
  - light and dark themes
  - a custom animated desktop cursor
  - reduced-motion handling
  - responsive mobile/desktop layouts
  - a fixed navigation menu
- No backend, new package, or new asset is required.

## Product Decisions

### Entry behavior

- The entire project row is the focus-view trigger.
- Project titles will no longer navigate externally from the portfolio list.
- Existing product and case-study links will move into the focused project view.
- The row will retain clear hover/focus feedback so visitors understand it is interactive.
- Keyboard users can open a focused project with `Enter` or `Space`.

### Focus-view behavior

- Open a theme-aware overlay above the portfolio.
- Desktop:
  - centered, spacious presentation with a maximum content width
  - project details on one side and a large image stage on the other where space permits
  - subtle perspective/tilt response on the active image for fine-pointer devices
- Mobile and narrow/folded devices:
  - full-screen presentation
  - safe-area-aware top and bottom spacing
  - details stack above the media stage
  - native horizontal swipe navigation between project images
- The focus view contains:
  - project title and year
  - intro when present
  - full description
  - large active image
  - horizontally scrollable thumbnail/filmstrip navigation
  - image position indicator such as `1 / 4`
  - `Visit project` when `href` exists
  - `Read case study` when `caseStudyHref` exists
  - close control
  - previous/next project controls
- Projects without a product or case-study URL simply omit the unavailable action.

### Animation character

- Keep motion restrained and tactile rather than flashy.
- Overlay entrance:
  - backdrop fades in
  - panel moves upward slightly and scales from approximately `0.98` to `1`
  - active image resolves from a soft blur/scale into focus
- Project-row hover on fine pointers:
  - row lifts slightly
  - images gain a small depth offset
  - an unobtrusive “View project” affordance appears
- Active image:
  - slight cursor-driven 3D tilt on desktop only
  - tilt resets smoothly when the pointer leaves
  - no 3D effect on touch devices
- Image changes:
  - short crossfade/slide between active images
  - no autoplay; visitors remain in control
- When `prefers-reduced-motion: reduce` is active:
  - remove tilt, scale, parallax, and slide motion
  - retain immediate state changes and simple opacity where appropriate

## Implementation Plan

### 1. Extend project data typing

In `src/App.tsx`:

- Add a stable project identifier/slug to `ProjectData`.
- Keep existing `href`, `caseStudyHref`, `images`, and copy unchanged.
- Use the slug for React keys and accessible IDs, not for URL routing.

### 2. Add focus-view state and data flow

In the top-level `App` component:

- Add `selectedProjectIndex: number | null`.
- Track the project row that opened the overlay so focus can return to it on close.
- Pass `onOpen(index, triggerElement)` to each `Project`.
- Render `ProjectFocusView` only when a project is selected.
- Provide handlers for:
  - close
  - previous project
  - next project
- Previous/next project navigation wraps from the last project to the first and vice versa.

### 3. Convert project rows into accessible triggers

Update `Project`:

- Remove direct external navigation from the project title.
- Remove the inline case-study action from the row because actions now live in the focus view.
- Make the row keyboard-focusable with button semantics.
- Handle:
  - click to open
  - `Enter` to open
  - `Space` to open while preventing page scroll
- Add an accessible label such as `View Barready project`.
- Preserve the visible title, year, description, and gallery content.
- Add a small visual “View project” affordance that appears on hover/focus without changing the 14px typography system.

### 4. Build `ProjectFocusView`

Create a local component in `src/App.tsx` unless the file becomes difficult to maintain; if separation is needed, create `src/components/ProjectFocusView.tsx`.

The component will:

- Receive the selected project and project index.
- Maintain its own `activeImageIndex`, reset to `0` when the selected project changes.
- Render as an accessible modal:
  - `role="dialog"`
  - `aria-modal="true"`
  - project-specific accessible title and description IDs
- Render a backdrop and focus panel.
- Render all action URLs with `target="_blank"` and `rel="noreferrer"`.
- Use the existing local `/assets/...` image paths.
- Use native image dimensions and `object-fit: contain` in the main stage to avoid cropping project work.
- Use `object-fit: cover` for compact filmstrip thumbnails.

### 5. Add image navigation

- Clicking a thumbnail sets the active image.
- The main image stage supports:
  - previous/next arrow controls
  - swipe through a native scroll-snap strip on touch devices
- Synchronize the active index after mobile scroll settles.
- Disable or hide image-navigation controls when a project has only one image.
- Provide meaningful alt text derived from the project title and image position, for example `RLKids project screen 1 of 2`.

### 6. Add modal interaction management

While open:

- Save the document’s previous overflow style.
- Lock background page scrolling.
- Close on:
  - close button
  - backdrop click
  - `Escape`
- Keep clicks inside the panel from closing it.
- Trap keyboard focus inside the focus view.
- On close:
  - restore page scrolling
  - restore focus to the project row that opened it
- Keep the existing fixed theme/menu controls visually below the modal by assigning the focus view a higher stacking layer than the cursor and controls.
- Keep the custom cursor visible and functional above interactive modal controls, or explicitly place the cursor layer above the modal while leaving it pointer-transparent.

### 7. Add fine-pointer 3D image tilt

- Attach pointer movement only to the active-image stage.
- Calculate normalized pointer position relative to the stage bounds.
- Update CSS custom properties for limited `rotateX`, `rotateY`, and highlight position.
- Clamp rotation to a subtle range of approximately 3–5 degrees.
- Reset properties on pointer leave.
- Activate only when:
  - `(pointer: fine)` matches
  - reduced motion is not requested
- Use `requestAnimationFrame` or direct CSS-variable updates without React state to avoid rerendering on every pointer move.

### 8. Add responsive and theme-aware styling

In `src/index.css`:

- Reuse existing theme variables:
  - `--background`
  - `--surface`
  - `--surface-hover`
  - `--text`
  - `--text-strong`
  - `--text-muted`
  - `--border`
  - `--shadow`
- Do not introduce an unrelated color palette.
- Keep body typography at Inter Regular, 14px/22.4px.
- Add styles for:
  - interactive project-row hover/focus state
  - focus-view backdrop
  - desktop focus panel
  - mobile full-screen layout
  - image stage and 3D layer
  - filmstrip
  - previous/next image controls
  - previous/next project controls
  - close control
  - product/case-study action links
- Respect the existing `700px` desktop breakpoint.
- Add safe-area padding with `env(safe-area-inset-*)` for the mobile full-screen view.
- Ensure the focus view works at widths down to `320px` and on narrow/folded devices.

## Accessibility and Edge Cases

- Do not rely on hover to reveal required information.
- All controls must have visible focus states and accessible labels.
- The entire project row must be operable with keyboard input.
- Focus must remain inside the open modal.
- Background content must not scroll while the modal is open.
- Long descriptions must scroll within the focus view without moving the page behind it.
- External actions are conditionally rendered to avoid empty or misleading controls.
- Main images use `object-fit: contain` so UI screenshots are never cropped.
- Image navigation works with mouse, keyboard controls, trackpad, and touch.
- Reduced-motion users receive the same content and functionality without 3D or large spatial transitions.
- Light and dark modes use the same structure and preserve adequate text/control contrast.

## Verification

### Automated

- Run `pnpm exec oxfmt src/App.tsx src/index.css` and any new component file.
- Run `pnpm build`.
- Confirm all project image paths still resolve to non-empty files in `public/assets`.
- Search for stale or duplicated project URLs after moving actions into the focus view.

### Manual interaction checks

- Desktop:
  - open every project from its full row
  - verify row hover/focus feedback
  - verify 3D tilt remains subtle and resets correctly
  - navigate all images
  - navigate previous/next projects
  - open each available product and case-study URL
  - close via button, backdrop, and `Escape`
- Keyboard:
  - tab to every project
  - open with `Enter` and `Space`
  - confirm focus trap
  - confirm focus restoration after close
- Mobile/narrow:
  - test at approximately 320px and 390px widths
  - verify full-screen safe-area spacing
  - swipe image galleries
  - verify no content is hidden behind the existing camera-safe controls
- Themes:
  - verify overlay, actions, shadows, and controls in light and dark modes
- Accessibility:
  - enable reduced motion and confirm tilt/spatial transitions are removed
  - confirm all modal and navigation controls have meaningful labels

## Out of Scope

- Adding a backend or CMS.
- Adding new project copy, images, or URLs.
- Autoplaying galleries.
- Video or audio effects.
- Deep-linking the modal state into the browser URL.
- Installing an animation library; the interaction will use React state, browser APIs, and CSS transitions.
