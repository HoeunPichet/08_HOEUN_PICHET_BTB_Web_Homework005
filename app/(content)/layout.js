import NavBar from "@/components/Navbar";

export default function ContentLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="bg-slate-800">{children}</div>
    </>
  );
}
