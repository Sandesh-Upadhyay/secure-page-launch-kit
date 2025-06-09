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
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors duration-300">
          <span>Shop</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 border-slate-700 p-2">
          <DropdownMenuItem className="text-white hover:bg-slate-700 hover:text-orange-400">
            Antivirus
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-slate-700 hover:text-orange-400">
            Internet Security
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-slate-700 hover:text-orange-400">
            VPN Services
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Deals with sparkle icon */}
      <a href="/deals" className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300 group">
        <span>Deals</span>
        <Sparkles className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
      </a>

      <a href="/contact" className="text-white hover:text-orange-400 transition-colors duration-300">
        Contact
      </a>
      
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