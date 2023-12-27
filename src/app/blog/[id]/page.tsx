import { fetchBlogById } from "@/app/lib/data";
import Wrapper from "@/app/ui/Wrapper";

export default async function Page({ params }: { params: any }) {
  const { title, publication_date, content } = await fetchBlogById(params.id);
  const date = new Date(publication_date).getFullYear();

  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="text-[5em] mb-[20px]">{title}</h2>
        <h3 className="text-[4.5em] mb-[15px]">{date}</h3>
        <p className="text-[3.5em] mt-[182px]">{content}</p>
      </div>
    </Wrapper>
  )
}
