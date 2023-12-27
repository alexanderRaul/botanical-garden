import { Suspense } from "react";
import { fetchBlogSummaries, fetchEventsSummaries } from "../lib/data"

export default function Page() {
  return (
    <div className="text-base flex gap-[5em]">
      <div className="flex-1">
        <h2 className="text-[1.5em]">Events Summaries</h2>
        <Suspense fallback={<div className="mt-[2em]">Loading Events Summaries ...</div>}>
          <EventsSummaries />
        </Suspense>
      </div>

      <div className="flex-1">
        <h2 className="text-[1.5em]">Blog Posts Summaries</h2>
        <Suspense fallback={<div className="mt-[2em]">Loading Blog Posts Sumamries ...</div>}>
          <BlogPostsSummaries />
        </Suspense>
      </div>
    </div>
  )
}

async function BlogPostsSummaries() {
  const blogsPostsSummaries = await fetchBlogSummaries();

  return (
    <>
      <ul className="divide-y divide-black mt-[2em]">
        {blogsPostsSummaries.map(({ title, publication_date, id }) =>
          <li key={id} className="flex justify-between">
            <div>{title}</div>
            <div>{new Date(publication_date).getFullYear()}</div>
          </li>
        )}
      </ul>
    </>
  )
}

async function EventsSummaries() {
  const eventsSummaries = await fetchEventsSummaries();

  return (
    <>
      <ul className="divide-y divide-black mt-[2em]">
        {eventsSummaries.map(({ title, date, id }) =>
          <li key={id} className="flex justify-between">
            <div>{title}</div>
            <div>{new Date(date).getFullYear()}</div>
          </li>
        )}
      </ul>
    </>
  )
}
