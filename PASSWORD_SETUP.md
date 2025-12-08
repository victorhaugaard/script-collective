# Password-Protected Projects Page

The `/projects` page is password-protected to control access to your portfolio.

## Default Password

Current password: **`scriptcollective2024`**

## How to Change the Password

1. Open `app/projects/page.tsx`
2. Find line 26:
   ```typescript
   const ACCESS_PASSWORD = 'scriptcollective2024'
   ```
3. Change to your desired password
4. Commit and push to redeploy

## How It Works

- **Password Entry**: Users must enter a password to access `/projects`
- **Session Storage**: Once authenticated, users stay logged in during their browser session
- **Logout Button**: Users can logout, which clears their authentication
- **No Server Required**: Uses client-side authentication (perfect for static hosting)

## Security Note

This is a **simple password protection** system suitable for:
- Limiting access to a portfolio
- Sharing with trusted clients
- Basic project showcase protection

**Not suitable for:**
- Highly sensitive data
- Production apps requiring real authentication
- Multi-user systems

For production apps, consider using proper authentication services like:
- **NextAuth.js** - Full-featured auth for Next.js
- **Clerk** - Modern auth platform
- **Auth0** - Enterprise auth solution

## Accessing the Projects Page

Users can access it by:
1. Clicking "View Our Projects" button on homepage
2. Direct link: `https://scriptcollective.com/projects`
3. Share the password with approved users

## What's On the Projects Page

Currently showcasing:
- **Rail Seekers** - Live preview from railseekers.com
- Placeholder for future projects

Add more projects by editing `app/projects/page.tsx` around line 105.
