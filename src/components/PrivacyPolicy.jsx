import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto py-8 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="mb-6">
                At Richion Store, we are committed to protecting your privacy and ensuring that your personal information is kept secure. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard your information.
            </p>

            <h2 className="text-xl font-semibold mb-2">1. INFORMATION WE COLLECT</h2>
            <p className="mb-4">
                When you visit our website or make a purchase, we may collect personal information such as your name, email address, shipping address, billing address, and payment information. We may also collect information about your browsing behavior and device information such as your IP address, browser type, and operating system.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. HOW WE USE AND SHARE INFORMATION</h2>
            <p className="mb-4">
                We use your personal information to process your orders, communicate with you about your order status, and provide customer support. We may also use your information to improve our website, personalize your experience, and send you promotional emails about our products and services.
            </p>

            <h2 className="text-xl font-semibold mb-2">3. HOW WE PROTECT INFORMATION</h2>
            <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, processing payments, or delivering products to you.
            </p>

            <h2 className="text-xl font-semibold mb-2">4. Security</h2>
            <p className="mb-4">
                We take the security of your personal information seriously and have implemented measures to protect your information from unauthorized access, use, or disclosure. We use industry-standard encryption technologies to safeguard your information during transmission and storage.
            </p>

            <h2 className="text-xl font-semibold mb-2">5. CHANGES TO OUR PRIVACY POLICY</h2>
            <p className="mb-4">
                We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website.
            </p>

            <h2 className="text-xl font-semibold mb-2">6. CONTACT US</h2>
            <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:support@richionstore.com" className="text-blue-500 underline">support@richionstore.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
