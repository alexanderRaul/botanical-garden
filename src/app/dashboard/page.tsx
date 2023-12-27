import { Suspense } from "react";
import { fetchBlogSummaries, fetchEventsSummaries } from "../lib/data"

export default function Page() {
  return (
    <div className="text-base flex gap-[2.5em] sm:flex-row flex-col">
      <div className="sm:flex-1">
        <h2 className="sm:text-[1.5em] text-[1.7em]">Events Summaries</h2>
        <Suspense fallback={<div className="mt-[2.2em]">Loading Events Summaries ...</div>}>
          <EventsSummaries />
        </Suspense>
      </div>

      <div className="sm:flex-1">
        <h2 className="sm:text-[1.5em] text-[1.7em]">Blog Posts Summaries</h2>
        <Suspense fallback={<div className="mt-[2.2em]">Loading Blog Posts Sumamries ...</div>}>
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
      <ul className="divide-y mt-[2em]">
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
      <ul className="divide-y mt-[2em]">
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
