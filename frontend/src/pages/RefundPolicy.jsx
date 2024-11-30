import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/60 rounded-lg p-8 border border-gray-700/50 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-4">
          Capvalis Refund Policy
        </h1>
        
        <p className="text-gray-300 mb-6">
          Please carefully review our refund and order policies before making a purchase.
        </p>
        
        <div className="space-y-6 text-gray-300 text-sm">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">1. Order Review</h2>
            <p>Before placing an order, you must:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Carefully read all item/service details</li>
              <li>Ensure the items/services meet your needs</li>
              <li>Thoroughly review your order</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">2. Refund Policy</h2>
            <p>Our policies generally prohibit exchanges or refunds after an order is placed. Specifically:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>You agree not to dispute or seek a refund for a purchased order</li>
              <li>You will not attempt to evade or circumvent refund prohibitions</li>
              <li>In extraordinary cases, a written refund request may be considered</li>
            </ul>
            <p className="mt-2 italic">Final refund decisions rest entirely with Capvalis.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">3. Transaction Investigations</h2>
            <p>We reserve the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Suspend or cancel suspicious transactions</li>
              <li>Conduct independent investigations to prevent fraud</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">4. Force Majeure</h2>
            <p>In extraordinary circumstances beyond our control, we may:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Cancel or postpone orders</li>
              <li>Reimburse full event fees</li>
              <li>Transfer payment to another order</li>
            </ul>
            <p className="mt-2 italic">We are not liable for consequential losses or additional costs.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-green-400">5. Contact Information</h2>
            <p>
              For refund requests or inquiries, please contact: <a href="mailto:support@capvalis.com" className="text-blue-400 hover:underline">support@capvalis.com</a>
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

export default RefundPolicy;