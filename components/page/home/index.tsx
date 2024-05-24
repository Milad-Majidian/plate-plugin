import { PlateEditor } from "@/components/plate-editor";

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <section className="w-full lg:max-w-[800px] h-full min-h-[600px]">
          <PlateEditor />
        </section>
      </main>
    </>
  );
}
