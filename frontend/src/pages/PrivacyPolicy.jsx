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
            In addition to the Personal Information, Non-Personal Information and Transactional Information, We may also request You to provide other information as and when necessary ("Other Information"). We also seek specific permissions from You such as permissions to use the camera or microphone of Your device which enables Us to provide Services to You in a smooth and efficient manner. The Other Information collected by us may include inter alia (a) Data either created by You or by a third party and which You wish to store on Our Platform and/or servers such as image files, documents etc.; (b) Data available in public domain or received from any third party including social media channels, including but not limited to Personal or Non-Personal Information from Your linked email address etc. as a part of Your Account information; and (c) such other information as may be reasonably required for the purpose of providing Services to You or as required under any law for the time being in force.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">2. Data Sharing</h2>
            <p>
            You also specifically agree and consent to Us collecting, storing, processing, transferring, and sharing information (including Personal Information) related to You with third parties such as with entities registered under applicable laws solely for providing Services to You including processing Your Transactions on the Platform. Provided that, the third party entities shall be bound by contractual obligations to keep such information confidential and use it only for the purposes for which We disclose it to them.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">3. Secure Data Handling Procedures</h2>
            <p>
            We value the trust You place in Us. That's why, We maintain the highest security standards for securing Your information.            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">4. Data Retention and Deletion Policy</h2>
            <p>
            All information provided by You, save and except upon withdrawal or termination, shall be retained in locations outside the direct control of the Company (for instance, on servers or databases co-locates with hosting providers). We will delete information based on a request received from you within a reasonable period and latest within 90 (ninety) days of receiving a deletion request. However, we may retain such portion of information and for such periods as may be required under applicable law. Notwithstanding anything contained herein, We may retain data after account deletion for reasons including but limited to the following purposes: (i) if there is an unresolved issue relating to your Account, or an unresolved claim or dispute; (ii) if We are required to by applicable law; and/or in aggregated and/or anonymized form; or (iii) Company may also retain certain information if necessary for its legitimate business interests, such as fraud prevention and enhancing safety and security of individuals using the Platform.
            </p>
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