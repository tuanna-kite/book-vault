'use server';

import { db } from '@/lib/db';

export async function fetchHomeData() {
  const trendingBooks = await db.books.findMany({
    take: 3,
  });
  const popularBooks = await db.books.findMany({
    take: 4,
    skip: 3,
  });
  return { trendingBooks, popularBooks };
}
