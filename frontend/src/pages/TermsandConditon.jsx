import React from 'react';

const TermsandConditions = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/60 rounded-lg p-8 border border-gray-700/50 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-4">
          Capvalis Terms and Conditions
        </h1>
        
        <div className="space-y-6 text-gray-300 text-sm">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">1. Introduction</h2>
            <p>These Terms and Conditions are legally binding and govern your use of Capvalis services. By accessing our website or downloading our application, you agree to these terms.</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>These terms are binding between Capvalis and the user</li>
              <li>Acceptance is mandatory to use our services</li>
              <li>Governed by Information Technology Act 2000/2008 and applicable Indian laws</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">2. Key Definitions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Organization:</strong> Capvalis, the event organizing company</li>
              <li><strong>Client/User:</strong> Person participating in Capvalis events/training</li>
              <li><strong>Event/Training:</strong> Teaching or conference organized by Capvalis</li>
              <li><strong>Webinar:</strong> Online conference held over the Internet</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">3. Registration & User Responsibilities</h2>
            <p>Users must provide accurate information and comply with our terms:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Provide true and accurate information during registration</li>
              <li>Capvalis reserves the right to verify and delete fake or duplicate accounts</li>
              <li>Users are responsible for their account security</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">4. Service Usage</h2>
            <p>Important guidelines for using Capvalis services:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Services may include online/offline training and events</li>
              <li>Do not use services for fraudulent or illegal activities</li>
              <li>Respect intellectual property and third-party rights</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">5. Limitation of Liability</h2>
            <p>Key liability limitations:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Capvalis is not liable for consequential damages</li>
              <li>Maximum liability limited to amount paid or Rs. 1000</li>
              <li>No warranties for service interruptions or data loss</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">6. Governing Law</h2>
            <p>
              These Terms are governed by Indian law, specifically the Information Technology Act 2000/2008. 
              Any disputes shall be resolved in the courts of Lucknow District.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">7. Contact & Modifications</h2>
            <p>
              For any concerns, contact: <a href="mailto:support@capvalis.com" className="text-blue-400 hover:underline">support@capvalis.com</a>
            </p>
            <p className="mt-2">
              Capvalis reserves the right to modify these terms at any time. Continued use of services constitutes acceptance of updated terms.
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

export default TermsandConditions;