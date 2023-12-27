import Link from "next/link";
import { fetchBlogSummaries } from "../lib/data"
import { BlogPost } from "../lib/definitions"

export default async function Blogs() {
  const blogs: BlogPost[] = await fetchBlogSummaries();
  console.log(blogs);

  return (
    <ul className="text-[2em] mt-[72px] divide-y divide-black">
      {blogs.map(({ id, title }) =>
        <li
          className="py-[12px] text-[1.25em]"
          key={id}
        >
          <Link href={`/blog/${id}`}>{title}</Link>
        </li>
      )}
    </ul>
  )
}
