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
        'Access to foundational algorithmic trading modules',
        'Introduction to market analysis techniques',
        'Basic email support',
        'Participation in live Q&A sessions'
      ],
      amount: 1500
    },
    {
      id: 2,
      title: 'Quarterly',
      price: '₹3,000',
      period: '/quarter',
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Includes all Monthly features',
        'Intermediate trading strategies with practical examples',
        'Priority email and chat support',
        'Access to recorded webinars and exclusive trading resources'
      ],
      amount: 3000,
      popular: true
    },
    {
      id: 3,
      title: 'Yearly',
      price: '₹10,000',
      period: '/year',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Includes all Quarterly features',
        'Advanced algorithmic trading strategies and case studies',
        '24/7 dedicated support',
        'One-on-one mentoring sessions with experts',
        'Access to premium trading simulations and tools'
      ],
      amount: 10000
    }
  ];

  const plansforCourses = [
    {
      id: 1,
      title: 'Silver',
      price: '₹4,500',
      period: '/month',
      color: 'from-green-500 to-green-600',
      features: [
        'Trading From Scratch(Equity)',
        'Basic Price Action & Candle Sticks',
         'Stock Selection Technique',
      ],
      amount: 4500
    },
    {
      id: 2,
      title: 'Gold',
      price: '₹9,700',
      period: '/quarter',
      color: 'from-emerald-500 to-emerald-600',
      features: [
        'Introduction To FNO',
        'Advanced Price Action',
        'Advanced Stock Selection Technique',
        'Advanced Candle Stick',
        'Risk Management',
        '30% Loss Compensation'
      ],
      amount: 9700,
      popular: true
    },
    {
      id: 3,
      title: 'Platinum',
      price: '₹15,000',
      period: '/year',
      color: 'from-teal-500 to-teal-600',
      features: [
        'Advance FNO',
        'Indicator Access',
        'Stock Selection Algo',
        '2x Refund+100% Loss Compensation'
      ],
      amount: 15000
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
      :servicetitle==='Courses'?plansforCourses:[];

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

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

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