import { unstable_noStore as noStore } from 'next/cache';

export async function Posts({ userId = '' }: { userId: string }) {
  noStore();

  const posts = await fetch(
    `${process.env.API_URL}/posts?userId=${userId}`,
  ).then((res) => res.json());

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
