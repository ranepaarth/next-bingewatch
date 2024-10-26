import Logo from "@/components/logo";
import { Link } from "@/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type SignUpLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function SignUpLayout({ children, params }: SignUpLayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <section className="bg-white w-full h-screen flex flex-col">
          <div className="px-4 md:px-20 py-10 border border-b flex items-center justify-between">
            <Logo />
            <Link
              href={"/signin"}
              className="text-neutral-800 font-bold md:text-xl text-base"
            >
              Sign In
            </Link>
          </div>
          <div className="w-full flex-grow flex flex-col items-center mt-32 text-neutral-800 px-8">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
