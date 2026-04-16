'use server';

export async function submitGrades(formData: FormData) {
  const studentsCount = 10;
  const gradesCount = 4;
  const result: Record<string, Record<string, number>> = {};

  for (let gIdx = 0; gIdx < gradesCount; gIdx++) {
    const gradeKey = `aspek_penilaian_${gIdx + 1}`;
    result[gradeKey] = {};

    for (let sIdx = 0; sIdx < studentsCount; sIdx++) {
      const studentKey = `mahasiswa_${sIdx + 1}`;

      const value = formData.get(`aspek_penilaian_${sIdx}_${gIdx}`);
      result[gradeKey][studentKey] = Number(value);
    }
  }

  const output = JSON.stringify(result, null, 2);
  console.log('Output:', output);
  return { success: true };
}
