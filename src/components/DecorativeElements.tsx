export function FloatingOrbs() {
  return (
    <>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </>
  );
}

export function SectionDivider({ variant = 'default' }: { variant?: 'default' | 'gradient' | 'dots' }) {
  if (variant === 'gradient') {
    return (
      <div className="relative h-px my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center my-16">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-16 my-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-white">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"></div>
        </span>
      </div>
    </div>
  );
}

export function ContentBadge({ children, color = 'emerald' }: { children: React.ReactNode; color?: 'emerald' | 'blue' | 'purple' | 'teal' }) {
  const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    teal: 'bg-teal-100 text-teal-700 border-teal-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses[color]}`}>
      {children}
    </span>
  );
}

export function DecorativeCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200/50">
        {children}
      </div>
    </div>
  );
}
