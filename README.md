# Script Collective

A luxurious, minimalistic landing page for Script Collective - Building Future Software.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **Vercel** - Deployment platform

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This project is configured for Vercel deployment. See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. Push to GitHub
2. Import to Vercel
3. Deploy!

## Features

- Luxurious, minimalistic dark mode design
- Inspired by Framer, Linear, and Apple
- Responsive design (mobile & desktop)
- Custom minimalistic logo
- Contact modal with CEO information
- Access request form with Formspree integration
- Smooth animations and modern UI
- Black, white, and gold/beige color palette

## Form Setup

To receive access requests, set up Formspree:

1. Sign up at https://formspree.io
2. Create a new form and get your Form ID
3. Update `app/page.tsx` line 26 with your Form ID
4. Push changes

See [FORM_SETUP.md](FORM_SETUP.md) for more options.

## Customization

- Colors: Edit `app/page.module.css`
- Content: Edit `app/page.tsx`
- Global styles: Edit `app/globals.css`

## Author

CEO - Victor Haugaard  
victortomashaugaard@gmail.com

## License

© 2024 Script Collective. All rights reserved.
