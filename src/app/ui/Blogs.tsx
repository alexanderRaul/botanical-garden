import Link from "next/link";
import { fetchBlogSummaries } from "../lib/data"
import { BlogPost } from "../lib/definitions"

export default async function Blogs() {
  const blogs: BlogPost[] = await fetchBlogSummaries();

  return (
    <ul className="text-[2em] mt-[72px] divide-y">
      {blogs.map(({ id, title, publication_date }) =>
        <li key={id} className="text-[1.8em] py-[12px] sm:text-[1.25em] flex">
          <Link href={`/blog/${id}`}>{title}</Link>
          <span className="ml-auto">{new Date(publication_date).getFullYear()}</span>
        </li>
      )}
    </ul>
  )
};
