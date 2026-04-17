'use client';

import { submitGrades } from '../actions/action';
import { SubmitButton } from '@/global/components/submit-button';
import { FaUser } from 'react-icons/fa';

export default function GradingForm() {
  const studentsCount = 10;
  const gradesPerStudent = 4;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await submitGrades(formData);
    if (result.success === true) {
      alert('Nilai telah disimpan!');
    } else {
      alert('Gagal menyimpan nilai!');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="flex w-130 flex-col gap-2 md:w-200"
    >
      <div className="flex items-center justify-end gap-2 px-4">
        {Array.from({ length: gradesPerStudent }).map((_, gIdx) => (
          <h2 key={gIdx} className="w-18 text-center text-base font-medium md:w-30 md:text-xl">
            Aspek Penilaian {gIdx + 1}
          </h2>
        ))}
      </div>
      {Array.from({ length: studentsCount }).map((_, sIdx) => (
        <div
          key={sIdx}
          className="flex h-12 w-full items-center justify-between rounded-md border-2 border-black px-4"
        >
          <div className="flex items-center justify-start gap-4">
            <div className="flex size-8 justify-center rounded-full bg-neutral-300 pt-2 text-neutral-400">
              <FaUser className="size-5" />
            </div>

            <span className="text-bold">Mahasiswa {sIdx + 1}:</span>
          </div>
          <div className="flex justify-end gap-2">
            {Array.from({ length: gradesPerStudent }).map((_, gIdx) => (
              <select
                key={gIdx}
                name={`aspek_penilaian_${sIdx}_${gIdx}`}
                defaultValue="1"
                className="w-18 rounded border border-neutral-400 p-0.5 md:w-30"
                required
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      ))}
      <div className="flex w-full justify-center md:justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
