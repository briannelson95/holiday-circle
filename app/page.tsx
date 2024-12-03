import RevealCard from "@/components/RevealCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Welcome to Holiday Circle</h1>
      <p>Create and manage your gift exchange events easily.</p>
      <Link href={'/auth/signin'}>Get started</Link>
      <hr />
      <section className="flex justify-center p-4">
        <RevealCard name="Brian"/>
      </section>
    </main>
  );
}
