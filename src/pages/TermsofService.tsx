import React from 'react';
import Header from '../components/Header';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <>

            <div className="max-w-3xl mx-auto p-6 text-gray-800 text-justify">
                  <div className="mb-6">
                        <Link to="/" className="flex items-center text-blue-700 hover:text-blue-900 transition-all">
                            <ChevronLeft className="mr-2" />
                            Back to Home
                        </Link>
                    </div>
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p className="mb-4">Last Updated: July 25, 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using our website or services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Services Offered</h2>
                <p className="mb-4">
                    We offer website design, development, branding, SEO, and digital marketing services tailored to each client’s needs. All services are subject to project-based agreements.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Client Responsibilities</h2>
                <p className="mb-4">
                    Clients must provide accurate information, respond promptly to communications, and approve deliverables in a timely manner to avoid delays in project timelines.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
                <p className="mb-4">
                    All intellectual property created during a project remains the property of our agency until full payment is received. Upon completion, ownership of the final deliverables will be transferred to the client.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Payment Terms</h2>
                <p className="mb-4">
                    All payments must be made according to the terms specified in the project agreement. Late payments may result in a delay or suspension of services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
                <p className="mb-4">
                    We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific project.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
                <p className="mb-4">
                    Either party may terminate the agreement with written notice. In such cases, the client is responsible for payment of all work completed up to the termination date.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Revisions & Support</h2>
                <p className="mb-4">
                    We offer a limited number of revisions as specified in the proposal. Ongoing support may be available under a separate maintenance agreement.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to Terms</h2>
                <p className="mb-4">
                    We reserve the right to modify these Terms at any time. Changes will be effective upon posting on this page. Continued use of the service indicates acceptance of the revised terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact</h2>
                <p>
                    If you have any questions about these Terms, please contact us at{' '}
                    <a href="mailto:youragency@email.com" className="text-blue-600 underline">
                        hr@technovere.com
                    </a>.
                </p>
            </div>
        </>
    );
};

export default TermsOfService;
