"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { fetchMediumMetadata } from "@/utils/fetchMetadata";
import { useEffect, useState } from "react";
import { CardDemo } from "./_components/blogsCard";

interface Blog {
  url: string;
  title: string;
  image: string;
  description: string;
  author?: string;
}

export default function TypewriterEffectSmoothDemo() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const blogUrls = [
    "https://medium.com/@0x4149_/microservice-in-golang-1-intro-338e41809e97",
    "https://aws.amazon.com/about-aws/whats-new/2023/11/microservice-extractor-porting-net-linux/?ref=dailydev",
    "https://betterprogramming.pub/microservice-observability-metrics-bd9be270bc62",
    "https://wondertools.substack.com/p/surprisingly-useful-chatgpt-apps?ref=dailydev",
    "https://medium.com/@goodmove_/architecture-kata-agile-dead-trees-789f16f5ac2c",
    "https://plausible.io/blog/community-edition?ref=dailydev",
    "https://towardsdev.com/microservice-decomposition-patterns-41f2f24bec90",
    "https://www.thatdot.com/blog/microservice-hell-the-state-of-the-art-in-streaming-services/?ref=dailydev",
    "https://dzone.com/articles/microservice-architecture-and-agile-teams?ref=dailydev",
    "https://itnext.io/microservice-how-why-cc40ca95d9f0",

    // Add more URLs as needed
  ];

  const words = [
    {
      text: "Blogs",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  useEffect(() => {
    const fetchBlogs = async () => {
      console.log("fetching blogs");
      const fetchedBlogs = await Promise.all(
        blogUrls.map(async (url) => {
          const metadata = await fetchMediumMetadata(url);
          return { ...metadata };
        })
      );
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          Recommended Engineering Reads!
        </p>
      </div>
      <div className="flex justify-center items-start space-x-3 space-y-3 flex-wrap ">
        <div></div>
        {blogs.map((blog, index) => (
          <CardDemo
            image={blog.image}
            title={blog.title}
            url={blog.url}
            author={blog.author}
            description={blog.description}
            key={index}
          />
        ))}
        {blogs.length === 0 &&
          [1,1,1].map((item,index) => <CardDemo.Skeleton key={index} />)}
      </div>
    </div>
  );
}
