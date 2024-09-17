'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

function CookieModal() {
  const t = useTranslations('Cookies.Modal');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setCookie = () => {
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `cookiesAccepted=true; expires=${date.toUTCString()}; path=/`;
  };

  useEffect(() => {
    const isCookiesAccepted = document.cookie.includes('cookiesAccepted');

    if (!isCookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie();
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="p-4 lg:p-8 w-10/12 sm:w-[600px] lg:max-w-[660px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 bg-slate-100 shadow-xl rounded-md dark:text-slate-950">
          <p className="mb-4">{t('desc')}</p>
          <button
            onClick={handleAccept}
            className="mr-4 shadow-xl p-2 rounded-sm bg-sky-300 hover:bg-sky-400"
            type="button"
          >
            {t('accepted')}
          </button>
          <a href="https://www.google.com/">{t('quit')}</a>
        </div>
      )}
      <div />
    </>
  );
}

export default CookieModal;
