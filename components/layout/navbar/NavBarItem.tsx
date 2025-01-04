import { Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const navbarItems = [
  { label: "Features", href: "/features" },
  { label: "Customers", href: "/customers" },
  { label: "Integrations", href: "/integrations" },
];

const NavBarItem = () => {
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden gap-4 lg:flex" justify="center">
      {navbarItems.map((item) => (
        <NavbarItem key={item.label}>
          <Link
            className={`${
              pathname === item.href ? "text-primary" : "text-foreground"
            } font-bold`}
            href={item.href}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
};

export { NavBarItem };
