"use server";

export async function submitGrades(formData: FormData) {
  const studentsCount = 10;
  const gradesCount = 4;
  const result: Record<string, Record<string, number>> = {};

  // Loop through each grade index (0 to 3)
  for (let gIdx = 0; gIdx < gradesCount; gIdx++) {
    const gradeKey = `grade-${gIdx + 1}`;
    result[gradeKey] = {};

    // Generate student keys dynamically (student-1 to student-10)
    for (let sIdx = 0; sIdx < studentsCount; sIdx++) {
      const studentKey = `student-${sIdx + 1}`;
      
      // Get the value using the same naming convention used in the JSX
      const value = formData.get(`grade-${sIdx}-${gIdx}`);
      result[gradeKey][studentKey] = Number(value);
    }
  }

  console.log("Processing on Server:", JSON.stringify(result, null, 2));
  return { success: true };
}