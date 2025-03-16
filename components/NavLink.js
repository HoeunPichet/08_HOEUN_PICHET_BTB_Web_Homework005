import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={
          pathname.startsWith(href)
            ? "text-green-600 font-bold"
            : "text-white font-normal"
        }
      >
        {children}
      </Link>
    </>
  );
}
