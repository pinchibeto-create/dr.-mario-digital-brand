# Plan - Netlify Compatibility and Repository Verification

Verify that the site is fully compatible with Netlify and ensure all assets and configurations are correctly tracked.

## User Review Required

> [!IMPORTANT]
> This plan focuses on ensuring the project is ready for Netlify deployment.

- No critical questions at this stage as previous interactions confirmed the Netlify setup.

## Technical Details

### Verification Steps
- Check `netlify.toml` for correct build and publish settings.
- Check `vite.config.ts` for Netlify plugin and TanStack Start configuration.
- Verify that all images in `public/images/` are properly referenced in the code via `src/lib/site.ts`.
- Ensure no absolute URLs or CDN-dependent paths remain that would conflict with local/Netlify hosting.
- Confirm that `.gitignore` does not exclude required assets.

### Implementation Details
- If any asset references are still pointing to old CDN paths, they will be updated to point to the local `/images/...` paths.
- Ensure the build command in `package.json` and `netlify.toml` matches the TanStack Start requirements for Netlify.

### Validation
- Run `npm run build` locally to simulate the Netlify build process and ensure `dist/client` contains all necessary assets.
- Verify internal links and image rendering in the build output if possible.
