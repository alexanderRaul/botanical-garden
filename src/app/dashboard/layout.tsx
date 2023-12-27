import Wrapper from "../ui/Wrapper";
import DashboardLinks from "../ui/DashboardLinks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="text-[4em]">Dashboard</h2>

        <DashboardLinks />

        <div className="mt-[100px]">
          {children}
        </div>
      </div>
    </Wrapper>
  )
};
