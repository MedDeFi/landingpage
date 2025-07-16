export function waitlistEmailTemplate({
  logoUrl,
  websiteUrl,
}: {
  logoUrl: string;
  websiteUrl: string;
}) {

  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
      <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="padding: 20px; text-align: center; background-color: #4F46E5;">
            <img src="${logoUrl}" alt="MedDefi Logo" style="max-width: 100%; height: auto;" />
        </div>

        <!-- Body -->
        <div style="padding: 30px;">
          <h2 style="color: #4F46E5;">Thanks for joining the waitlist!</h2>
          <p style="font-size: 16px; color: #333;">We're excited to have you on board. You'll be among the first to know when early access becomes available.</p>
          <p style="font-size: 16px; color: #333;">In the meantime, feel free to check out our website or follow us on social media.</p>
          <a href="${websiteUrl}" style="display:inline-block;margin-top:20px;background:#4F46E5;color:white;padding:12px 20px;text-decoration:none;border-radius:6px;font-weight:bold;">Visit our website</a>
        </div>

        <!-- Footer -->
        <div style="padding: 20px; text-align: center; font-size: 12px; color: #888;">
          &copy; ${new Date().getFullYear()} MedDefi. All rights reserved.
        </div>
      </div>
    </div>
  `;
}