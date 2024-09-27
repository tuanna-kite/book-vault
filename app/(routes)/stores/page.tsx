import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import BookCard from '@/components/book-card';
import { db } from '@/lib/db';

// TODO: Handle pagination
// TODO: Handle search

const StorePage = async () => {
  const books = await db.books.findMany({});
  return (
    <div className='pt-[56px] md:pt-[88px]'>
      <div className='w-full max-w-5xl mx-auto px-8 xl:px-0'>
        <h2 className='font-semibold text-3xl py-8'>Cửa hàng</h2>
        <div className='flex space-x-0 md:space-x-12 lg:space-x-8'>
          <div className='hidden md:block w-1/4 space-y-4'>
            <h3 className='text-xl font-semibold'>Danh mục</h3>
            <div className='space-y-3'>
              <div className='font-light'>Truyện tranh</div>
              <div className='font-light'>Văn học</div>
              <div className='font-light'>Kinh tế</div>
              <div className='font-light'>Sách - Truyện thiếu nhi</div>
              <div className='font-light'>Kỹ năng sống</div>
              <div className='font-light'>Y học - Sức khỏe</div>
              <div className='font-light'>Khoa học - Công nghệ</div>
              <div className='font-light'>Nghệ thuật - Điện ảnh</div>
              <div className='font-light'>Tử vi - Chiêm tinh</div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8'>
              {books.map((book, index) => (
                <BookCard key={book.id} data={book} />
              ))}
            </div>
            <div className='w-full mt-10'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href='#' />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href='#' />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
