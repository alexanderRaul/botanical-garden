import { createBlogPost } from "@/app/lib/actions";

export default function Page() {
  return (
    <form action={createBlogPost} className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 w-[80%] mx-auto">
        <h1 className="mb-3 text-2xl">
          New Blog Post
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="title"
            >
              Title
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="title"
                type="text"
                name="title"
                placeholder="Enter your event title"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="content"
            >
              Content
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="content"
                name="content"
                placeholder="enter your content"
                required
              />
            </div>
          </div>
        </div>
        <button>create</button>
      </div>
    </form>
  );
}
