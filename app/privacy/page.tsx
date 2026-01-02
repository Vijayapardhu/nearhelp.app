"use client";

import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Glassmorphic Nav */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-100 bg-clip-text text-transparent">
                            NearHelp
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <div className="relative pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 rounded-[3rem] backdrop-blur-2xl bg-white/5 border border-white/20 shadow-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>

                        <div className="space-y-8 text-emerald-100/80 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                                <p className="mb-4">We collect the following types of information:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Account Information:</strong> Name, phone number, email address</li>
                                    <li><strong className="text-white">Location Data:</strong> Real-time GPS location when using the app</li>
                                    <li><strong className="text-white">Verification Documents:</strong> Government ID and selfie for helper verification</li>
                                    <li><strong className="text-white">Usage Data:</strong> Request history, ratings, and feedback</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>To connect users with nearby helpers</li>
                                    <li>To verify helper identities for safety and trust</li>
                                    <li>To facilitate communication between users and helpers</li>
                                    <li>To improve our services and user experience</li>
                                    <li>To handle disputes and enforce our terms</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                                <p className="mb-4">We share limited information in the following circumstances:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Between Users:</strong> We share basic profile information (name, rating) when a request is accepted</li>
                                    <li><strong className="text-white">With Supervisors:</strong> Verification documents are shared with assigned supervisors for review</li>
                                    <li><strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law or to protect safety</li>
                                </ul>
                                <p className="mt-4">
                                    We do not sell your personal information to third parties.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Location Data</h2>
                                <p>
                                    Location data is used only to match users with nearby helpers. We collect location data only when
                                    the app is in use and you have granted location permissions. You can disable location access at
                                    any time through your device settings, but this will limit app functionality.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                                <p>
                                    We implement industry-standard security measures to protect your data, including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                                    <li>Encrypted data transmission</li>
                                    <li>Secure storage with Row Level Security (RLS)</li>
                                    <li>Private storage for sensitive documents</li>
                                    <li>Regular security audits</li>
                                </ul>
                                <p className="mt-4">
                                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee
                                    absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                                <p>
                                    We retain your data for as long as your account is active or as needed to provide services.
                                    You may request account deletion at any time, after which we will remove your personal data
                                    within 30 days, except where required to retain it for legal purposes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                                <p className="mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your account and data</li>
                                    <li>Opt out of non-essential data collection</li>
                                    <li>Export your data in a machine-readable format</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                                <p>
                                    NearHelp is not intended for users under 18 years of age. We do not knowingly collect information
                                    from children. If we become aware that we have collected data from a child, we will delete it
                                    immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                                <p>
                                    We may update this privacy policy from time to time. We will notify users of significant changes
                                    through the app or via email.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                                <p>
                                    If you have questions or concerns about this privacy policy or our data practices, please
                                    contact us through our GitHub repository or the app's support channel.
                                </p>
                            </section>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-sm text-emerald-200/60">
                                    Last Updated: January 3, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
