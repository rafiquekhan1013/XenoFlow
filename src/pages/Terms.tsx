const getSiteDisplayName = () => {
  const site = (import.meta.env.VITE_SITE_NAME || "").split(".")[0] || "";
  return site ? site.charAt(0).toUpperCase() + site.slice(1).toLowerCase() : "";
};

export default function Terms() {
  const siteName = getSiteDisplayName() || "XenoFlow";
  return (
    <div className="max-w-4xl mx-auto" id="terms">
      <section className="py-12 border-b-2 border-emerald-200 mb-12">
        <h1 className="mb-4 text-4xl text-gray-900">Terms of Service &amp; Participant Acknowledgement</h1>
        <div className="h-1 w-20 bg-emerald-600 mb-6"></div>
        <p className="text-xl text-gray-600 leading-relaxed">Effective Date: March 1, 2026</p>
      </section>
      <article className="space-y-6 text-gray-700 leading-relaxed">
        <p>{siteName} Research Inc. (&quot;{siteName}&quot;) is an independent digital systems research and workflow analysis organization. These Terms of Service and Participant Acknowledgement (the &quot;Agreement&quot;) govern your access to and participation in any {siteName} research initiative, survey, study, review, or structured evaluation (collectively, the &quot;Research Programs&quot;).</p>
        <p>By enrolling in or participating in any Research Program, you confirm that you have read, understood, and agreed to this Agreement.</p>
        <p>{siteName} and the participant are each referred to as a &quot;Party&quot; and together as the &quot;Parties.&quot;</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4 first:mt-0">1. Purpose and Nature of {siteName} Research</h2>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1.1 Scope of Services</h3>
        <p>{siteName} conducts structured research focused on digital system workflows, interface logic, process sequencing, user clarity, and transparency within regulated or age-restricted digital environments.</p>
        <p>Research activities may include:</p>
        <ul>
          <li>Account registration flow evaluation</li>
          <li>Identity verification sequencing</li>
          <li>Deposit and withdrawal workflow mapping</li>
          <li>Interface logic testing</li>
          <li>Platform stability analysis</li>
          <li>Customer support access review</li>
          <li>Control tool visibility assessments</li>
          <li>Communication clarity reviews</li>
        </ul>
        <p>Findings may be anonymized, aggregated, synthesized, and analyzed for internal or third-party research reporting purposes.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1.2 What {siteName} Does Not Do</h3>
        <p>{siteName} is not a gambling operator, sportsbook, casino, gaming platform, wagering service, payment processor, financial institution, or promotional intermediary.</p>
        <p>{siteName} does not:</p>
        <ul>
          <li>Operate betting or gaming platforms</li>
          <li>Accept wagers or process deposits</li>
          <li>Offer inducements, bonuses, or incentives</li>
          <li>Facilitate financial transactions</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1.3 Excluded Content</h3>
        <p>{siteName} Research Programs do not evaluate, compare, promote, or analyze bonuses, inducements, promotional offers, or commercial incentives of any kind.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">2. Independence and Non-Affiliation</h2>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.1 Independent Operation</h3>
        <p>{siteName} operates independently and is not owned by, affiliated with, controlled by, or contracted to any third-party platform or operator reviewed within its research scope.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.2 No Compensation from Operators</h3>
        <p>{siteName} does not receive referral fees, commissions, revenue share, performance payments, or other financial consideration from any platform referenced within Research Programs.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">3. Research Standards and Compliance</h2>
        <p>{siteName} maintains internal research governance procedures designed to:</p>
        <ul>
          <li>Verify age eligibility</li>
          <li>Protect data integrity</li>
          <li>Support ethical research practices</li>
          <li>Maintain professional research standards</li>
        </ul>
        <p>These controls are consistent with industry norms applicable to independent market research organizations.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">4. Compensation Framework</h2>
        <p>Any compensation offered by {siteName} is provided solely in exchange for a participant&apos;s time, structured feedback, and analytical contribution.</p>
        <p>Compensation:</p>
        <ul>
          <li>Is not contingent upon wagering</li>
          <li>Is not linked to deposits</li>
          <li>Is not tied to any third-party promotional offer</li>
          <li>Is not dependent upon commercial activity</li>
        </ul>
        <p>{siteName} retains sole discretion to determine compensation amounts, eligibility, and payment timing. Compensation may be withheld for incomplete, misleading, inaccurate, or non-compliant submissions.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">5. Confidentiality Obligations</h2>
        <p>Participants may encounter confidential research materials, methodologies, platform evaluation frameworks, or internal analysis structures.</p>
        <p>Such information:</p>
        <ul>
          <li>Must not be disclosed</li>
          <li>Must not be reproduced</li>
          <li>Must not be shared</li>
          <li>May only be used for the purpose of research participation</li>
        </ul>
        <p>These confidentiality obligations survive termination of participation.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">6. Intellectual Property Rights</h2>
        <p>All research materials, responses, structured evaluations, datasets, notes, analyses, and resulting outputs generated through participation in {siteName} Research Programs are the exclusive property of {siteName}.</p>
        <p>By participating, you irrevocably assign to {siteName} all rights, title, and interest in such materials and waive any moral rights where legally permissible.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">7. Participant Representations</h2>
        <p>By participating, you represent and confirm:</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7.1 Age and Legal Capacity</h3>
        <p>You are at least nineteen (19) years of age and legally capable of entering into this Agreement. {siteName} does not knowingly engage individuals under this age threshold.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7.2 Independent Status</h3>
        <p>You are participating solely in your personal capacity. Nothing in this Agreement creates an employment, agency, partnership, fiduciary, or advisory relationship.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7.3 Voluntary Participation</h3>
        <p>Participation is voluntary. You may discontinue participation at any time. {siteName} does not require participants to deposit funds, place wagers, or engage commercially with any third-party service.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7.4 No Advice</h3>
        <p>{siteName} does not provide gambling, financial, legal, or investment advice and does not recommend any third-party platforms.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">8. Responsible Engagement Position</h2>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">8.1 Research Context Only</h3>
        <p>Research Programs are conducted strictly for analytical purposes and are not designed to encourage or promote gambling activity.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">8.2 Informational Resources</h3>
        <p>{siteName} may provide access to general responsible engagement information or publicly available consumer protection resources. Such materials are informational only.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">8.3 No Monitoring Obligation</h3>
        <p>{siteName} does not monitor participant behavior outside the scope of research and does not provide counseling, intervention, or treatment services. Responsibility for personal decisions remains solely with the participant.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, {siteName} shall not be liable for indirect, incidental, consequential, exemplary, or punitive damages arising out of participation in Research Programs.</p>
        <p>{siteName}&apos;s total aggregate liability shall not exceed the total compensation actually paid to the participant, if any.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">10. Indemnification</h2>
        <p>You agree to indemnify and hold harmless {siteName} and its directors, officers, employees, contractors, and affiliates from any claims arising from:</p>
        <ul>
          <li>Your participation</li>
          <li>Your breach of this Agreement</li>
          <li>Any misrepresentation made by you</li>
          <li>Any actions taken independently outside the research scope</li>
        </ul>
        <p>This obligation survives termination.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">11. Suspension and Disqualification</h2>
        <p>{siteName} may suspend, terminate, or disqualify participation at its discretion, including for:</p>
        <ul>
          <li>Non-compliance</li>
          <li>Misrepresentation</li>
          <li>Conduct that compromises research integrity</li>
        </ul>
        <p>Termination may result in forfeiture of unpaid compensation.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">12. Privacy and Data Protection</h2>
        <p>{siteName} collects and processes personal information in accordance with applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
        <p>Information may be anonymized and aggregated for research purposes.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">13. Entire Agreement</h2>
        <p>This Agreement constitutes the complete agreement between the Parties regarding participation in Research Programs and supersedes all prior communications or understandings.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">14. Amendments and Assignment</h2>
        <p>{siteName} may amend this Agreement by posting an updated version. Continued participation following such posting constitutes acceptance.</p>
        <p>{siteName} may assign this Agreement without participant consent. Participants may not assign their rights under this Agreement.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">15. Force Majeure</h2>
        <p>{siteName} shall not be liable for delay or failure to perform due to events beyond reasonable control, including natural disasters, governmental actions, system outages, cyber incidents, or other unforeseen disruptions.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">16. Governing Law and Jurisdiction</h2>
        <p>This Agreement shall be governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
        <p>Participants irrevocably submit to the exclusive jurisdiction of the courts located in Toronto, Ontario.</p>
      </article>
    </div>
  );
}
