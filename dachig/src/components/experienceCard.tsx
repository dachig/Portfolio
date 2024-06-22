import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export function ExperienceCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-center text-gray-700 dark:text-white gap-8 md:gap-4 items-stretch">
      <div className="max-w-lg border shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white dark:bg-black border-white/[0.1] rounded-lg p-4 flex flex-col">
        <div className="flex gap-4 items-center justify-between">
          <h3 className="font-semibold">Meteor Digital NV</h3>{" "}
          <div className="rounded-full text-xs px-2 py-1 bg-gradient-to-r from  from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-slate-500 dark:text-slate-300">
            {" "}
            feb '24 - june '24
          </div>
        </div>{" "}
        <h4 className="text-slate-500 text-sm">
          Intern e-commerce front-end developer
        </h4>
        <p className="text-slate-500 mt-4">
          Researching Shopify's and Showpware's headless React PWA capabilities
          to seamlessly integrate with the respective storefronts to improve
          (outdated) internal workflows.
          <br />
          <br />
          Developing Shopify custom apps in React to trigger automated ticketing
          printjobs on a client project.
          <br />
          <br />
          Rewriting tests for another client project.
          <br />
          <Link
            className="flex gap-1 items-center mt-2 text-blue-400"
            href="https://meteorblog.vercel.app"
            target="_blank"
          >
            Link to blog <FiExternalLink />
          </Link>
        </p>
      </div>

      <div className="max-w-lg border shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white dark:bg-black border-white/[0.1] rounded-lg p-4 flex flex-col">
        <div className="flex gap-4 items-center justify-between">
          <h3 className="font-semibold">icapps</h3>{" "}
          <div className="rounded-full text-xs px-2 py-1 bg-gradient-to-r from  from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-slate-500 dark:text-slate-300">
            {" "}
            oct '23 - jan '24
          </div>
        </div>{" "}
        <h4 className="text-slate-500 text-sm">
          Group task with classmates as webdevelopers
        </h4>
        <p className="text-slate-500 mt-4">
          Helped Develop a full-stack internal communcation system for intern
          mentors to communicate with interns at the company.
          <br />
          Communication happens through posts and comments on the interns
          timeline and progress.
          <br />
          <br />
          Whilst mainly remaining on the front-end with React I also helped with
          back-end MongoDB issues.
        </p>
      </div>
    </div>
  );
}
