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
      <section className="wrapper mt-24 flex flex-col gap-8 md:flex-row md:gap-12 mt-36">
        <div className="flex flex-row gap-2">
          <div className="">
            <Image
              src="/assets/icons/box.png"
              alt="box"
              width={50}
              height={50}
              className="h-[45px] md:max-w-[80px] 2xl:max-w-[100px]"
            />
          </div>
          <div className="">
          <p className="p-semibold-20">Everything in One Place</p>
          <p className="p-regular-14 mt-2">Simplify your event search by finding everything in one place.</p>
          </div>
        </div>
        <span className="hidden md:flex bg-gray-200 rounded-lg w-1 h-20"></span>
        <div className="flex flex-row gap-2">
          <div className="">
          <Image
            src="/assets/icons/filter.png"
            alt="filter"
            width={50}
            height={50}
            className="h-[45px] md:max-w-[80px] 2xl:max-w-[100px]"
          />
          </div>
          <div>
          <p className="p-semibold-20">Filter for What You Want</p>
          <p className="p-regular-14 mt-2">Got fishing on the brain? Need a sauna and a swim to reset? Instantly customize results.</p>
          </div>
        </div>
        <span className="hidden md:flex bg-gray-200 rounded-lg w-1 h-20"></span>
        <div className="flex flex-row gap-2">
          <div>
            <Image
              src="/assets/icons/event.png"
              alt="event"
              width={50}
              height={50}
              className="h-[45px] md:max-w-[80px] 2xl:max-w-[100px]"
            />
          </div>
          <div>
          <p className="p-semibold-20">Find Your Perfect Event</p>
          <p className="p-regular-14 mt-2">Discover a world of events, from concerts to conferences, all in one place.</p>
          </div>
        </div>
      </section>
      <section id="events" className="wrapper my-36 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-[#002547] flex justify-center text-center mt-8">Experience<br/> Unforgettable Events</h2>

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
      <section className="wrapper">
        <h3 className="h3-bold text-[#002547] flex justify-center text-center">3 Steps to Your Next Event</h3>
        <div className="border-2 grid grid-flow-col md:grid-cols-3 md:gap-12 md:mt-20">
          <div className="flex flex-col">
            <div className="m-4 place-self-center">
            <Image
              src="/assets/icons/user.png"
              alt="user"
              width={1000}
              height={1000}
              className="h-[100px] w-[100px] md:max-w-[70px] md:max-h-[100px] 2xl:max-w-[100px]"
            />
            </div>
            <div className="text-center">
              <p className="p-semibold-22 m-2">Login</p>
              <p className="p-regular-16 m-2">Get started with your account in seconds</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="m-4 place-self-center">
            <Image
              src="/assets/icons/search.png"
              alt="search"
              width={1000}
              height={1000}
              className="h-[100px] w-[100px] md:max-w-[70px] md:max-h-[100px] 2xl:max-w-[100px]"
            />
            </div>
            <div className="text-center">
              <p className="p-semibold-22 m-2">Search & Discover</p>
              <p className="p-regular-16 m-2">Find your dream event with our easy-to-use search filters.</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="m-4 place-self-center">
            <Image
              src="/assets/icons/pay.png"
              alt="pay"
              width={1000}
              height={1000}
              className="h-[100px] w-[100px] md:max-w-[70px] md:max-h-[100px] 2xl:max-w-[100px]"
            />
            </div>
            <div className="text-center">
              <p className="p-semibold-22 m-2">Book Now & Pay</p>
              <p className="p-regular-16 m-2">Complete your booking in a few clicks and receive your tickets instantly.</p>
            </div>
          </div>
        </div>
      
      </section>
    </>

  );
}
