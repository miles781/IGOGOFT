import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request) {
  try {
    const { email, audience } = await request.json();
    
    if (!email || !audience) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email and audience are required' 
      }, { status: 400 });
    }

    // Mailchimp Integration
    if (process.env.MAILCHIMP_API_KEY) {
      try {
        const mailchimp = require('@mailchimp/mailchimp_marketing');
        
        mailchimp.setConfig({
          apiKey: process.env.MAILCHIMP_API_KEY,
          server: process.env.MAILCHIMP_SERVER_PREFIX,
        });

        console.log('📧 Adding to Mailchimp:', email, 'Audience:', audience);
        
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
          email_address: email,
          status: 'subscribed',
          tags: [audience === 'web2' ? 'Trading' : 'Web3'],
          merge_fields: {
            AUDIENCE: audience,
            SOURCE: 'Portfolio Website',
            SIGNUP_DATE: new Date().toISOString().split('T')[0]
          }
        });
        
        console.log('✅ Successfully added to Mailchimp');
      } catch (mailchimpError) {
        console.error('❌ Mailchimp error:', mailchimpError.response?.body || mailchimpError.message);
        // Continue with email sending even if Mailchimp fails
      }
    }

    // Send email with attachment
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          }
        });

        const fileName = audience === 'web2' ? '2026-TRADER-RESET-EBOOK.pptx' : 'web3-research-toolkit.pdf';
        const filePath = path.join(process.cwd(), 'public', 'resources', fileName);

        console.log('📧 Attempting to send email to:', email);
        console.log('📁 File path:', filePath);
        console.log('🔑 Gmail user:', process.env.GMAIL_USER);
        
        // Check if file exists
        const fs = require('fs');
        if (!fs.existsSync(filePath)) {
          console.log('❌ File does not exist:', filePath);
          throw new Error(`File not found: ${fileName}`);
        }
        
        console.log('✅ File exists, sending email...');

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: email,
          subject: 'Welcome to Angelo Trading Academy - Your Free Resource',
          html: `
            <h2>Welcome to Angelo Trading Academy!</h2>
            <p>Thank you for subscribing. Your ${audience === 'web2' ? '2026 Trader Reset eBook' : 'Web3 Research Toolkit'} is attached.</p>
            <p>Best regards,<br>Victor Igogo</p>
          `,
          attachments: [{
            filename: fileName,
            path: filePath
          }]
        });
        
        console.log('✅ Email sent successfully to:', email);
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message);
        console.error('Full error:', emailError);
      }
    } else {
      console.log('❌ Gmail credentials missing');
      console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Missing');
      console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? 'Set' : 'Missing');
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Welcome email sent! Check your inbox.' 
    });
    
  } catch (error) {
    console.error('Newsletter signup error:', error);
    console.error('Error details:', error.response?.body || error.message);
    
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json({ 
        success: true, 
        message: 'You\'re already subscribed! Check your email for resources.' 
      });
    }
    
    // Return success to ensure user experience isn't broken
    return NextResponse.json({ 
      success: true, 
      message: 'Welcome! Check your email for the resource.' 
    });
  }
}