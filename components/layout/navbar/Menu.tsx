import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const menuItems = [
  { label: "Profile", href: "/profile" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Activity", href: "/activity" },
  { label: "Analytics", href: "/analytics" },
  { label: "System", href: "/system" },
  { label: "Deployments", href: "/deployments" },
  { label: "My Settings", href: "/my-settings" },
  { label: "Team Settings", href: "/team-settings" },
  { label: "Help & Feedback", href: "/help-feedback" },
  { label: "Log Out", href: "/log-out" },
];

const Menu = () => {
  return (
    <NavbarMenu>
      {menuItems.map((item) => (
        <NavbarMenuItem key={item.label}>
          <Link
            className={`text-xl font-bold`}
            color={
              item.label === "Activity"
                ? "primary"
                : item.label === "Log Out"
                  ? "danger"
                  : "foreground"
            }
            href={item.href}
            size="lg"
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export { Menu };
