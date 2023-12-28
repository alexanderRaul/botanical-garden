export default function Wrapper({ children }: any) {
  return (
    <div className="px-[16px] md:px-[32px]" data-testid="wrapper">
      {children}
    </div>
  )
}
