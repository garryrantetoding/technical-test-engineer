import GradingForm from '@/modules/pages/page';

export default async function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-center text-4xl font-bold md:text-6xl">Aplikasi Penilaian Mahasiswa</h1>
      <GradingForm />
    </main>
  );
}
