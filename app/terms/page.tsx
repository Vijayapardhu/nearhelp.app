"use client";

import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                            Terms of Service
                        </h1>

                        <div className="space-y-8 text-emerald-100/80 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By downloading, installing, or using NearHelp, you agree to be bound by these Terms of Service.
                                    If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                                <p>
                                    NearHelp is a hyperlocal platform that connects users who need assistance with verified helpers
                                    in their neighborhood. The platform facilitates cash-based transactions between users and helpers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>You must be at least 18 years old to use NearHelp</li>
                                    <li>You must provide accurate and truthful information</li>
                                    <li>You are responsible for maintaining the security of your account</li>
                                    <li>You agree to treat all users with respect and professionalism</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Helper Verification</h2>
                                <p>
                                    All helpers undergo identity verification before being allowed to accept requests. However,
                                    NearHelp does not guarantee the quality of services provided and is not responsible for
                                    disputes between users and helpers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Payments</h2>
                                <p>
                                    Currently, all payments are made in cash directly between users and helpers. NearHelp does not
                                    process or hold any payments. Users and helpers are responsible for ensuring fair and agreed-upon
                                    payment terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Activities</h2>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Using the platform for illegal activities</li>
                                    <li>Harassing, threatening, or abusing other users</li>
                                    <li>Creating fake accounts or impersonating others</li>
                                    <li>Attempting to circumvent verification processes</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                                <p>
                                    NearHelp is provided "as is" without warranties of any kind. We are not liable for any damages
                                    arising from the use of our services, including but not limited to disputes, injuries, or
                                    financial losses.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                                <p>
                                    We reserve the right to suspend or terminate accounts that violate these terms or engage in
                                    inappropriate behavior. Users may also delete their accounts at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                                <p>
                                    We may update these terms from time to time. Continued use of NearHelp after changes constitutes
                                    acceptance of the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                                <p>
                                    For questions about these terms, please contact us through our GitHub repository or the app's
                                    support channel.
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
