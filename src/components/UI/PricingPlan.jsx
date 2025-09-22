import React, { useState } from 'react';



export default function PricingPlan() {
	const [showModal, setShowModal] = useState(false);
	const [form, setForm] = useState({
		name: '',
		mobile: '',
		email: '',
		message: '',
	});

    const plans = [
	{
		name: 'Hobby',
		price: '$10.00',
		description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
		features: [
			'It is a long established',
			'It is a long established',
			'It is a long established',
		],
	},
	{
		name: 'Professional',
		price: '$30.00',
		description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
		features: [
			'It is a long established',
			'It is a long established',
			'It is a long established',
		],
	},
	{
		name: 'Business',
		price: '$45.00',
		description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
		features: [
			'It is a long established',
			'It is a long established',
			'It is a long established',
		],
	},
];

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const prev = JSON.parse(localStorage.getItem('bookedSessions') || '[]');
		localStorage.setItem('bookedSessions', JSON.stringify([...prev, form]));
		setShowModal(false);
		setForm({ name: '', mobile: '', email: '', message: '' });
	};
    React.useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [showModal]);


   const handleModalOpen = () => {
       setShowModal(true);
       document.body.style.overflowY = 'hidden';
   };

   const handleModalClose = () => {
       setShowModal(false);
       document.body.style.overflow = '';
   };

    return (
        <section className="bg-[#F7FAFC] min-h-screen flex flex-col items-center justify-center py-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2299c0] mb-12 text-center">Session plans</h2>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mb-10 group">
                {plans.map((plan, idx) => (
                    <div
                        key={plan.name}
                        className={`bg-white rounded-xl shadow-md flex flex-col items-center px-8 py-8 w-full max-w-xs md:max-w-sm min-h-[420px] border border-[#F2F4F7] transition-all duration-300
                            peer
                            animate-fadeinup
                            ${idx === 1 ? 'md:-mt-6 md:scale-105 md:shadow-xl z-10 group-hover:md:mt-0 group-hover:md:scale-100 group-hover:shadow-md group-hover:z-0' : ''}
                            hover:-mt-6 hover:scale-105 hover:shadow-2xl hover:z-20 md:hover:-mt-10
                        `}
                        style={{
                            zIndex: idx === 1 ? 10 : undefined,
                            animationDelay: `${idx * 120}ms`,
                            animationFillMode: 'both',
                        }}
                    >
                        <h3 className="text-xl font-semibold text-[#2D3748] mb-2 w-full text-left">{plan.name}</h3>
                        <div className="text-4xl font-bold text-black mb-2 w-full text-left">{plan.price}</div>
                        <p className="text-gray-600 text-sm mb-4 w-full text-left leading-relaxed">{plan.description}</p>
                        <ul className="w-full mb-4 space-y-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="inline-block w-3 h-3 rounded-full bg-[#D6E6F7]" />
                                    <span className="font-semibold text-[#2D3748] text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button
                className="bg-[#175590] text-white border-2 border-[#175590] px-10 py-3 rounded-lg font-medium text-lg shadow transition-colors duration-200 hover:bg-white hover:text-[#175590] hover:border-[#175590]"
                onClick={() => handleModalOpen()}
            >
                Book Your Session
            </button>
            

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 bg-opacity-40 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative animate-fadeinup">
                        <button
                            className="absolute top-4 right-4 text-[#222] bg-[#F7FAFC] rounded p-1 hover:bg-gray-200"
                            onClick={() => handleModalClose()}
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="text-2xl font-bold text-[#222] mb-2">Book Your Session</h3>
                        <p className="text-gray-600 mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique.</p>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#222] mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-0 border-b-2 border-gray-300 focus:border-[#222] outline-none py-2 text-base bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#222] mb-1">Mobile No</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-0 border-b-2 border-gray-300 focus:border-[#222] outline-none py-2 text-base bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#222] mb-1">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-0 border-b-2 border-gray-300 focus:border-[#222] outline-none py-2 text-base bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#222] mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full border border-gray-300 focus:border-[#222] outline-none py-2 px-3 text-base bg-transparent rounded resize-none"
                                    placeholder="Type your Message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#2299c0] hover:bg-[#757f82] hover:text-[#2299c0] text-white font-semibold px-6 py-3 rounded mt-2 transition-colors duration-200"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

