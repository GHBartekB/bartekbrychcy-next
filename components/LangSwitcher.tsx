'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const t = useTranslations('common');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="px-2">
      <p className="sr-only">{t('change_lang')}</p>
      <select
        defaultValue={localActive}
        className="p-2 bg-slate-600 rounded-md text-slate-50 cursor-pointer"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="pl">{t('polish')}</option>
        <option value="en">{t('english')}</option>
      </select>
    </div>
  );
}
