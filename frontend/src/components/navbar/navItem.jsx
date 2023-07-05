import { VscLayoutMenubar, VscTools } from 'react-icons/vsc';
import { PiTShirtLight, PiDressDuotone, PiTShirtDuotone } from 'react-icons/pi';
import { CgMenuGridO } from 'react-icons/cg';
import { GiDoubleNecklace } from 'react-icons/gi';

export const navItems = [
  {
    label: 'All Products',
    key: '/products',
    icon: <VscLayoutMenubar />,
  },
  {
    label: 'Clothing',
    key: 'clothing',
    icon: <PiTShirtLight />,
    children: [
      {
        label: "Men's Clothing",
        key: '/men-clothing',
        icon: <PiTShirtDuotone />,
      },
      {
        label: "Women's Clothing",
        key: '/women-clothing',
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
        key: '/jewelery',
        icon: <GiDoubleNecklace />,
      },
      {
        label: 'Electronics',
        key: '/electronics',
        icon: <VscTools />,
      },
    ],
  },
];
