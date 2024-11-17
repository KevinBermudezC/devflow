import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import TagCard from "@/components/cards/TagCard";

const hotQuestion = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "How to use React Router?" },
  { _id: "3", title: "How to use React Context?" },
  { _id: "4", title: "How to use React Hooks?" },
  { _id: "5", title: "How to use Redux?" },
];
const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "JavaScript", questions: 80 },
  { _id: "3", name: "TypeScript", questions: 60 },
  { _id: "4", name: "Next.js", questions: 40 },
  { _id: "5", name: "Node.js", questions: 20 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex flex-col h-screen w-[350px] gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>

              <Image
                src="/icons/arrow-right.svg"
                alt="chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              _id={_id}
              name={name}
              questions={questions}
              key={_id}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
