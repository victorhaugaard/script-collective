# Form Setup Instructions

To receive access requests from users, you need to set up a form backend. Here are your options:

## Option 1: Formspree (Recommended - Easiest)

**Free tier: 50 submissions/month**

1. Go to https://formspree.io
2. Sign up with your email
3. Click "New Form"
4. Copy your form ID (looks like `xyzabc12`)
5. Update `app/page.tsx` line 26:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   Replace `YOUR_FORM_ID` with your actual form ID

**That's it!** You'll receive submissions via email and can view them in Formspree's dashboard.

## Option 2: Netlify Forms (Requires HTML Form)

**Free tier: 100 submissions/month**

1. Create a file `public/form.html`:
   ```html
   <form name="access-requests" netlify netlify-honeypot="bot-field" hidden>
     <input type="text" name="name" />
     <input type="email" name="email" />
     <textarea name="message"></textarea>
   </form>
   ```

2. Update `app/page.tsx` to submit to Netlify:
   ```typescript
   const response = await fetch('/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: new URLSearchParams({
       'form-name': 'access-requests',
       name: data.name as string,
       email: data.email as string,
       message: data.message as string,
     }).toString()
   })
   ```

3. View submissions in Netlify Dashboard → Forms

## Option 3: Send to Your Email via EmailJS

**Free tier: 200 emails/month**

1. Sign up at https://emailjs.com
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Install EmailJS: `npm install @emailjs/browser`
6. Update the form submission code

## Recommended: Formspree

For simplicity, I recommend **Formspree**. It takes 2 minutes to set up and you'll get:
- Email notifications for each submission
- Dashboard to view all submissions
- Spam protection
- Export to CSV

Just sign up, get your form ID, and update line 26 in `app/page.tsx`.
