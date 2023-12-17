import React from 'react';

const AdBannerButton = ({ useChat }: { useChat: boolean }) => {
  return (
    <button
      className="border-[1px] border-primary bg-white text-3xl py-8 w-full max-w-[460px]
          rounded-[21px] font-semibold shadowBtn-Home  hover:bg-[#fff7f7] transition-all duration-[1400ms]"
    >
      <span>
        {useChat ? 'Chat' : 'Talk'} With{' '}
        <span className="text-primary">Astrologer</span>
      </span>
    </button>
  );
};

export default AdBannerButton;
