# Plan - Increase Icon Size by 50%

The user has requested to make the service icons 50% larger. Currently, the icons are sized at `h-20 w-20` for mobile and `h-28 w-28` for desktop. Increasing these by 50% would result in approximately `h-30 w-30` for mobile and `h-42 w-42` for desktop.

## User Review Required

> [!IMPORTANT]
> The current size of the icons is `80px` (mobile) and `112px` (desktop). A 50% increase will make them `120px` and `168px` respectively. This may significantly impact the layout of the grid cards. I will ensure they remain centered and fit correctly within their containers.

## Technical Details

- **File**: `src/components/site/Services.tsx`
- **Current Classes**: `h-20 w-20 md:h-28 md:w-28`
- **Target Classes**: `h-[120px] w-[120px] md:h-[168px] md:w-[168px]` (Using arbitrary values to exactly match the 50% increase requirement).

## Steps

1. Update the `img` class in `src/components/site/Services.tsx` to increase the dimensions.
2. Verify that the grid layout handles the larger icons gracefully without breaking vertical alignment.
3. Check the preview to confirm the visual balance is maintained.
