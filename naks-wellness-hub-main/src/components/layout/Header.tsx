
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 md:flex-none">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services, products..."
              className="w-full md:w-64 pl-8 rounded-full bg-slate-50"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-0 top-0 h-4 w-4 text-xs bg-primary text-white rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
