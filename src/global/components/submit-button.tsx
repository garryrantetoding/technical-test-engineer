"use client"; // Required for hooks
import { useFormStatus } from "react-dom"; //

export function SubmitButton() {
  const { pending } = useFormStatus(); //

  return (
    <button 
      type="submit" 
      disabled={pending} // Prevent double submission
      style={{ marginTop: '20px', opacity: pending ? 0.5 : 1 }}
    >
      {pending ? "Submitting Grades..." : "Submit All Grades"} 
    </button>
  );
}