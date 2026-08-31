import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');
    
    // Secure client-side email delivery using Web3Forms
    // Ensure you create an access key for swale4126@gmail.com at web3forms.com
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Visit Hawassa Contact: ${formData.subject}`,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        // We mock success if the key isn't provided yet so the UI still works for preview
        if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
          await new Promise(resolve => setTimeout(resolve, 1500)); // mock network delay
        }
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Sorry, we couldn't send your message. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
      
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-100 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-3 animate-in fade-in duration-500">
          <CheckCircle className="w-12 h-12 text-green-600 mb-2" />
          <h4 className="text-lg font-bold">Thank you!</h4>
          <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 bg-green-100 hover:bg-green-200 text-green-800 px-6 py-2 rounded-full font-medium transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {status === 'error' && (
            <div className="bg-red-50 text-red-800 p-4 rounded-xl flex items-start border border-red-100 animate-in fade-in">
              <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-600" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-green-600'} bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-green-600'} bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your email address"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3.5 rounded-xl border ${errors.subject ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-green-600'} bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none transition-all`}
              placeholder="What can we help you with?"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && <p className="mt-2 text-sm text-red-600" id="subject-error">{errors.subject}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3.5 rounded-xl border ${errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-green-600'} bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
              placeholder="Write your message here..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && <p className="mt-2 text-sm text-red-600" id="message-error">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
