import React from "react";

export default function Timline() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 relative">
      <p className="text-black text-sm md:text-base mt-8 md:leading-loose tracking-wide">
        Experienced software engineer specializing in full-stack development
        with expertise in Java, React.js, Next.js, and FastAPI. Skilled in
        leveraging AWS, Docker, Kubernetes, and CI/CD pipelines to deliver
        innovative and scalable applications. Demonstrated ability to lead
        projects such as AI-powered job posting platforms and blockchain-based
        supply chain solutions, enhancing efficiency and reliability.
      </p>
      <p className="text-black text-sm md:text-base mt-8 md:leading-loose tracking-wide">
      Here&#39;s a timeline of my professional journey:
      </p>
      <div className="max-w-3xl mx-auto divide-y divide-gray-800 relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-green-400 to-transparent -left-4 md:-left-10">
          <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-full bg-green-500 shadow-[0_0_0_1px_#ffffff10] rotate-180 left-1"></span>
        </div>
        <div className="border-b border-gray-800">
          <h1 className="text-xl font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-green-300 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            2024 - Present
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
                Software Engineer Internship at NETOPIA Morocco, developing
                AI-powered job posting management platforms and enhancing
                recruitment efficiency.
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-800">
          <h1 className="text-xl font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            2023 - 2023
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
                Software Engineer Internship at DEVACTUS Morocco, creating SaaS
                solutions and improving application development speed.
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-800">
          <h1 className="text-xl font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            2022 - 2022
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
                Software Engineer Internship at FMJ Morocco, implementing
                full-stack applications and improving financial operations
                efficiency.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
