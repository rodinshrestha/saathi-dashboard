import Navbar from "@/components/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="dasbhoard-layout">
      <Navbar />
      {children}
    </div>
  );
}
