import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Contact Us | NFG Global",
  description:
    "Get in touch with NFG Global. Order premium jewelry and fashion accessories via WhatsApp. Fast shipping across Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Contact Us
            </h1>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                We&apos;d love to hear from you! Reach out for inquiries,
                orders, or custom requests.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">Email</h3>
                  <p className="text-white/60 leading-relaxed">
                    info@nfgglobal.ng
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">
                    Location
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:col-span-2 lg:col-span-1">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">
                    Business Hours
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
              <p className="text-white/60 leading-relaxed text-lg">
                Have questions about a product? Want to place a bulk order? Need
                help with your purchase? Contact us via WhatsApp or email and
                we&apos;ll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
