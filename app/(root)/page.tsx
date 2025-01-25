import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author: Author };

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const params = {
    search: query ? `*${query}*` : null,
  };

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERIES, params });

  return (
    <div className="">
      <section className="pink_container">
        {" "}
        <h1 className="heading">
          Pitch your startup, connect with Entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit ideas, vote on pitches, and get noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for '${query}' ` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </div>
  );
}
