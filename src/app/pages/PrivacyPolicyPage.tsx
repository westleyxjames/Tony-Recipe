export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: March 6, 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            NextEra Fashion ("we," "our," or "us") respects your privacy and is committed to protecting 
            your personal data. This privacy policy explains how we collect, use, and safeguard your information 
            when you visit our website or make a purchase.
          </p>

          <h3>Information We Collect</h3>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number</li>
            <li><strong>Payment Information:</strong> Credit card details (processed securely through our payment providers)</li>
            <li><strong>Order Information:</strong> Purchase history, product preferences</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, cookies</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Send promotional emails (with your consent)</li>
            <li>Improve our website and customer service</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information. All payment 
            transactions are encrypted using SSL technology. However, no method of transmission over the 
            internet is 100% secure.
          </p>

          <h3>Cookies</h3>
          <p>
            We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. 
            You can control cookie preferences through your browser settings.
          </p>

          <h3>Third-Party Services</h3>
          <p>
            We may share your information with trusted third-party service providers who assist us in operating 
            our website, conducting business, or serving you. These parties are obligated to keep your information 
            confidential.
          </p>

          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to data processing</li>
          </ul>

          <h3>Contact Us</h3>
          <p>
            If you have questions about this privacy policy, please contact us at privacy@nexterafashion.com 
            or call (800) 421-8845.
          </p>
        </div>
      </div>
    </div>
  );
}
