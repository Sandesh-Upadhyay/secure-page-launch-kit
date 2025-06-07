import { Search, X, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"

interface SearchActionsProps {
  handleSearch: (e: React.FormEvent) => void
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export const SearchActions = ({ handleSearch, isMobileMenuOpen, toggleMobileMenu }: SearchActionsProps) => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  return (
    <div className="flex items-center space-x-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="hidden md:flex relative group">
        <input
          type="text"
          placeholder="Search products..."
          className="w-[200px] py-2 px-4 pr-10 bg-slate-800/50 border border-slate-700 rounded-lg text-white 
            placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent 
            transition-all duration-300 focus:w-[300px] search-input"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-400 
            transition-colors duration-300 focus:outline-none"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>

      {/* User Profile/Login */}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                <User className="h-5 w-5" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 border-slate-700 mt-2 w-56" align="end">
            <DropdownMenuItem 
              onClick={() => navigate('/dashboard')}
              className="text-white hover:bg-slate-700 hover:text-orange-400"
            >
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => navigate('/orders')}
              className="text-white hover:bg-slate-700 hover:text-orange-400"
            >
              My Orders
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => navigate('/settings')}
              className="text-white hover:bg-slate-700 hover:text-orange-400"
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={logout}
              className="text-red-400 hover:bg-slate-700 hover:text-red-300"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button 
          onClick={() => navigate('/login')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
            text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
        >
          Login
        </Button>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors duration-300"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}