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
