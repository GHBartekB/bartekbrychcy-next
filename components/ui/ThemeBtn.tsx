'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { IoIosSunny } from 'react-icons/io';

function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('common');

  return (
    <button
      type="button"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label={t('theme_text')}
    >
      <IoIosSunny
        className="transition-all cursor-pointer text-slate-50 hover:text-slate-500  dark:text-slate-500 dark:hover:text-slate-50"
        size={25}
      />
    </button>
  );
}

export default ThemeBtn;
