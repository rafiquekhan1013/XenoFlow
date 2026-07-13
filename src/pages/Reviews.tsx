import { Calendar, FileText, Tag, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
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

interface Review {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  scope: string;
  evaluationAreas: string[];
  clarityStrengths: string[];
  communicationGaps: string[];
}

const sampleReviews: Review[] = [
  {
    id: 'CPR-2026-001',
    title: 'Digital Collaboration Platform: Clarity Assessment',
    category: 'Productivity Software',
    publishDate: 'January 2026',
    scope: 'Evaluation of onboarding flow, feature discovery, and control visibility in a team collaboration platform',
    evaluationAreas: [
      'Information Clarity',
      'Control Visibility',
      'Onboarding Experience',
      'Communication Consistency'
    ],
    clarityStrengths: [
      'Clear feature labeling in main navigation with descriptive tooltips',
      'Consistent terminology across web and mobile interfaces',
      'Structured onboarding sequence with progress indicators',
      'Accessible privacy settings with plain-language explanations'
    ],
    communicationGaps: [
      'Workspace permission model explanations rely on external documentation',
      'Feature limitations for free tier accounts not visible until attempted use',
      'Integration setup processes lack upfront requirements disclosure',
      'Data retention policies require navigation through multiple settings layers'
    ]
  },
  {
    id: 'CPR-2026-002',
    title: 'Financial Management Application: Communication Review',
    category: 'Financial Technology',
    publishDate: 'January 2026',
    scope: 'Assessment of payment flow clarity, fee disclosure, and account management transparency in a personal finance platform',
    evaluationAreas: [
      'Information Clarity',
      'Payment Transparency',
      'Control Visibility',
      'Ongoing Communication'
    ],
    clarityStrengths: [
      'Transaction details displayed with clear categorization and timestamps',
      'Fee structures explained during account type selection',
      'Notification preferences organized by event type with examples',
      'Account closure process includes multi-step confirmation with clear consequences'
    ],
    communicationGaps: [
      'Automated transfer rules difficult to locate after initial setup',
      'Currency conversion rates not displayed until final confirmation step',
      'Third-party data access permissions presented in technical language',
      'Account statement generation options require support documentation consultation'
    ]
  },
  {
    id: 'CPR-2025-048',
    title: 'Learning Management System: Interface Clarity Study',
    category: 'Educational Technology',
    publishDate: 'December 2025',
    scope: 'Review of course navigation, progress tracking, and instructor communication clarity in an online learning platform',
    evaluationAreas: [
      'Information Clarity',
      'Navigation Structure',
      'Progress Indicators',
      'Communication Consistency'
    ],
    clarityStrengths: [
      'Course progress clearly visualized with completion percentages',
      'Assignment due dates prominently displayed with timezone indicators',
      'Instructor response expectations clearly stated in course policies',
      'Mobile app functionality parity clearly communicated upfront'
    ],
    communicationGaps: [
      'Grading rubrics not accessible until after assignment submission',
      'Certification requirements scattered across multiple pages',
      'Discussion forum notification settings use inconsistent terminology',
      'Course prerequisite validation occurs after enrollment initiation'
    ]
  }
];

export function Reviews() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50/30 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-emerald-900 to-green-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <FloatingOrbs />

        <div className="relative max-w-5xl mx-auto px-6 mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 mr-2 text-teal-300" />
              <span className="text-sm font-medium text-teal-100">Evaluation Archive</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Published <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Structured evaluations of communication clarity and transparency across digital products and services
            </p>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 -mt-1">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative group mb-16">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl opacity-70"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-3 rounded-xl">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">About Published Reviews</h2>
                    <ContentBadge color="teal">Structured Framework</ContentBadge>
                  </div>
                </div>
                <div className="pl-16 space-y-3">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Each review provides a structured summary of how clearly a product communicates with users. Reviews are identified by category and focus area rather than promotional titles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    All reviews follow the standardized XenoFlow framework and are time-bound to the evaluation period. They do not constitute endorsements, recommendations, or quality assessments.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {sampleReviews.map((review, index) => (
              <AnimatedSection key={review.id} delay={index * 100}>
                <article className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>

                  <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 px-8 py-8 border-b border-gray-200/50">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl"></div>

                      <div className="relative flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-teal-500 rounded-lg blur-md opacity-50"></div>
                              <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-2 rounded-lg">
                                <FileText className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <ContentBadge color="teal">{review.id}</ContentBadge>
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{review.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50">
                              <Tag className="w-4 h-4 mr-2 text-teal-600" />
                              <span className="text-gray-700 font-medium">{review.category}</span>
                            </div>
                            <div className="flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50">
                              <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                              <span className="text-gray-700 font-medium">{review.publishDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-8">
                      <div className="relative pl-6 border-l-4 border-teal-500/30">
                        <div className="absolute left-0 top-0 w-1 h-8 bg-gradient-to-b from-teal-500 to-transparent"></div>
                        <h4 className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                          Scope Overview
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-lg">{review.scope}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          Evaluation Areas Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {review.evaluationAreas.map((area) => (
                            <span
                              key={area}
                              className="relative group/badge"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-20 group-hover/badge:opacity-40 transition-opacity"></div>
                              <div className="relative px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-semibold rounded-full border border-emerald-200/50">
                                {area}
                              </div>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl -z-10"></div>
                          <div className="p-6 bg-white rounded-xl border border-emerald-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider">
                                Clarity Strengths
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {review.clarityStrengths.map((strength, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                                  </div>
                                  <span>{strength}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl -z-10"></div>
                          <div className="p-6 bg-white rounded-xl border border-amber-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg">
                                <AlertTriangle className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider">
                                Communication Gaps
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {review.communicationGaps.map((gap, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                                  </div>
                                  <span>{gap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <p className="text-xs text-gray-500 italic leading-relaxed">
                          This review was conducted using the XenoFlow standardized evaluation framework and represents observations from the stated evaluation period. It does not constitute an endorsement or recommendation.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Review Publication Schedule</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                New reviews are published as evaluations are completed. Publication frequency varies based on product category, evaluation complexity, and resource availability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Reviews may be updated if significant product changes warrant re-evaluation. Updated reviews maintain the original publication identifier with version notation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
