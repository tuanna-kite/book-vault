import React from 'react';
import { Notification } from 'iconsax-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AdminSearch from './admin-search';

const AdminHeader = () => {
  return (
    <div className='fixed pl-[251px] w-full h-[60px] shadow-sm z-10 bg-white'>
      <div className='flex items-center h-full px-4'>
        <div className='flex-1'>
          <AdminSearch />
        </div>
        <div className='flex items-center space-x-3'>
          <div>
            <Notification size={24} className='text-gray-600' />
          </div>
          <div className='w-[1px] h-[20px] bg-gray-300' />
          <div className='flex space-x-2 items-center'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className='font-medium text-sm'>Jaxson Bator</div>
              <div className='text-xs font-light text-gray-600'>Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
