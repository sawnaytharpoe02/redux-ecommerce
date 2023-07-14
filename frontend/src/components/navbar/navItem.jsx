import { VscLayoutMenubar, VscTools } from 'react-icons/vsc';
import { PiTShirtLight, PiDressDuotone, PiTShirtDuotone } from 'react-icons/pi';
import { CgMenuGridO } from 'react-icons/cg';
import { GiDoubleNecklace } from 'react-icons/gi';

export const navItems = [
  {
    label: 'All Products',
    key: '/',
    icon: <VscLayoutMenubar />,
  },
  {
    label: 'Clothing',
    icon: <PiTShirtLight />,
    children: [
      {
        label: "Men's Clothing",
        key: '/clothing/men',
        icon: <PiTShirtDuotone />,
      },
      {
        label: "Women's Clothing",
        key: '/clothing/women',
        icon: <PiDressDuotone />,
      },
    ],
  },
  {
    label: 'Others',
    key: 'others',
    icon: <CgMenuGridO />,
    children: [
      {
        label: 'Jewelery',
        key: '/others/jewelery',
        icon: <GiDoubleNecklace />,
      },
      {
        label: 'Electronics',
        key: '/others/electronics',
        icon: <VscTools />,
      },
    ],
  },
];
