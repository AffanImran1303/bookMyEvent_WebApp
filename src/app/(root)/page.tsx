import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({searchParams}:SearchParamProps) {
  const currentSearchParams=await searchParams;
  const page = Number(currentSearchParams?.page) || 1;
  const searchText = (currentSearchParams?.query as string) || '';
  const category = (currentSearchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

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
      <section id="events" className="wrapper-second my-36 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-white flex justify-center text-center mt-8">Experience<br/> Unforgettable Events</h2>

        <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
          <div className="flex w-full md:w-[45%]"><Search /></div>
          <div className="flex w-full md:w-[45%]"><CategoryFilter /></div>
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>

  );
}
