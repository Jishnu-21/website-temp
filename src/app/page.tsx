import Image from 'next/image';

export default function Home() {
  const templates = [
    {
      id: 1,
      title: "Next.js Boilerplate",
      description: "Get started with Next.js and React in seconds.",
      image: "/template1.png",
      demoUrl: "/templates/saas",
      by: "3rdshade"
    },
    {
      id: 2,
      title: "Portfolio Pro",
      description: "Professional portfolio template built with Next.js",
      image: "/template2.png",
      demoUrl: "/templates/portfolio",
      by: "3rdshade"
    }
  ];

  const filterCategories = [
    { name: 'Use Case', items: ['AI', 'Starter', 'Ecommerce', 'Blog', 'Edge Functions', 'Edge Middleware', 'Edge Config', 'Portfolio'] },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Image src="/vercel.svg" alt="Logo" width={22} height={22} className="invert" />
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white">Products</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Solutions</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Resources</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Enterprise</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Docs</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Pricing</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Dashboard</a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find your Template
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Jumpstart your app development process with pre-built solutions from 3rdshade and our community.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              <div className="mb-8">
                <h2 className="text-sm font-medium text-white mb-4">Filter Templates</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {filterCategories.map((category) => (
                <div key={category.name} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white">{category.name}</h3>
                    <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <label key={item} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 rounded border-gray-700 bg-black text-blue-500 focus:ring-0 focus:ring-offset-0" 
                        />
                        <span className="ml-2 text-sm text-gray-400">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="group relative bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="relative h-48 bg-gray-900">
                    <Image
                      src={template.image}
                      alt={template.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-1">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{template.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">by {template.by}</span>
                      <a
                        href={template.demoUrl}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Template →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
