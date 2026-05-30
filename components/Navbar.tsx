import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/teams", label: "Teams" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4">
      <Link href="/" className="font-mono">
        Club C.O.D.E.
      </Link>
      <div className="flex flex-wrap justify-end gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="btn btn-sm sm:btn-md btn-outline border-white/40 text-white hover:bg-white hover:text-black font-mono"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
