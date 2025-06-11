import { Search, X, Menu, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import { Command } from "cmdk"
import { Dialog } from "@/components/ui/dialog"

interface SearchActionsProps {
  handleSearch: (searchTerm: string) => void
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export const SearchActions = ({ handleSearch, isMobileMenuOpen, toggleMobileMenu }: SearchActionsProps) => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchTerm)
    setSearchOpen(false)
  }
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      {/* Search Button - Mobile & Desktop */}
      <button
        onClick={() => setSearchOpen(true)}
        className="p-2 text-slate-400 hover:text-orange-400 transition-colors duration-300"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <Command className="rounded-lg border shadow-md">
          <form onSubmit={handleSearchSubmit} className="flex items-center p-4 border-b">
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

      {/* Cart Button */}
      <Button
        onClick={() => navigate('/cart')}
        variant="ghost"
        size="icon"
        className="relative text-slate-400 hover:text-orange-400"
      >
        <ShoppingCart className="h-5 w-5" />
      </Button>

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
      <Button
        onClick={toggleMobileMenu}
        variant="ghost"
        size="icon"
        className="lg:hidden"
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