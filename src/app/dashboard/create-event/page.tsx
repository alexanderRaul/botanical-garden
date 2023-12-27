import { createEvent } from "@/app/lib/actions";

export default function Page() {
  return (
    <form action={createEvent} className="space-y-3">
      <div className="flex-1 rounded-lg sm:px-6 pb-4 sm:w-[80%] mx-auto w-[100%]">
        <h1 className="mb-3 text-2xl">
          New Event
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-base font-medium text-white"
              htmlFor="title"
            >
              Title
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md text-black py-[9px] text-center text-base placeholder:text-gray-500"
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
              className="mb-3 mt-5 block text-base text-white"
              htmlFor="content"
            >
              Content
            </label>
            <div className="relative">
              <textarea
                className="text-black w-full rounded-md border border-gray-200 text-base placeholder:text-gray-500 text-center pt-[5px]"
                id="content"
                name="content"
                placeholder="enter your content"
                required
              />
            </div>
          </div>
        </div>
        <button className="mt-4 w-full border px-2 py-1 w-fit text-sm border-gray-300 rounded-sm">
          Send
        </button>
      </div>
    </form>
  );
}
