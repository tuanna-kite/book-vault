import React from 'react';
import AdminSidebar from './_components/admin-sidebar';
import AdminHeader from './_components/admin-header';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen h-screen'>
      <AdminSidebar />
      <AdminHeader />
      <div className='fixed pl-[251px] pt-[60px] h-full w-full bg-primary-light z-0'>
        <div className='w-full p-6'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
