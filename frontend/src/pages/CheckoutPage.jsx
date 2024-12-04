import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRazorpay } from 'react-razorpay';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const { planTitle, planPrice, amount } = location.state || {};
  const { error: razorpayError, Razorpay } = useRazorpay();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.pincode) errors.pincode = 'Pincode is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Invalid phone number (10 digits required)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "Capvalis",
      description: `${planTitle} Plan Subscription`,
      order_id: "",
      handler: (response) => {
        console.log(response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#1976d2",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="w-full h-screen bg-black py-8 ">
      <div className="relative group">
        <div className="max-w-5xl h-full mx-auto bg-white rounded-xl p-8 shadow-lg">
          {/* Header Section */}
          <div className="mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 
                          flex items-center justify-center mb-4 
                          transform transition-transform group-hover:scale-110">
              <CheckCircle className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">Checkout</h2>
            {razorpayError && (
              <div className="bg-black text-white mt-4">
                Error loading payment gateway: {razorpayError}
              </div>
            )}
            <div className="text-black mb-2">Selected Plan: {planTitle}</div>
            <div className="text-2xl font-bold text-blue-500">{planPrice}</div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <input
                className="w-full bg-white border text-black rounded-lg px-4 py-3 
                           focus:outline-none focus:shadow-md"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.name}</p>
              )}
            </div>

            <div>
              <input
                className="w-full bg-white border text-black rounded-lg px-4 py-3 
                           focus:outline-none focus:shadow-md"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.email}</p>
              )}
            </div>

            <div>
              <input
                className="w-full bg-white border text-black rounded-lg px-4 py-3
                           focus:outline-none focus:shadow-md"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.phone}</p>
              )}
            </div>

            <div>
              <input
                className="w-full bg-white border text-black rounded-lg px-4 py-3
                           focus:outline-none focus:shadow-md"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              {formErrors.pincode && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.pincode}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <textarea
                className="w-full bg-white border text-black rounded-lg px-4 py-3
                           focus:outline-none focus:shadow-md"
                placeholder="Address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
              />
              {formErrors.address && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.address}</p>
              )}
            </div>

            <div>
              <input
                className="w-full  px-4 py-3 bg-white border text-black rounded-lg
                          focus:outline-none focus:shadow-md"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {formErrors.city && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.city}</p>
              )}
            </div>

            <div>
              <input
                className="w-full bg-white border text-black rounded-lg px-4 py-3  
                           focus:outline-none focus:shadow-md"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              {formErrors.state && (
                <p className="mt-1 text-red-400 text-sm">{formErrors.state}</p>
              )}
            </div>
          </div>

          {/* Payment Button */}
          <button
            className="w-full py-4 px-6 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-blue-600 
                     text-black transition-all duration-300 hover:opacity-90 
                     flex items-center justify-center gap-2"
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Pay {planPrice}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;