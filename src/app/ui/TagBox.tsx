export default function TagBox({ tag }: any) {
  return (
    <div className="flex items-center z-[3] relative ">
      <span className="md:text-[1.6em] text-[4.25em]">/</span>
      <div className="ml-[12px] md:text-[1em] text-[4.25em]">{tag}</div>
    </div>
  );
}
