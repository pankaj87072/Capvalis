import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/60 rounded-lg p-8 border border-gray-700/50 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-4">
         Capvalis Privacy Policy
        </h1>
        
        <p className="text-gray-300 mb-6">
          This Privacy Policy explains how <span className="font-bold text-white">Capvalis</span> ("we", "our" or "us") collects, uses, and shares your personal and sensitive data.
        </p>
        
        <div className="space-y-6 text-gray-300 text-sm">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">1. Types of Data Collected</h2>
            <p>
              In addition to Personal Information, Non-Personal Information, and Transactional Information, we may request other information as necessary. We seek specific permissions such as camera or microphone access to provide smooth and efficient services.
            </p>
            <p className="mt-2">The Other Information collected may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Data created by you or a third party that you wish to store on our Platform or servers (e.g., image files, documents)
              </li>
              <li>
                Data available in public domain or received from third parties, including social media channels
              </li>
              <li>
                Personal or Non-Personal Information from linked email addresses as part of your Account information
              </li>
              <li>
                Other information reasonably required for providing Services or as mandated by applicable laws
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">2. Data Sharing</h2>
            <p>
              You agree and consent to our collecting, storing, processing, transferring, and sharing information (including Personal Information) with third-party entities registered under applicable laws. These entities are solely for providing Services, including processing your Transactions on the Platform.
            </p>
            <p className="mt-2">
              Third-party entities are bound by contractual obligations to:
              <ul className="list-disc pl-5 mt-2">
                <li>Keep such information confidential</li>
                <li>Use information only for disclosed purposes</li>
              </ul>
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">3. Secure Data Handling Procedures</h2>
            <p>
              We value the trust you place in us. Therefore, we maintain the highest security standards to secure your information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">4. Data Retention and Deletion Policy</h2>
            <p>
              Information is retained in locations outside our direct control, such as servers or databases co-located with hosting providers. We will delete information within 90 days of a deletion request.
            </p>
            <p className="mt-2">We may retain data after account deletion for reasons including:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Unresolved issues related to your Account</li>
              <li>Unresolved claims or disputes</li>
              <li>Legal requirements</li>
              <li>Aggregated or anonymized form</li>
              <li>Legitimate business interests (fraud prevention, safety enhancement)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">5. Privacy Contact Information</h2>
            <p>
              For any questions or concerns about our privacy practices, please contact us at <a href="mailto:support@capvalis.com" className="text-blue-400 hover:underline">support@capvalis.com</a>
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

export default PrivacyPolicy;