import { Target, CheckSquare, AlertCircle, BarChart3, Sparkles, Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FloatingOrbs, ContentBadge } from '../components/DecorativeElements';

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

export function Framework() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <FloatingOrbs />

        <div className="relative max-w-4xl mx-auto px-6 mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Layers className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-100">Evaluation Methodology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Review <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Framework</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              A standardized evaluation structure enabling consistent, comparable assessments of clarity and transparency
            </p>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </section>

      <section className="py-20 -mt-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-70"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Framework Overview</h2>
                    <ContentBadge color="emerald">Standardized Approach</ContentBadge>
                  </div>
                </div>
                <div className="pl-16 space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    XenoFlow applies a standardized review framework to assess clarity and transparency across products and services. Each review follows the same structure, enabling comparison across categories and time.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The framework is designed to be descriptive rather than prescriptive, focusing on observable communication patterns and user-facing information architecture.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 rotate-3">
                  <Layers className="w-8 h-8 text-white -rotate-3" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Evaluation Structure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four core assessment areas that form the foundation of every XenoFlow review
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            <AnimatedSection delay={100}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-200">
                        <Target className="w-8 h-8 text-emerald-700" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">Information Clarity</h3>
                        <ContentBadge color="emerald">Core Area</ContentBadge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Assessment of how product features, capabilities, and limitations are explained to users. Examines language precision, contextual positioning, and comprehension support.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Feature descriptions and labeling patterns</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Terminology consistency across interfaces</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Explanation of conditional behaviors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-teal-100">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl blur-md opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-2xl border border-teal-200">
                        <CheckSquare className="w-8 h-8 text-teal-700" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">Control Visibility</h3>
                        <ContentBadge color="teal">Core Area</ContentBadge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Evaluation of how easily users can locate, understand, and manage available controls. Reviews navigational structure, settings organization, and action discoverability.
                    </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-teal-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Settings and preferences accessibility</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-teal-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Control grouping and categorization</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-teal-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Action confirmation indicators</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-md opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200">
                        <AlertCircle className="w-8 h-8 text-blue-700" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">Communication Consistency</h3>
                        <ContentBadge color="blue">Core Area</ContentBadge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Analysis of messaging coherence across different user touchpoints and interaction contexts. Examines alignment between initial representations and ongoing experience.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Marketing to product alignment</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Communication tone consistency</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Help documentation accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-md opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-200">
                        <BarChart3 className="w-8 h-8 text-purple-700" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">Comprehension at Key Points</h3>
                        <ContentBadge color="purple">Core Area</ContentBadge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Assessment of information delivery during critical user decisions or transitions. Focuses on timing, completeness, and cognitive load at consequential moments.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Onboarding information sequencing</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Pre-commitment disclosure patterns</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-50/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                          <span className="text-sm text-gray-700">Communication timing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Review Method</h2>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Structured Evaluation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reviews are conducted through systematic observation and documentation of user-facing elements. Evaluators follow predefined protocols to ensure consistency and minimize subjective interpretation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    <span>User-facing language and explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    <span>Navigation and discoverability patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    <span>Consistency of messaging across user flows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    <span>Information architecture and hierarchy</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scope Boundaries</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reviews are time-bound and limited in scope. They capture product state at a specific moment and do not track post-review changes unless explicitly noted in updated evaluations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Reviews Do Not Measure</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                XenoFlow focuses exclusively on communication clarity and transparency. Our evaluations do not assess:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">×</span>
                  <span>Product quality, performance, or value propositions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">×</span>
                  <span>Commercial competitiveness or market positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">×</span>
                  <span>Regulatory compliance or legal conformance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">×</span>
                  <span>Business outcomes, user satisfaction, or financial results</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
