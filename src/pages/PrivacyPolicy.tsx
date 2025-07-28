import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <>
            <section className='bg-gray-300'>
                <div className="max-w-3xl mx-auto p-6 text-gray-800 text-justify">

                    {/* Back Arrow */}
                    <div className="mb-6">
                        <Link to="/" className="flex items-center text-blue-700 hover:text-blue-900 transition-all">
                            <ChevronLeft className="mr-2" />
                            Back to Home
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p className="mb-4">Last Updated: July 25, 2025</p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information that you voluntarily provide when filling out forms on our website, subscribing to our newsletter,
                        or contacting us directly. This information may include your name, email address, phone number, business details, and project-related
                        information.
                    </p>
                    <p className="mb-4">
                        We may also automatically collect usage data such as your IP address, browser type, device information, pages visited, and the time and
                        date of your visit. This is typically collected via cookies and similar tracking technologies.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        The information we collect is used to:
                        <ul className="list-disc list-inside mt-2">
                            <li>Communicate with you regarding your inquiry or project</li>
                            <li>Deliver and improve our services</li>
                            <li>Send updates, newsletters, or promotional content (with your consent)</li>
                            <li>Monitor website performance and improve user experience</li>
                            <li>Ensure legal compliance and security</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing and Disclosure</h2>
                    <p className="mb-4">
                        We do not sell, trade, or rent your personal information to others. We may share your data with trusted third-party service providers
                        who help us operate our business, such as hosting providers, email marketing platforms, and analytics services. These providers are
                        bound by confidentiality agreements.
                    </p>
                    <p className="mb-4">
                        We may also disclose your information if required to do so by law or in response to valid requests by public authorities.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
                    <p className="mb-4">
                        We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access,
                        disclosure, alteration, or destruction. However, no method of data transmission over the Internet is 100% secure.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
                    <p className="mb-4">
                        You have the right to:
                        <ul className="list-disc list-inside mt-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request corrections or updates to your data</li>
                            <li>Request the deletion of your data</li>
                            <li>Withdraw your consent to any processing based on consent</li>
                        </ul>
                        To exercise your rights, please email us at <a href="mailto:hr@technovere.com" className="text-blue-600 underline">hr@technovere.com</a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
                    <p className="mb-4">
                        Our website uses cookies and similar tracking technologies to improve user experience and gather analytics data. You can manage or disable cookies
                        through your browser settings. Please note that disabling cookies may affect the functionality of some parts of our website.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
                    <p className="mb-4">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                        We encourage you to read the privacy policies of any third-party sites you visit.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">8. Policy Updates</h2>
                    <p className="mb-4">
                        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a revised "Last Updated" date.
                        We encourage you to review this policy periodically.
                    </p>

                    <p className="mt-6">
                        Questions or concerns? Please contact us at:{' '}
                        <a href="mailto:hr@technovere.com" className="text-blue-600 underline">
                            hr@technovere.com
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
