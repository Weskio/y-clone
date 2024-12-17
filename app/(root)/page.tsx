import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "2024-06-26",
      views: 55,
      author: { _id: 1, name: "Alice Johnson" },
      _id: 1,
      description: "A revolutionary robot startup.",
      image: "https://placekitten.com/400/300",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: "2024-06-25",
      views: 78,
      author: { _id: 2, name: "Bob Smith" },
      _id: 2,
      description: "Building the next AI-driven robot.",
      image: "https://placekitten.com/401/300",
      category: "Robots",
      title: "RoboMind AI",
    },
    {
      _createdAt: "2024-06-25",
      views: 90,
      author: { _id: 3, name: "Charlie Davis" },
      _id: 3,
      description: "Enhancing robotics for industrial use.",
      image: "https://placekitten.com/402/300",
      category: "Robots",
      title: "Industrial BotX",
    },
    {
      _createdAt: "2024-06-24",
      views: 120,
      author: { _id: 4, name: "Dana Lee" },
      _id: 4,
      description: "A personal assistant robot you’ll love.",
      image: "https://placekitten.com/403/300",
      category: "Robots",
      title: "HomeBot",
    },
    {
      _createdAt: "2024-06-23",
      views: 150,
      author: { _id: 5, name: "Ethan Martinez" },
      _id: 5,
      description: "Robots for space exploration.",
      image: "https://placekitten.com/404/300",
      category: "Robots",
      title: "AstroBotics",
    },
    {
      _createdAt: "2024-06-23",
      views: 65,
      author: { _id: 6, name: "Fiona Green" },
      _id: 6,
      description: "Robotic farming for the future.",
      image: "https://placekitten.com/405/300",
      category: "Robots",
      title: "AgriBotics",
    },
    {
      _createdAt: "2024-06-22",
      views: 300,
      author: { _id: 7, name: "George Wilson" },
      _id: 7,
      description: "Building humanoid robots.",
      image: "https://placekitten.com/406/300",
      category: "Robots",
      title: "Humanoid Robotics",
    },
  ];

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
          {query ? `Search Results for ${query} ` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
