type NavbarRouteItem = { label: string; route: string };

export const navbarRoutes: NavbarRouteItem[] = [
  {
    label: 'Trang chủ',
    route: '/',
  },
  {
    label: 'Cửa hàng',
    route: '/stores',
  },
  {
    label: 'Trao đổi',
    route: '/exchange',
  },
  {
    label: 'Giới thiệu',
    route: '/about',
  },
  {
    label: 'Liên hệ',
    route: '/contact',
  },
];

export const BrandConfig = {
  brandName: 'BookVault',
  address: '9 Vũ Phạm Hàm, Yên Hòa, Cầu Giấy, HN',
  email: 'infor@bookvault.com',
  phone: '0987654321',
  copyright: 'Copyright © 2024. All rights reserved.',
};
