
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Stethoscope, 
  ShoppingBag, 
  Info, 
  Phone, 
  User, 
  ChevronLeft, 
  ChevronRight,
  CalendarClock,
  ShoppingCart
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Stethoscope },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Appointments", path: "/appointments", icon: CalendarClock },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={cn(
        "sidebar-container bg-sidebar flex flex-col border-r shadow-sm transition-all duration-300",
        collapsed ? "collapsed" : "expanded"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          {!collapsed && (
            <span className="text-white font-bold text-xl">NAKS Care</span>
          )}
          {collapsed && <span className="text-white font-bold text-xl">NC</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-sidebar-accent"
          onClick={toggleSidebar}
        >
          {collapsed ? (
            <ChevronRight className="h-6 w-6" />
          ) : (
            <ChevronLeft className="h-6 w-6" />
          )}
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent",
                  location.pathname === item.path
                    ? "bg-sidebar-accent"
                    : "transparent",
                  collapsed ? "justify-center" : ""
                )}
              >
                <item.icon className="h-5 w-5 text-white" />
                {!collapsed && (
                  <span className="text-white">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t p-4">
        <Link
          to="/account"
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent",
            location.pathname === "/account" ? "bg-sidebar-accent" : "transparent",
            collapsed ? "justify-center" : ""
          )}
        >
          <User className="h-5 w-5 text-white" />
          {!collapsed && <span className="text-white">Account</span>}
        </Link>
        
        <Link
          to="/cart"
          className={cn(
            "flex items-center gap-3 p-2 mt-2 rounded-lg hover:bg-sidebar-accent",
            location.pathname === "/cart" ? "bg-sidebar-accent" : "transparent",
            collapsed ? "justify-center" : ""
          )}
        >
          <ShoppingCart className="h-5 w-5 text-white" />
          {!collapsed && <span className="text-white">Cart</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
