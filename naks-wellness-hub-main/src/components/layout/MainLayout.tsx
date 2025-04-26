
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <main className="px-4 py-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
