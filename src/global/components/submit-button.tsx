'use client';
import { useFormStatus } from 'react-dom';
import { LuLoaderCircle } from 'react-icons/lu';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending} // Prevent double submission
      className={`flex h-10 w-40 items-center justify-center rounded-md border-2 border-black text-white ${pending ? 'cursor-not-allowed bg-neutral-500' : 'bg-blue-500 hover:bg-blue-700'}`}
    >
      {pending ? (
        <div className="flex items-center justify-center gap-2">
          <LuLoaderCircle className="size-4 animate-spin" />
          Menyimpan
        </div>
      ) : (
        'Simpan'
      )}
    </button>
  );
}
