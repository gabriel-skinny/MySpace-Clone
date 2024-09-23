import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company</p>
    </main>
  );
}
