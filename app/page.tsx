import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";
import logo from "./logo8.png";
import sl from "./sl logo.png";
import cvp from "./cv prev.png";
import { Highlight } from "@/app/aceternityUI/hero-highlight";
import { WobbleCard } from "@/app/aceternityUI/wobble-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b flex bg-[#030303] h-[100px] w-full items-center relative z-20">
        <div className="flex items-center">
          <Image
            className="m-[10px]"
            src={sl}
            alt="Slaite Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center space-x-6 text-[#929292] font-medium">
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="ml-auto flex items-center space-x-4 mr-4">
          <SignedOut>
            <SignInButton>
              <button className="border bg-transparent text-[#929292] font-medium rounded-[10px] text-sm sm:text-base h-10 px-4 cursor-pointer hover:text-white">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-[#ffffff] text-black rounded-[10px] font-medium text-sm sm:text-base h-10 px-4 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: { userButtonAvatarBox: "w-10 h-10" },
              }}
            />
          </SignedIn>
        </div>
      </header>

      <div className="mt-[80px] mr-auto ml-auto text-[100px] max-w-[1000px] text-center">
        <p className="font-medium flex items-center justify-center text-[15px] mr-auto ml-auto bg-[#131313] text-[#a7a7a7] h-[40px] w-[250px] rounded-full font-light border">
          20% off all credits <ChevronRight height={15} width={15} className="ml-[10px] rounded" />
        </p>
        <h5 className="font-semibold">
          Make <Highlight>resumes</Highlight> that land jobs for free
        </h5>
        <p className="font-medium text-[25px] mr-auto ml-auto max-w-[800px] font-light">
          Slaite functions on a credit based system. Each CV costs x amount of credits depending on characteristics amount etc. But generally speaking for the average user they will never find the need to spend.
        </p>
      </div>

      <div className="text-center space-x-[20px] mt-[40px] font-bold">
        <Link href="/dashboard">
          <button className="w-[200px] h-[70px] bg-[white] text-black font-semibold rounded-[20px]">
            Create CV
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="w-[200px] h-[70px] text-white font-medium rounded-[20px] border font-semibold">
            Edit CV
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-[30px]">
        <div className="relative w-[1000px] h-[1000px] bg-[#131313] border rounded-lg overflow-hidden">
          <Image src={cvp} alt="CV Preview" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="text-center text-[60px] font-medium mt-[80px]">
        <h6>Backed by reputable companies</h6>
        <p className="font-normal text-[25px] text-[#a7a7a7] mt-[20px]">
          Slaite is used by over 65,000 professionals at different companies.
        </p>
      </div>

      <div className="wobble grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full mt-[100px]">
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Create Your CV Instantly
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Craft a professional, modern CV in seconds. Our AI-powered generator helps you design resumes that stand out — no design skills needed.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Edit and Update Effortlessly
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Make quick edits anytime. Update your experience, skills, or design in real-time and keep your CV always ready for new opportunities.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-start-2 min-h-[300px] bg-black">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Share and Download Easily
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Export your CV in one click or share it online with a custom link. Perfect for students, professionals, and entrepreneurs who move fast.
            </p>
          </div>
        </WobbleCard>
      </div>

      <div className="footer w-full h-[100px] border-t-2 mt-[100px] flex items-center justify-between px-4 bg-[#030303]">
        <div className="flex items-center">
          <Image className="m-[10px]" src={logo} alt="Slaite Logo" width={60} height={60} />
          <h1 className="font-bold text-[35px] text-white">Slaite</h1>
        </div>
        <a
          href="https://vercel.com?utm_source=YOUR_PROJECT_NAME&utm_campaign=oss"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Powered by Vercel"
        >
          <Image
            className="border"
            src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
            alt="Powered by Vercel"
            width={240}
            height={64}
          />
        </a>
      </div>
    </div>
  );
}
