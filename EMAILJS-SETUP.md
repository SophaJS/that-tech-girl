# EmailJS Setup Guide

## 1. Install EmailJS Package

```bash
pnpm install @emailjs/browser
```

## 2. Set Up EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create a new email template

## 3. Create Email Template

In the EmailJS template editor, use these variables:

- `{{clientName}}` - Client/Organization name
- `{{targetUrl}}` - Target website URL
- `{{contract}}` - Selected operation type
- `{{urgency}}` - Priority level
- `{{brief}}` - Mission brief text
- `{{timestamp}}` - Submission timestamp

**Use the HTML templates provided:**
- `email-template-notification.html` - For your notifications
- `email-template-confirmation.html` - For client auto-reply (optional)

## 4. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your EmailJS credentials in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

**Where to find these:**
- **Service ID**: EmailJS Dashboard → Email Services → Copy service ID
- **Template ID**: EmailJS Dashboard → Email Templates → Copy template ID
- **Public Key**: EmailJS Dashboard → Account → API Keys → Copy public key

## 5. Test Your Form

1. Run your dev server:
   ```bash
   pnpm dev
   ```

2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the notification

## Optional: Auto-Reply Setup

To send a confirmation email to clients:

1. Create a second template in EmailJS using `email-template-confirmation.html`
2. Add another `emailjs.send()` call in the `handleSubmit` function
3. Use the client's email field (you'll need to add an email input to the form)

## Troubleshooting

- **"Failed to send email"**: Check your environment variables are correct
- **Template variables not showing**: Make sure variable names match exactly (case-sensitive)
- **CORS errors**: EmailJS should handle this, but check your EmailJS dashboard settings
