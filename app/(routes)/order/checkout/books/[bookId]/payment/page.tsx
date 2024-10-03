import { Button } from '@/components/ui/button';
import StepsHeader from '../_components/steps-header';
import { db } from '@/lib/db';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { UsdCoin } from 'iconsax-react';

const PaymentPage = async ({ params }: { params: { bookId: string } }) => {
  const book = await db.books.findUnique({
    where: {
      id: params.bookId,
    },
  });
  if (!book) return redirect('/404');

  return (
    <div className='pt-[56px] md:pt-[88px]'>
      <div className='flex flex-col space-y-8 p-8 w-full max-w-5xl xl:px-0 mx-auto'>
        <StepsHeader activeStep={1} />
        <h2 className='text-3xl font-semibold'>Thanh toán</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-8 lg:gap-x-12 gap-y-4'>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <div className='font-semibold text-xl'>Giao hàng đến</div>
              <Button
                variant='outline'
                className='h-6 text-xs border-gray-300 text-gray-500 font-normal'
              >
                Sửa
              </Button>
            </div>
            <div className='space-y-2'>
              <div className='font-semibold'>Nguyễn Văn A</div>
              <div className='font-light text-gray-500'>Quận 1, TP.HCM</div>
              <div className='font-light text-gray-500'>123 Đường ABC</div>
              <div className='font-light text-gray-500'>
                0345622456 - nguyenvana@gmail.com
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='font-semibold text-xl'>Sản phẩm</div>
            <div className='flex space-x-4 items-center'>
              <div className='border aspect-square w-16'>
                <Image src={book.cover!} alt='cover' width={64} height={64} />
              </div>
              <div className='space-y-1 flex-1'>
                <div className='font-semibold'>{book.title}</div>
                <div className='font-light text-sm text-gray-500'>
                  {book.author}
                </div>
              </div>
              <div className='flex space-x-1'>
                <span className='text-primary font-semibold'>{book.price}</span>
                <UsdCoin className='text-coin' variant='Bold' />
              </div>
            </div>
            <Button className='w-full py-5'>Thanh toán</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
