import { fetchBlogById } from "@/app/lib/data";
import Wrapper from "@/app/ui/Wrapper";

export default async function Page({ params }: { params: any }) {
  const { title, publication_date, content } = await fetchBlogById(params.id);
  const [date] = new Date(publication_date).toISOString().split('T');

  return (
    <Wrapper>
      <div className="py-[72px] sm:w-[125ch] mx-auto text-center w-full">
        <h2 className="text-[7.5em] sm:text-[5em] mt-[1em]">{title}</h2>
        <h3 className="text-[4.2em] sm:text-[2em] mt-[.5em]">{date}</h3>
        <p className="text-[4em] sm:text-[1.5em] mt-[2em]">{content}</p>
      </div>
    </Wrapper>
  )
}
