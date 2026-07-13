import { Shield, Target, BookOpen, Scale } from 'lucide-react';
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

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About XenoFlow</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              An independent evaluation body dedicated to assessing communication clarity and transparency in digital products
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                XenoFlow was created to provide structured, independent evaluations of how clearly products communicate with users. We focus on observable communication patterns, information architecture, and user comprehension support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to contribute to greater transparency in digital product communication through systematic evaluation and public documentation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluation Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We assess how products explain features, organize controls, structure information, and communicate with users across key interaction points. Our evaluations are descriptive and time-bound.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standardized Method</h3>
                <p className="text-gray-600 leading-relaxed">
                  All reviews follow a consistent framework with predefined evaluation areas and assessment criteria. This enables comparison across products, categories, and time periods.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-emerald-600 p-4 rounded-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Independence</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  XenoFlow operates independently and maintains strict separation from commercial interests.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Independence</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not accept compensation, advertising, or any form of payment tied to review outcomes, product promotion, or vendor relationships. Reviews are conducted without financial consideration from evaluated parties.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Editorial Independence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Product vendors and service providers have no input into review content, methodology, or publication decisions. We do not coordinate with evaluated parties regarding review timing or findings.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Endorsements</h3>
                <p className="text-gray-700 leading-relaxed">
                  XenoFlow does not endorse, recommend, rank, or promote products or services. Our evaluations are descriptive assessments of communication clarity, not quality judgments or purchasing guidance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-teal-600 p-4 rounded-lg">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Review criteria, evaluation frameworks, and methodological standards are internally defined and periodically reviewed.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Framework Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  The XenoFlow evaluation framework is developed through analysis of user interaction patterns, communication best practices, and information architecture principles. Framework updates are documented and applied consistently to future reviews.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reviewer Standards</h3>
                <p className="text-gray-700 leading-relaxed">
                  Evaluations are conducted by trained reviewers following standardized protocols. Reviewers document observations systematically and apply consistent assessment criteria across all reviewed products.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reviews undergo internal verification to ensure accurate representation of observed product characteristics and adherence to evaluation framework requirements.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Don't Do</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-gray-900 mb-2">No Rankings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not rank products, assign scores, or create comparative hierarchies of quality or preference.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-gray-900 mb-2">No Recommendations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not provide purchasing advice, product recommendations, or guidance on product selection.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-gray-900 mb-2">No Certifications</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not offer certification programs, quality seals, or approval designations for products.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-gray-900 mb-2">No Consulting</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We do not provide consulting services to product vendors or advisory services related to reviewed products.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Commitment to Transparency</h2>
              <p className="text-emerald-50 text-lg leading-relaxed mb-6">
                XenoFlow is committed to operating with the same transparency we evaluate in others. Our framework, methodology, and independence standards are publicly documented.
              </p>
              <p className="text-emerald-50 leading-relaxed">
                We continuously work to ensure our evaluation processes are rigorous, consistent, and aligned with our mission to support clearer communication in digital products.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
