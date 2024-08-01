'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { IoIosSunny } from 'react-icons/io';

function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Common');

  return (
    <button
      type="button"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label={t('theme_text')}
    >
      <IoIosSunny
        className="cursor-pointer text-slate-50 dark:text-slate-500"
        size={25}
      />
    </button>
  );
}

export default ThemeBtn;
