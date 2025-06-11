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
    <nav className="flex flex-row items-center gap-4 overflow-x-auto py-2 w-full justify-center">
      <button
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          window.location.href = '/'
        }}
        className="text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer text-lg"
      >
        Home
      </button>

      {/* Shop Dropdown */}
      <button
        onClick={() => scrollToSection('products')}
        className="text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer text-lg"
      >
        Shop
      </button>

      {/* Deals with sparkle icon */}
      <button
        onClick={() => scrollToSection('products')}
        className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors duration-300 group text-lg"
      >
        <span>Deals</span>
        <Sparkles className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
      </button>

            
      {/* Policies Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors duration-300 text-lg">
          <span>Support</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border-gray-200 p-2 min-w-[200px] shadow-lg">
          <DropdownMenuItem 
            onClick={() => scrollToSection("cookies")}
            className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            Cookies Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("privacy")}
            className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("refund")}
            className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            Refund Policy
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => scrollToSection("terms")}
            className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            Terms & Conditions
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}