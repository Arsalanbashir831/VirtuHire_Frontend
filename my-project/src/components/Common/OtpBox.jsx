import React, { useState, useEffect } from 'react'

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  useEffect(() => {
    onChange(otp.join(''));
  }, [otp]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="text-center">
      {otp.map((data, index) => {
        return (
          <input
            className="border w-10 h-10 m-2 text-center rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
          />
        );
      })}
    </div>
  )
}

export default OtpBox