'use client';

import { useRouter } from 'next/navigation';

export function FilterPosts({
  users = [],
  userId = '',
}: {
  users: Array<{ id: string; name: string }>;
  userId: string;
}) {
  const router = useRouter();

  return (
    <label className="flex items-center gap-4">
      Filter by user:
      <select
        className="rounded border border-gray-800 px-4 py-2"
        onChange={(e) =>
          router.push(e.target.value ? `/?userId=${e.target.value}` : `/`)
        }
        value={userId}
      >
        <option value="">All</option>
        {users.map((user: { id: string; name: string }) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </label>
  );
}
