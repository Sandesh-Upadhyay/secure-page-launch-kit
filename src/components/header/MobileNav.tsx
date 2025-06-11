
import { motion, AnimatePresence } from "framer-motion";
import { Home, ShoppingBag, ShoppingCart, User, Heart, Menu, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Command } from "@/components/ui/command";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (term: string) => void;
}

const MobileNav = ({ isOpen, onClose, onSearch }: MobileNavProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchOpen(false);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Heart, label: "Wishlist", path: "/wishlist" },
    { icon: ShoppingCart, label: "Cart", path: "/cart" },
    // Only show these items if user is logged in
    ...(user
      ? [
          { icon: User, label: "Dashboard", path: "/dashboard" },
          { icon: User, label: "Settings", path: "/settings" },
        ]
      : [{ icon: User, label: "Login", path: "/login" }]),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-slate-900 border-l border-slate-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-slate-800">
              <Button
                variant="outline"
                className="w-full justify-start text-slate-400 hover:text-white"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="mr-2 h-4 w-4" />
                Search products...
              </Button>
            </div>

            {/* Search Dialog */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <Command className="rounded-lg border shadow-md">
                <form onSubmit={handleSearch} className="flex items-center p-4 border-b">
                  <Search className="h-5 w-5 text-slate-400 mr-2" />
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 outline-none bg-transparent placeholder:text-slate-400"
                    placeholder="Search products..."
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      className="text-slate-400 hover:text-slate-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </form>
              </Command>
            </Dialog>

            {/* Navigation Links */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={() => handleNavigation(item.path)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}

              {/* Logout Button (Only show if user is logged in) */}
              {user && (
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-slate-800"
                  onClick={handleLogout}
                >
                  <X className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
