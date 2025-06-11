
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  query: string;
  onSelect: (suggestion: string) => void;
}

const commonSearches = [
  "Antivirus software",
  "Internet security",
  "Norton security",
  "McAfee total protection",
  "Avast premium",
  "Bitdefender",
  "VPN service",
  "Malware protection",
  "Password manager",
  "Security suite",
];

const productCategories = [
  "Antivirus",
  "Internet Security",
  "Total Security",
  "VPN",
  "Password Managers",
  "Mobile Security",
  "Business Security",
];

export const SearchSuggestions = ({ query, onSelect }: SearchSuggestionsProps) => {
  const filteredSearches = commonSearches.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  const filteredCategories = productCategories.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  if (!query) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50"
    >
      {/* Popular Searches */}
      {filteredSearches.length > 0 && (
        <div className="p-2">
          <div className="px-3 py-2 text-sm text-slate-400">Popular Searches</div>
          {filteredSearches.map((suggestion, index) => (
            <button
              key={suggestion}
              onClick={() => onSelect(suggestion)}
              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-slate-700 rounded-md transition-colors"
            >
              <Search className="h-4 w-4 text-slate-400" />
              <span className="text-slate-200">{suggestion}</span>
            </button>
          ))}
        </div>
      )}

      {/* Categories */}
      {filteredCategories.length > 0 && (
        <div className="border-t border-slate-700 p-2">
          <div className="px-3 py-2 text-sm text-slate-400">Categories</div>
          {filteredCategories.map((category, index) => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-slate-700 rounded-md transition-colors"
            >
              <span className="h-4 w-4 flex items-center justify-center text-slate-400 text-xs">#</span>
              <span className="text-slate-200">{category}</span>
            </button>
          ))}
        </div>
      )}

      {filteredSearches.length === 0 && filteredCategories.length === 0 && (
        <div className="p-4 text-center text-slate-400">
          No suggestions found
        </div>
      )}
    </motion.div>
  );
};

export default SearchSuggestions;
