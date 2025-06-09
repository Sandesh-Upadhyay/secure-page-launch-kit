import { ChevronDown, Sparkles } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
      <button
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          window.location.href = '/'
        }}
        className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"
      >
        Home
      </button>

      {/* Shop Dropdown */}
      <button
        onClick={() => scrollToSection('products')}
        className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer text-lg font-semibold"
        style={{ minWidth: 80 }}
      >
        Shop
      </button>

      {/* Deals with sparkle icon */}
      <button
        onClick={() => scrollToSection('products')}
        className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300 group text-lg font-semibold"
        style={{ minWidth: 80 }}
      >
        <span>Deals</span>
        <Sparkles className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
      </button>

      <button
        onClick={() => window.open('https://wa.me/18775933166?text=Hi%20I%20need%20help%20with%20my%20order', '_blank')}
        className="text-white hover:text-green-500 transition-colors duration-300 bg-green-600 hover:bg-green-700 rounded-full px-5 py-2 ml-2 text-lg font-semibold shadow-md"
        style={{ minWidth: 80 }}
        aria-label="Contact on WhatsApp"
      >
        Contact
      </button>
      
      {/* Policies Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors duration-300">
          <span>Support</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 border-slate-700 p-2 min-w-[200px]">
          <DropdownMenuItem 
            onClick={() => scrollToSection("cookies")}
            className="text-white hover:bg-slate-700 hover:text-orange-400 transition-colors"
          >
            Cookies Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("privacy")}
            className="text-white hover:bg-slate-700 hover:text-orange-400 transition-colors"
          >
            Privacy Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("refund")}
            className="text-white hover:bg-slate-700 hover:text-orange-400 transition-colors"
          >
            Refund Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("terms")}
            className="text-white hover:bg-slate-700 hover:text-orange-400 transition-colors"
          >
            Terms & Conditions
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}