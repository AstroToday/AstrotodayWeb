'use client';
import React, { useEffect, useState } from 'react';

const OtpVerification = ({
  phoneNumber,
  onClose,
  onBack,
}: {
  phoneNumber: string;
  onClose: () => void;
  onBack: () => void;
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [completedOtp, setCompletedOtp] = useState<string>('');
  const [timer, setTimer] = useState<number>(10);
  useEffect(() => {
    return () => {
      // Cleanup function when the component unmounts
      sessionStorage.removeItem('phoneNumber');
    };
  }, []);
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);
  useEffect(() => {
    const currentOtp = otp.join('');
    if (currentOtp.length === 4) {
      setCompletedOtp(currentOtp);
    } else {
      setCompletedOtp('');
    }
  }, [otp]);
  const handleOtpChange = (
    element: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = element.target.value;
    const newOtp = [...otp];
    if (value === '' || /^[0-9]$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value) {
        const nextSibling = element.target
          .nextElementSibling as HTMLInputElement;
        if (nextSibling) {
          nextSibling.focus();
        }
      }
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !otp[index]) {
      const prevSibling = e.currentTarget
        .previousElementSibling as HTMLInputElement;
      if (prevSibling) {
        prevSibling.focus();
      }
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
        <div className="w-[33.13rem] bg-white rounded-lg -mt-16 relative">
          {timer === 0 && (
            <button
              onClick={onBack}
              className="text-2xl text-center absolute top-0 left-0 mt-4 ml-4 text-black leading-none font-semibold cursor-pointer hover:text-primary transition-all duration-[150ms]"
              aria-label="Back"
            >
              &larr;
            </button>
          )}
          <button
            onClick={onClose}
            className="absolute text-2xl top-0 right-0 mt-4 mr-4 text-black leading-none font-semibold cursor-pointer hover:text-primary transition-all duration-[150ms]"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="max-w-[24.5rem] flex flex-col items-center justify-center mx-auto pt-5 pb-7">
            <div className="top-head w-full">
              <div className="text-[1.094rem] leading-6 text-black font-medium text-center">
                OTP Verification
              </div>
            </div>
            <div className="text-center text-slate-500 text-lg font-bold py-[1.875rem]">
              OTP sent to <span className="text-black">+91-{phoneNumber}</span>
            </div>
            <div className="w-full flex items-center justify-evenly mb-5">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-[3.25rem] h-[3.25rem] border border-gray-400 text-center form-control rounded-md shadow-[0_0_2px_#616161]"
                    type="text"
                    name="otp"
                    maxLength={1}
                    key={index}
                    value={data}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <div className="w-full box-border mb-5">
              <button
                className={`w-full font-medium box-border py-2 ${
                  completedOtp.length === 4
                    ? 'bg-secondary  cursor-pointer transition-all duration-[250ms] hover:bg-tertiary text-white'
                    : 'opacity-50 cursor-not-allowed bg-[#ccc] text-black'
                } mt-3  text-lg rounded-[0.625rem]`}
                disabled={completedOtp.length !== 4}
                onClick={() => {
                  if (completedOtp.length === 4 && completedOtp === '1234') {
                    // TODO: Send OTP to server
                    console.log('OTP sent to server');
                  }
                }}
              >
                Login
              </button>
            </div>
            <div className="otp-resend w-full mb-1 flex items-center justify-between">
              {timer > 0 ? (
                <div className="txt-otp-resend text-[0.938rem] leading-5 font-bold text-[#616161]">
                  Resend OTP available in{' '}
                  <span className="text-red-600">{timer}s</span>
                </div>
              ) : (
                <div className="text-green-600 text-[0.938rem] font-bold">
                  Resend OTP available
                </div>
              )}
              {timer === 0 && (
                <button
                  className="bg-primary text-white py-[5px] px-2.5 text-sm rounded-[5px]
                  hover:bg-orange-500 "
                  onClick={() => setTimer(15)}
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
