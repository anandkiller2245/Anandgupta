
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      // If no saved theme, check system preference
      if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          setIsDarkMode(true);
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          setIsDarkMode(false);
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      } else {
        // Use saved theme
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  }, []);

  const toggleTheme = (theme: 'light' | 'dark') => {
    const isDark = theme === 'dark';
    setIsDarkMode(isDark);
    
    // Apply theme immediately
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
    
    setIsThemeDropdownOpen(false);
  };

  const toolCategories = [
    { name: 'PDF Tools', href: '/tools/pdf', keywords: ['pdf', 'document', 'merge', 'split', 'compress'] },
    { name: 'Video Downloaders', href: '/tools/video', keywords: ['video', 'download', 'youtube', 'tiktok', 'instagram'] },
    { name: 'AI Tools', href: '/tools/ai', keywords: ['ai', 'artificial', 'intelligence', 'content', 'generator'] },
    { name: 'SEO Tools', href: '/tools/seo', keywords: ['seo', 'search', 'optimization', 'keyword', 'rank'] },
    { name: 'Image Tools', href: '/tools/image', keywords: ['image', 'photo', 'edit', 'resize', 'compress'] },
    { name: 'Developer Tools', href: '/tools/developer', keywords: ['code', 'json', 'format', 'minify', 'regex'] }
  ];

  // Auto search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = toolCategories.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsToolsDropdownOpen(false);
        setIsThemeDropdownOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-orange-500/10 to-teal-500/10 dark:from-teal-600/20 dark:via-orange-600/20 dark:to-teal-600/20"></div>
      <div className="relative container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200" style={{fontFamily: 'Pacifico, serif'}}>
            Digital Matrix
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 relative dropdown-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-all duration-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-500 dark:text-gray-400"></i>
              </div>
            </div>
            
            {/* Search Results */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 max-h-60 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                  >
                    <i className="ri-search-line mr-2"></i>
                    {result.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
              Home
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                All Tools
                <i className={`ri-arrow-down-s-line ml-1 transition-transform duration-200 ${isToolsDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isToolsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {toolCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                      onClick={() => setIsToolsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
              FAQ
            </Link>
            
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
              Contact
            </Link>

            {/* Theme Toggle Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-800 dark:to-orange-800 rounded-full hover:from-teal-200 hover:to-orange-200 dark:hover:from-teal-700 dark:hover:to-orange-700 shadow-sm"
              >
                <i className={`ri-${isDarkMode ? 'sun' : 'moon'}-line text-lg`}></i>
              </button>
              
              {isThemeDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <button
                    onClick={() => toggleTheme('light')}
                    className={`flex items-center w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 ${!isDarkMode ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' : ''}`}
                  >
                    <i className="ri-sun-line mr-3"></i>
                    Light Theme
                  </button>
                  <button
                    onClick={() => toggleTheme('dark')}
                    className={`flex items-center w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 ${isDarkMode ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' : ''}`}
                  >
                    <i className="ri-moon-line mr-3"></i>
                    Dark Theme
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-800 dark:to-orange-800 rounded-full"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-lg`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                Home
              </Link>
              
              {/* Mobile Tools Menu */}
              <div className="pl-4">
                <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">Tools:</div>
                {toolCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block py-1 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                Contact
              </Link>
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center space-x-3 pt-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Theme:</span>
                <button
                  onClick={() => toggleTheme('light')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center ${!isDarkMode ? 'bg-gradient-to-r from-teal-600 to-orange-600 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/30'}`}
                >
                  <i className="ri-sun-line mr-2"></i>Light
                </button>
                <button
                  onClick={() => toggleTheme('dark')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center ${isDarkMode ? 'bg-gradient-to-r from-teal-600 to-orange-600 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/30'}`}
                >
                  <i className="ri-moon-line mr-2"></i>Dark
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
