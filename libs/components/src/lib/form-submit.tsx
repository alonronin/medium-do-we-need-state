'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export function FormSubmit({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="self-start rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-600"
      disabled={pending}
    >
      {children}
    </button>
  );
}
