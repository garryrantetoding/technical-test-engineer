"use client";

import { submitGrades } from "../actions/action";
import { SubmitButton } from "@/global/components/submit-button";

export default function GradingPage() {
  const studentsCount = 10;
  const gradesPerStudent = 4;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);
    await submitGrades(formData);
    alert("Grades submitted!");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1>Minimum Render Grading App</h1>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}> 
        {/* Create an array of 10 items to map over */}
        {Array.from({ length: studentsCount }).map((_, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
              Student {sIdx + 1}:
            </span>
            {Array.from({ length: gradesPerStudent }).map((_, gIdx) => (
              // <input 
              //   key={gIdx}
              //   name={`grade-${sIdx}-${gIdx}`} 
              //   type="number" 
              //   min="1" max="10" 
              //   defaultValue="1"
              //   style={{ marginRight: '5px', width: '40px' }}
              //   required
              // />
              <select 
                key={gIdx}
                name={`grade-${sIdx}-${gIdx}`} 
                defaultValue="1"
                style={{ marginRight: '5px', padding: '2px' }}
                required
              >
                {/* Generate options 1 through 10 */}
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            ))}
          </div>
        ))}
        <SubmitButton /> 
      </form>
    </main>
  );
}