import React, { useRef, useState } from 'react'
import coupon from '../images/Screenshot_2024-03-18_224045-removebg-preview.png'
import './coupon.css'
function Coupon() {
  const [buttonText, setButtonText] = useState('COPY');
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    const code = codeRef.current.textContent; // Access text content directly

    navigator.clipboard.writeText(code)
      .then(() => {
        setButtonText('COPIED!'); // Update button text on successful copy
      })
      .catch((err) => {
        console.error('Failed to copy code:', err); // Handle potential errors
        // Optionally display an error message to the user
      });

    setTimeout(() => {
      setButtonText('COPY'); // Revert button text after timeout
    }, 5000);
  };
  
  return (
    <div>
      <div className='container-coupon text-center  'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='coupon-card'>
                    <img src={coupon}alt=" no "width={100} />
                    <h3>Up To 5% Offer  </h3>
                    <div className='coupon-row'>
                      <span id='cpnCode'>NEWCOUSTMER20</span>
                      <b id='cpnBtn' onClick={handleCopyClick} ref={codeRef}>{buttonText}</b>
                    </div>
                    <p>Valid Till: 20 Apr,2024 </p>
                    
            </div>
      </div>
    </div>
  )
}

export default Coupon;
