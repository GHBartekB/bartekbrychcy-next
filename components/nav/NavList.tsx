import { useTranslations } from 'next-intl';
import NavItem from './NavItem';
import LangSwitcher from '../ui/LangSwitcher';
import ThemeBtn from '../ui/ThemeBtn';

const navData = [
  { translationKey: 'home', link: '/' },
  { translationKey: 'about', link: '/about' },
  { translationKey: 'projects', link: '/projects' },
  { translationKey: 'contact', link: '/contact' },
];

function NavList() {
  const t = useTranslations('Common');
  return (
    <ul className="flex flex-col pt-16 md:pt-0 md:ml-16 lg:ml-28 md:flex-row max-md:gap-y-2 md:gap-x-4">
      {navData.map((item) => (
        <NavItem
          key={item.translationKey}
          text={t(item.translationKey)}
          link={item.link}
        />
      ))}
      <li className="ml-auto flex gap-x-4 items-center">
        <ThemeBtn />
        <LangSwitcher />
      </li>
    </ul>
  );
}

export default NavList;
