import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Plans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePlan, setActivePlan] = useState(null);
  const { servicetitle } = location.state || {};

  const plansforalgo = [
    {
      id: 1,
      title: 'Monthly',
      price: '₹1,500',
      period: '/month',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Basic features access',
        'Email support',
        'Up to 10 users',
        '2GB storage'
      ],
      amount: 49900
    },
    {
      id: 2,
      title: 'Quarterly',
      price: '₹3,000',
      period: '/quarter',
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'All Monthly features',
        'Priority support',
        'Up to 50 users',
        '10GB storage'
      ],
      amount: 129900,
      popular: true
    },
    {
      id: 3,
      title: 'Yearly',
      price: '₹10,000',
      period: '/year',
      color: 'from-purple-500 to-purple-600',
      features: [
        'All Quarterly features',
        '24/7 support',
        'Unlimited users',
        '100GB storage'
      ],
      amount: 499900
    }
  ];

  const plansforwhatsapp = [
    {
      id: 1,
      title: 'Monthly',
      price: '₹600',
      period: '/month',
      color: 'from-green-500 to-green-600',
      features: [
        'Basic features access',
        'Email support',
        'Up to 10 users',
        '2GB storage'
      ],
      amount: 49900
    },
    {
      id: 2,
      title: 'Quarterly',
      price: '₹1,400',
      period: '/quarter',
      color: 'from-emerald-500 to-emerald-600',
      features: [
        'All Monthly features',
        'Priority support',
        'Up to 50 users',
        '10GB storage'
      ],
      amount: 129900,
      popular: true
    },
    {
      id: 3,
      title: 'Yearly',
      price: '₹5,000',
      period: '/year',
      color: 'from-teal-500 to-teal-600',
      features: [
        'All Quarterly features',
        '24/7 support',
        'Unlimited users',
        '100GB storage'
      ],
      amount: 499900
    }
  ];

  const decideplans = servicetitle === 'Algo Trading Course' 
    ? plansforalgo 
    : servicetitle === 'WhatsApp' 
      ? plansforwhatsapp 
      : [];

  const handlePlanSelection = (plan) => {
    navigate('/checkout', {
      state: {
        planTitle: plan.title,
        planPrice: plan.price,
        amount: plan.amount
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Choose Your Plan
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decideplans.map((plan) => (
          <div
            key={plan.id}
            className="relative group"
            onMouseEnter={() => setActivePlan(plan.id)}
            onMouseLeave={() => setActivePlan(null)}
          >
            <div className={`h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6
                           transition-all duration-300 hover:transform hover:-translate-y-2
                           ${activePlan === plan.id ? 'shadow-xl shadow-blue-500/20' : ''}
                           ${plan.popular ? 'scale-105 border-blue-500/50' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color}
                             flex items-center justify-center mb-4
                             transform transition-transform group-hover:scale-110`}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>

              {/* <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul> */}

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium
                          bg-gradient-to-r ${plan.color} text-white
                          transition-all duration-300 hover:opacity-90
                          flex items-center justify-center gap-2`}
                onClick={() => handlePlanSelection(plan)}
              >
                Choose Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;