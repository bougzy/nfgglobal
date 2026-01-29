import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy | NFG Global",
  description:
    "Read NFG Global's privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-white/40 text-sm">
                Last updated: January 29, 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
              <p className="text-white/60 leading-relaxed">
                At NFG Global, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or make a purchase.
                Please read this policy carefully.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {/* Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Information We Collect
                </h2>
                <p className="text-white/60 leading-relaxed">
                  We may collect the following types of information when you
                  interact with our services:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>
                    Personal identification information (name, email address,
                    phone number, delivery address)
                  </li>
                  <li>
                    Order and transaction details (products purchased, order
                    history, payment information)
                  </li>
                  <li>
                    Communication data (WhatsApp messages, emails, and other
                    correspondence with our team)
                  </li>
                  <li>
                    Device and browsing information (IP address, browser type,
                    pages visited, time spent on site)
                  </li>
                  <li>
                    Cookies and similar tracking technologies to improve your
                    browsing experience
                  </li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  How We Use Your Information
                </h2>
                <p className="text-white/60 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>To process and fulfill your orders</li>
                  <li>
                    To communicate with you about your orders, inquiries, and
                    promotions
                  </li>
                  <li>To improve our website, products, and services</li>
                  <li>
                    To personalize your shopping experience and recommend
                    products
                  </li>
                  <li>
                    To send marketing communications (with your consent) about
                    new products and offers
                  </li>
                  <li>
                    To comply with legal obligations and resolve disputes
                  </li>
                  <li>
                    To prevent fraud and protect the security of our platform
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Data Security
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information from
                    unauthorized access, alteration, disclosure, or destruction.
                    While we strive to use commercially acceptable means to
                    protect your data, no method of transmission over the
                    Internet or electronic storage is 100% secure. We cannot
                    guarantee absolute security but are committed to maintaining
                    the highest standards of data protection.
                  </p>
                </div>
              </section>

              {/* WhatsApp Integration */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  WhatsApp Integration
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    We use WhatsApp as a primary communication channel for order
                    processing, customer support, and delivery updates. When you
                    contact us via WhatsApp, your phone number and message
                    content are processed in accordance with WhatsApp&apos;s own
                    privacy policy. We retain WhatsApp communication records to
                    maintain order history and provide better customer service.
                    You may opt out of WhatsApp communications at any time by
                    letting us know.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Your Rights
                </h2>
                <p className="text-white/60 leading-relaxed">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>
                    The right to access and receive a copy of your personal data
                  </li>
                  <li>
                    The right to request correction of inaccurate or incomplete
                    data
                  </li>
                  <li>
                    The right to request deletion of your personal data
                  </li>
                  <li>
                    The right to withdraw consent for marketing communications
                  </li>
                  <li>
                    The right to lodge a complaint with a data protection
                    authority
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    If you have any questions about this Privacy Policy or wish
                    to exercise your rights, please contact us at{" "}
                    <a
                      href="mailto:info@nfgglobal.ng"
                      className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
                    >
                      info@nfgglobal.ng
                    </a>
                    .
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
