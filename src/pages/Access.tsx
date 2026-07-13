import { Lock, FileText, AlertCircle, Info } from 'lucide-react';
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

export function Access() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Access & Scope</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Information about review access, scope limitations, and appropriate use of XenoFlow evaluations
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-12">
              <div className="flex items-start space-x-4">
                <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Review Access Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    XenoFlow publishes public summaries of completed evaluations. Full review materials may be subject to access limitations depending on category, scope, and evaluation context.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Review Summaries</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Published review summaries include structured findings organized by evaluation area. Summaries provide:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span>Evaluation scope and focus areas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span>Observed clarity strengths in product communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span>Identified communication gaps or unclear elements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span>Assessment context and methodology notes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Lock className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Access Materials</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Detailed evaluation documentation, raw observation data, and internal assessment materials may be subject to access restrictions. Factors affecting access include:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span>Product category and evaluation complexity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span>Presence of proprietary or confidential elements in evaluation materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span>Review methodology considerations and quality assurance requirements</span>
                      </li>
                    </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Scope Limitations</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Evaluation Boundaries</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                XenoFlow focuses exclusively on communication clarity and transparency assessment. Our evaluations are bounded by defined scope parameters:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">✓</span>
                  <div>
                    <span className="font-semibold">Time-bound:</span> Reviews capture product state at evaluation time and do not reflect subsequent changes unless noted
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">✓</span>
                  <div>
                    <span className="font-semibold">Scope-defined:</span> Each review specifies covered features, flows, and interaction points
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">✓</span>
                  <div>
                    <span className="font-semibold">Communication-focused:</span> Assessments examine clarity of information, not product quality or outcomes
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">✓</span>
                  <div>
                    <span className="font-semibold">User-facing:</span> Reviews analyze publicly accessible interfaces and documentation
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Category Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not all product categories or service types are within XenoFlow review scope. Evaluation feasibility depends on:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">→</span>
                  <span>Availability of user-accessible interfaces for evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">→</span>
                  <span>Presence of sufficient user-facing communication elements to assess</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">→</span>
                  <span>Applicability of standardized evaluation framework to product category</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">→</span>
                  <span>Alignment with XenoFlow assessment criteria and methodology</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-red-100 p-4 rounded-lg">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What XenoFlow Does Not Provide</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To ensure appropriate use of review materials, it's important to understand what XenoFlow does not offer:
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Consumer Purchasing Advice</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reviews are not intended as purchasing guidance. We do not recommend specific products or advise on product selection decisions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Product Recommendations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  XenoFlow does not create "best of" lists, top picks, or product recommendations based on review findings.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Ratings or Scores</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not assign numerical scores, star ratings, or aggregate quality metrics to reviewed products.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Certification or Approval</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reviews do not constitute certification, approval, endorsement, or quality validation of any kind.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Compliance Assessment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not evaluate regulatory compliance, legal conformance, or adherence to industry standards.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Technical Security Audits</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reviews examine communication about security features but do not assess technical security implementation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Appropriate Use</h2>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational and Research Purposes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Review materials may be used for educational purposes, academic research, or general information about product communication patterns and clarity assessment methodologies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding Communication Approaches</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reviews can help users understand how specific products structure information and communicate key details at the time of evaluation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Framework Reference</h3>
                <p className="text-gray-700 leading-relaxed">
                  Organizations developing communication standards or evaluation frameworks may reference XenoFlow methodology and assessment criteria structures.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white p-10 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Questions About Access or Scope?</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                For inquiries regarding review access, scope boundaries, or appropriate use of evaluation materials, please refer to our published framework documentation and methodology guidelines.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                XenoFlow maintains clear boundaries around evaluation scope to ensure reviews remain focused on their core purpose: assessing communication clarity and transparency in digital products.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
