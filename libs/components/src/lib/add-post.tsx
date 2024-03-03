import { revalidatePath } from 'next/cache';
import { FormSubmit } from './form-submit';

export async function AddPost({ path }: { path: string }) {
  const onSubmit = async (data: FormData) => {
    'use server';

    const title = data.get('title');
    const body = data.get('body');

    await fetch(`${process.env.API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
    });

    revalidatePath(path);
  };

  return (
    <form action={onSubmit} className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">Add New Post</h2>
      <input
        name="title"
        className="rounded border border-gray-800 px-4 py-2"
      />
      <textarea
        name="body"
        className="min-h-[100px] rounded border border-gray-800 px-4 py-2"
      />

      <FormSubmit>Add Post</FormSubmit>
    </form>
  );
}
