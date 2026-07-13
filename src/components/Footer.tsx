import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 mt-24 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">XenoFlow</h3>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Focused on clarity, communication, and transparency in digital products and services.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Review Areas</h3>
            <ul className="text-sm space-y-2.5">
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Feature Clarity</Link></li>
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Control Visibility</Link></li>
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Onboarding Experience</Link></li>
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Ongoing Communication</Link></li>
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Payment Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Information</h3>
            <ul className="text-sm space-y-2.5">
              <li><Link to="/framework" className="text-gray-400 hover:text-emerald-400 transition-colors">Review Framework</Link></li>
              <li><Link to="/evaluation-areas" className="text-gray-400 hover:text-emerald-400 transition-colors">Evaluation Methodology</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">Independence Statement</Link></li>
              <li><Link to="/framework" className="text-gray-400 hover:text-emerald-400 transition-colors">Scope & Limitations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="text-sm space-y-2.5">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 max-w-2xl text-center md:text-left">
              XenoFlow is an independent evaluation body. All reviews are informational and do not constitute endorsements or recommendations.
            </p>
            <p className="text-sm text-gray-600">
              © 2026 XenoFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
