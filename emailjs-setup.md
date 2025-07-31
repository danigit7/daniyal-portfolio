# EmailJS Setup Guide

To make your contact form work properly, you need to set up EmailJS. Here's how:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Verify your email address

## 2. Set up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Add a new service (Gmail, Outlook, etc.)
3. Connect your email account (daniyalasim922@gmail.com)

## 3. Create Email Template
1. Go to "Email Templates"
2. Create a new template with the following variables:
   - `user_name` - Sender's name
   - `user_email` - Sender's email
   - `subject` - Email subject
   - `message` - Email message

## 4. Update Configuration
Replace the following values in your ContactMe.tsx:

```javascript
// Replace these with your actual EmailJS credentials
emailjs.sendForm(
  "YOUR_SERVICE_ID",        // Your EmailJS service ID
  "YOUR_TEMPLATE_ID",       // Your EmailJS template ID  
  form.current,
  "YOUR_PUBLIC_KEY",        // Your EmailJS public key
)
```

## 5. Test the Form
1. Fill out the contact form
2. Submit and check if you receive the email at daniyalasim922@gmail.com

## Current Configuration Issues
Your current setup uses placeholder values that need to be replaced with your actual EmailJS credentials:
- Service ID: "portfolio" 
- Template ID: "template_0xdiby9"
- Public Key: "LJ2tmRAE4H8BfsKr4"

These need to be updated with your real EmailJS credentials for the form to work. 