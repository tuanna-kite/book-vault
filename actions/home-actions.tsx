'use server';

import { db } from '@/lib/db';

export async function fetchHomeData() {
  const books = await db.books.findMany({
    take: 3,
  });
  return { books };
}
