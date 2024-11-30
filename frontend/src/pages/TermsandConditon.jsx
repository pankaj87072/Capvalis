import React from 'react';

const TermsandCondtion = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/60 rounded-lg p-8 border border-gray-700/50 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-4">
          Capvalis Privacy Policy
        </h1>
        
        <p className="text-gray-300 mb-6">
          This Privacy Policy outlines how Capvalis collects, uses, and protects your personal information.
        </p>
        
        <div className="space-y-6 text-gray-300 text-sm">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">1. Information Collection</h2>
            <p>We collect various types of information, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Personal Information</li>
              <li>Non-Personal Information</li>
              <li>Transactional Information</li>
              <li>Publicly available data</li>
              <li>Data from linked email addresses</li>
            </ul>
            <p className="mt-2">We may request specific permissions (e.g., camera or microphone access) to provide efficient services.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">2. Data Usage and Sharing</h2>
            <p>We may share your information with third-party entities registered under applicable laws, strictly for:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Providing Services</li>
              <li>Processing Transactions</li>
            </ul>
            <p className="mt-2">Third-party entities are contractually obligated to:</p>
            <ul className="list-disc pl-5">
              <li>Maintain confidentiality</li>
              <li>Use information only for disclosed purposes</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">3. Data Security</h2>
            <p>We maintain rigorous security standards to protect your information.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">4. Data Retention</h2>
            <p>Information may be stored on external servers. We will:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Delete information within 90 days of request</li>
              <li>Retain data for legal or business reasons</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">5. Contact Us</h2>
            <p>
              For privacy concerns, contact: <a href="mailto:support@capvalis.com" className="text-blue-400 hover:underline">support@capvalis.com</a>
            </p>
          </section>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-700">
          Last Updated: 30-11-2024 | © 2024 Capvalis
        </div>
      </div>
    </div>
  );
};

export default TermsandCondtion;