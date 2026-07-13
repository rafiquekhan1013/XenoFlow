import { Link } from 'react-router-dom';
import { FileText, Eye, MessageSquare, CheckCircle, ArrowRight, Users, CreditCard, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Independent reviews focused on{' '}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    clarity and transparency
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-xl md:text-2xl text-emerald-100/90 leading-relaxed mb-10">
                  XenoFlow publishes structured evaluations examining how clearly emerging digital products and services communicate features, controls, and key information to users.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/framework"
                    className="group inline-flex items-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg shadow-emerald-950/30 hover:shadow-xl hover:shadow-emerald-950/40 hover:-translate-y-0.5"
                  >
                    View Review Framework
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/reviews"
                    className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Browse Reviews
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={600}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-emerald-950/50">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional team collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About XenoFlow
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                XenoFlow is an independent review body focused on usability, communication clarity, and transparency.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our reviews assess how users encounter and understand critical product information, with an emphasis on onboarding flows, control visibility, and ongoing account interactions.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Standard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not rank, endorse, or promote products. Reviews are designed to be descriptive, structured, and comparable across categories and time periods.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Review
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                XenoFlow evaluates how products communicate and structure key elements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0}>
              <div className="group relative bg-white p-6 rounded-2xl border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-emerald-700" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Feature Explanations</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    How features are described, labeled, and contextualized for users at key touchpoints
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="group relative bg-white p-6 rounded-2xl border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-teal-100 to-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-teal-700" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Control Visibility</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    User controls and settings visibility throughout the product experience
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative bg-white p-6 rounded-2xl border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Onboarding Clarity</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Information presentation during account setup and early-use phases
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="group relative bg-white p-6 rounded-2xl border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-cyan-700" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Communication</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Consistency and transparency of messaging about limitations and conditions
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reviews focus on presentation and usability, not outcomes or performance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Five Core Evaluation Areas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each review examines products across these standardized assessment categories to provide comprehensive, comparable evaluations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <AnimatedSection delay={0}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <FileText className="w-8 h-8 text-emerald-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Feature Clarity</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Assessment of how features are explained, labeled, and contextualized throughout the product experience
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Labeling and terminology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Contextual explanations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Capability communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <Eye className="w-8 h-8 text-teal-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Control Visibility</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Evaluation of how easily users can locate, understand, and manage available controls across the product
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Settings accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Control organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Action consequences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Onboarding Experience</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Analysis of information clarity during account setup, initial configuration, and early-use phases
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Account creation flow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Initial configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Feature introduction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-violet-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <MessageCircle className="w-8 h-8 text-violet-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Communication</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Assessment of consistency and transparency in messaging during continued product use
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <span>Notification clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <span>Change communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <span>Support documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-green-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Payments & Transactions</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Evaluation of how financial actions, charges, and timelines are explained to users
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Pricing transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Billing timeline communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Refund and cancellation policies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center">
              <Link
                to="/evaluation-areas"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Explore Detailed Evaluation Criteria
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-12 shadow-2xl shadow-emerald-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>

            <AnimatedSection>
              <div className="relative max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium text-emerald-100">Commitment to Transparency</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Independent and Structured
                </h2>
                <p className="text-xl text-emerald-50/90 leading-relaxed mb-8">
                  XenoFlow operates independently and applies a consistent evaluation framework across all reviews. We do not accept compensation tied to review outcomes and do not rank or endorse products.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Learn more about our independence
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
