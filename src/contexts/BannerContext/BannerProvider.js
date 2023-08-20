import React, { createContext, useContext, useState } from 'react';

const BannerContext = createContext();

export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerProvider = ({ children }) => {
  const [bannerMessage, setBannerMessage] = useState('');
  const [bannerType, setBannerType] = useState('info');

  return (
    <BannerContext.Provider value={{ bannerMessage, setBannerMessage, bannerType, setBannerType }}>
      {children}
    </BannerContext.Provider>
  );
};