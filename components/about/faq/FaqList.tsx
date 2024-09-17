'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import Collapse from '@/components/ui/Collapse';

const setKeys = (): string[] => {
  const list = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    list.push(`faq_${i}`);
  }
  return list;
};

const keys = setKeys();

function FaqList() {
  const t = useTranslations('About.Faq');

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const handleActive = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <ul className="space-y-2">
      {keys.map((item, index) => (
        <li
          key={item}
          className="border border-slate-800 dark:border-slate-500 rounded-2xl shadow-md"
        >
          <button
            onClick={() => handleActive(index)}
            className="w-full p-4 sm:px-8 text-left flex justify-between gap-x-4 text-xl"
            type="button"
          >
            <p className="font-semibold">{t(`${item}.question`)}</p>
            <span>
              <TiPlus
                className={`transition duration-500 ${activeIndex === index ? 'rotate-45' : ''}`}
              />
            </span>
          </button>
          <Collapse isOpen={activeIndex === index}>
            <div className="p-4 sm:px-16 ">{t(`${item}.answer`)}</div>
          </Collapse>
        </li>
      ))}
    </ul>
  );
}
export default FaqList;
