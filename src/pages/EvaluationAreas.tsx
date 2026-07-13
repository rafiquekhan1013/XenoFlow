import { FileText, Eye, Users, MessageCircle, CreditCard } from 'lucide-react';
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

export function EvaluationAreas() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Evaluation Areas</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Defined assessment categories used to structure product reviews and enable cross-product comparison
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-12">
              <p className="text-gray-700 leading-relaxed">
                XenoFlow organizes evaluations around five core assessment areas. Each area examines specific aspects of how products communicate with users, focusing on clarity, transparency, and user comprehension.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <FileText className="w-8 h-8 text-emerald-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Feature Clarity</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Assessment of how features are explained, labeled, and contextualized for users throughout their interaction with the product.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Focus Areas</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-emerald-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Labeling and Terminology</h4>
                        <p className="text-gray-600">Consistency and clarity of feature names, button labels, and menu items</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-emerald-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Contextual Explanations</h4>
                        <p className="text-gray-600">Availability and quality of in-context help, tooltips, and feature descriptions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-emerald-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Capability Communication</h4>
                        <p className="text-gray-600">How feature capabilities and limitations are communicated before and during use</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-emerald-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Progressive Disclosure</h4>
                        <p className="text-gray-600">Appropriateness of information timing and detail level for user expertise</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Scope</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Feature clarity reviews examine primary user pathways and core functionality explanations. They do not assess feature usefulness, design aesthetics, or technical implementation quality.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <Eye className="w-8 h-8 text-teal-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Control Visibility</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Evaluation of how easily users can locate, understand, and manage available controls across the product experience.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Focus Areas</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Settings Accessibility</h4>
                        <p className="text-gray-600">Ease of locating and navigating account, privacy, and preference settings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Control Organization</h4>
                        <p className="text-gray-600">Logical grouping and categorization of related settings and actions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Action Consequences</h4>
                        <p className="text-gray-600">Clarity of what happens when controls are adjusted or actions are taken</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Reversibility Communication</h4>
                        <p className="text-gray-600">Information about whether actions can be undone or settings restored</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Scope</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Control visibility reviews focus on discoverability and comprehension of user-facing controls. They do not evaluate the appropriateness of available options or technical functionality.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <Users className="w-8 h-8 text-blue-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Onboarding Experience</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Analysis of information clarity during account setup, initial configuration, and early-use phases.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Focus Areas</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Account Creation Flow</h4>
                        <p className="text-gray-600">Clarity of requirements, steps, and commitments during signup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Initial Configuration</h4>
                        <p className="text-gray-600">Explanation of setup options and their implications for product use</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Feature Introduction</h4>
                        <p className="text-gray-600">How and when core features are introduced to new users</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Getting Started Resources</h4>
                        <p className="text-gray-600">Availability and clarity of initial guidance and help materials</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Scope</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Onboarding reviews examine the clarity of initial user experiences. They do not assess onboarding effectiveness, conversion rates, or user satisfaction outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <MessageCircle className="w-8 h-8 text-violet-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Ongoing Communication</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Assessment of consistency and transparency in messaging during continued product use.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Focus Areas</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-violet-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Notification Clarity</h4>
                        <p className="text-gray-600">Comprehensibility of alerts, updates, and system messages</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-violet-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Change Communication</h4>
                        <p className="text-gray-600">How product updates, policy changes, and feature modifications are communicated</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-violet-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Support Documentation</h4>
                        <p className="text-gray-600">Accuracy, currency, and accessibility of help resources</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-violet-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Consistency Across Channels</h4>
                        <p className="text-gray-600">Alignment of messaging across web, mobile, email, and other touchpoints</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Scope</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Ongoing communication reviews examine message clarity and consistency. They do not evaluate communication frequency, support responsiveness, or user engagement levels.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <CreditCard className="w-8 h-8 text-green-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Payments & Transactions</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Evaluation of how financial actions, charges, and timelines are explained to users.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Focus Areas</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Pricing Transparency</h4>
                        <p className="text-gray-600">Clarity of costs, fees, and charges before commitment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Billing Timeline Communication</h4>
                        <p className="text-gray-600">Explanation of when charges occur and billing cycle structure</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Transaction Confirmation</h4>
                        <p className="text-gray-600">Clarity of payment confirmations and receipt information</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Refund and Cancellation Policies</h4>
                        <p className="text-gray-600">Accessibility and clarity of financial policy explanations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Scope</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Payment transparency reviews assess how financial information is communicated. They do not evaluate pricing fairness, transaction speed, value for money, or payment security measures.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
