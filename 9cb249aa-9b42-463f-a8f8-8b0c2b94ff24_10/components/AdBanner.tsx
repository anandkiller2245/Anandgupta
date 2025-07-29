
'use client';

export default function AdBanner() {
  return (
    <div className="relative bg-gradient-to-r from-teal-600 to-orange-600 rounded-lg p-8 text-white text-center shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-orange-600/20 rounded-lg blur-xl"></div>
      <div className="relative">
        <h3 className="text-2xl font-bold mb-2">
          Free Digital Tools
        </h3>
        <p className="text-teal-100 mb-4">
          Access all our powerful tools completely free - no hidden fees or limitations
        </p>
        <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
          Start Using Tools
        </button>
      </div>
    </div>
  );
}
