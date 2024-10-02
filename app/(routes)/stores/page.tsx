import React from 'react';
import ProductGrid from './_components/product-grid';
import CategoriesSidebar from './_components/categories-sidebar';

// TODO: Handle search
const StorePage = ({
  searchParams,
}: {
  searchParams: { category?: string, search?: string };
}) => {
  return (
    <div className='pt-[56px] md:pt-[88px]'>
      <div className='w-full max-w-5xl mx-auto px-8 xl:px-0'>
        <h2 className='font-semibold text-3xl py-8'>Cửa hàng</h2>
        <div className='flex space-x-0 md:space-x-12 lg:space-x-8'>
          <CategoriesSidebar searchParams={searchParams} />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
