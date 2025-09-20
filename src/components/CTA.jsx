import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
		<>
			<style>{`
        .cta-section {
          background: #fff;
          text-align: center;
          padding: 64px 0 56px 0;
        }
        .cta-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #8B2BB9;
          margin-bottom: 32px;
        }
        .cta-btn {
          background: #333;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          padding: 14px 38px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.3s, color 0.3s;
        }
        .cta-btn:hover {
          background: #fff;
          color: #333;
          border: 1px solid #333;
        }
        @media (max-width: 700px) {
          .cta-title { font-size: 2rem; }
          .cta-btn { padding: 12px 24px; font-size: 0.95rem; }
        }
      `}</style>
			<section className="cta-section">
				<h3 className="cta-title">Ready to work with us?</h3>
				<button
					className="cta-btn"
					onClick={() => navigate("/contact")}
				>
					Contact Us Today
				</button>
			</section>
		</>
  );
};

export default CTA;
