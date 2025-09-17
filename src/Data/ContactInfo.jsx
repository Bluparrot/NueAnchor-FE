import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import MyMap from '../components/UI/Map';


const ContactInfo = ({
  className = '',
  email = 'info@neuanchor.com',
  phone = '+91-XXXXXXXXXX',
  office = 'Office',
  officeDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}) => {
  return (
    <div className={`  overflow-hidden ${className}`}>
      {/* Header */}
      <div className=" text-[#1D69B5] p-6 ">
        <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Libre Baskerville' }}>Contact Us</h2>
        <p className="text-black text-sm leading-4">
          Have questions or ideas? We're here to listen and support. Whether it's 
          technical clarification or consultancy — reach out and let's 
          start a conversation.
        </p>
      </div>

      {/* Contact Details */}
      <div className="p-6 space-y-6">
        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-icon borde=2 border-[#BBD5EE]  rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#1D69B5] " />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-1">Email</h3>
            <a 
              href={`mailto:${email}`}
              className="text-black hover:text-black transition-colors duration-200"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-icon rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#1D69B5]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone/WhatsApp</h3>
            <a 
              href={`tel:${phone}`}
              className="text-black hover:black transition-colors duration-200"
            >
              {phone}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-icon rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#1D69B5]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{office}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {officeDescription}
            </p>
          </div>
        </div>


        <div className="mt-6 rounded-lg overflow-hidden border-2 border-dashed border-blue-200 bg-blue-50">
          <div className="h-48 flex items-center justify-center">
            <div className="h-48 w-full">
              <MyMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;