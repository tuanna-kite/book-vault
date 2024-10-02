'use client';

import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import qs from 'querystring';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const ProductSearch = () => {
  const [search, setSearch] = React.useState('');

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = qs.parse(searchParams.toString());

  const onSearch = () => {
    router.push(`/stores?${qs.stringify({ ...currentSearch, search })}`);
  };
  return (
    <div className='flex items-center w-[70%] min-w-80 mx-auto space-x-1 border border-gray-200 pr-3 rounded-lg'>
      <Input
        className='flex-1 text-sm border-0 focus-visible:ring-0'
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <button onClick={onSearch} disabled={search.length === 0}>
        <Search
          className={cn('text-gray-400', search.length > 0 && 'text-primary')}
        />
      </button>
    </div>
  );
};

export default ProductSearch;
