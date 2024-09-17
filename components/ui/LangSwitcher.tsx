'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useParams } from 'next/navigation';

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations('Common');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };
  return (
    <div className="relative inline-block w-full">
      <label htmlFor="lang">
        <span className="sr-only">{t('change_lang')}</span>
      </label>
      <select
        id="lang"
        defaultValue={localActive}
        className="appearance-none py-2 pl-3 pr-5 bg-slate-600 rounded-md border border-slate-500 text-slate-50 cursor-pointer transition focus:outline-none focus:border-slate-50"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="pl">{t('polish')}</option>
        <option value="en">{t('english')}</option>
      </select>
      <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-slate-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.7-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
