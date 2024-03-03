import { Suspense } from 'react';
import { AddPost, Posts } from '@blog/components/server';
import { FilterPosts } from '@blog/components';

export default async function Index({
  searchParams,
}: {
  searchParams: { userId: string };
}) {
  const users = await fetch(`${process.env.API_URL}/users`).then((res) =>
    res.json(),
  );

  return (
    <>
      <FilterPosts users={users} userId={searchParams.userId} />

      <Suspense fallback={'loading posts...'}>
        <Posts userId={searchParams.userId} />
      </Suspense>

      <AddPost path={'/posts'} />
    </>
  );
}
