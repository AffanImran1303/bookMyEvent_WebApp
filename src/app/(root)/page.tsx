import { Button } from "@/components/ui/button";
import { SearchParams } from "next/dist/server/request/search-params";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <>
            <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-[#1b72eb]">Find. Book. Experience</h1>
            <p className="p-regular-20 md:p-regular-20 text-[#002547] md:pr-24">Discover, book, and enjoy your favorite events with ease. From concerts to conferences, <span className="underline underline-offset-2 decoration-[#1b72eb]">bookmyevent</span> brings every occasion to your fingertips.</p>
            <Button size="lg" asChild className="secondary-button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/heroimage1.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] rounded-2xl 2xl:max-h-[50vh]"
          />
          
        </div>
      </section>
    </>

  );
}
