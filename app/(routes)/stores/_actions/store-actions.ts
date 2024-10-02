'use server';

import { db } from '@/lib/db';
import { Books, Categories } from '@prisma/client';

type FilterProductParams = {
  page?: number;
  category: string | null;
  searchBook: string | null;
  limit?: number;
};

export async function getProducts({
  page = 1,
  category,
  searchBook,
  limit = 9,
}: FilterProductParams) {
  try {
    console.log('searchBook:', searchBook);

    const books = await db.books.findMany({
      include: {
        category: {
          select: {
            slug: true,
          },
        },
      },
      where: {
        category: category
          ? {
              slug: { equals: category },
            }
          : undefined,
        OR: searchBook
          ? [
              {
                title: {
                  search: searchBook,
                },
              },
              {
                slug: {
                  search: searchBook,
                },
              },
            ]
          : undefined,
      },
      take: limit,
      skip: (page - 1) * limit,
    });
    const countBooks = await db.books.count({
      where: {
        category: category
          ? {
              slug: { equals: category },
            }
          : undefined,
      },
    });
    console.log(countBooks);

    return {
      data: { items: books as Books[], total: countBooks, currentPage: page },
      error: null,
    };
  } catch (error) {
    console.error(error);
    return { data: { items: [] as Books[] }, error: 'Get products failed!' };
  }
}

export async function getCategories() {
  try {
    const categories = await db.categories.findMany();
    return { data: categories as Categories[], error: null };
  } catch (error) {
    console.error(error);
    return { data: [] as Categories[], error: 'Get categories failed!' };
  }
}
