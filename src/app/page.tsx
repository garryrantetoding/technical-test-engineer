import GradingPage from '@/modules/pages/page';

export default async function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold">Aplikasi Penilaian Mahasiswa</h1>
      <GradingPage />
    </main>
  );
}
