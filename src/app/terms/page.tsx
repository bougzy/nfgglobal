import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Terms of Service | NFG Global",
  description:
    "Read NFG Global's terms of service. Understand our policies on orders, delivery, returns, and more.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-white/40 text-sm">
                Last updated: January 29, 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
              <p className="text-white/60 leading-relaxed">
                Welcome to NFG Global. By accessing our website and placing
                orders, you agree to be bound by these Terms of Service. Please
                read them carefully before using our services. If you do not
                agree with any part of these terms, please do not use our
                services.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {/* Orders and Payment */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Orders and Payment
                </h2>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>
                    All prices are listed in Nigerian Naira (&#8358;) and are
                    inclusive of applicable taxes
                  </li>
                  <li>
                    Orders are confirmed via WhatsApp after successful payment
                    verification
                  </li>
                  <li>
                    We accept bank transfers, card payments, and other approved
                    payment methods
                  </li>
                  <li>
                    Payment must be completed before orders are processed and
                    dispatched
                  </li>
                  <li>
                    We reserve the right to cancel orders if payment is not
                    received within 24 hours of placing the order
                  </li>
                  <li>
                    Prices are subject to change without prior notice, but
                    confirmed orders will be honored at the agreed price
                  </li>
                </ul>
              </section>

              {/* Delivery */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Delivery
                </h2>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>
                    Lagos deliveries are typically completed within 2-3 business
                    days
                  </li>
                  <li>
                    Nationwide deliveries (outside Lagos) take 5-7 business days
                  </li>
                  <li>
                    Delivery fees vary by location and are calculated at checkout
                  </li>
                  <li>
                    You will receive tracking information and delivery updates
                    via WhatsApp
                  </li>
                  <li>
                    NFG Global is not responsible for delays caused by logistics
                    partners, weather, or unforeseen circumstances
                  </li>
                  <li>
                    A valid delivery address and phone number must be provided
                    for all orders
                  </li>
                </ul>
              </section>

              {/* Returns and Refunds */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Returns and Refunds
                </h2>
                <ul className="list-disc list-inside text-white/60 space-y-2">
                  <li>
                    Returns are accepted within 7 days of delivery for eligible
                    items
                  </li>
                  <li>
                    Items must be returned in their original packaging and
                    unused condition
                  </li>
                  <li>
                    Personalized, customized, or intimate items are not eligible
                    for return
                  </li>
                  <li>
                    Refunds will be processed within 5-7 business days after we
                    receive and inspect the returned item
                  </li>
                  <li>
                    Return shipping costs are the responsibility of the customer
                    unless the item was damaged or incorrect
                  </li>
                  <li>
                    To initiate a return, contact us via WhatsApp or email with
                    your order details and reason for return
                  </li>
                </ul>
              </section>

              {/* Product Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Product Information
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    We make every effort to display our products as accurately as
                    possible. However, colors and appearance may vary slightly
                    due to screen settings and photography. Product descriptions
                    are provided for informational purposes and do not constitute
                    a warranty. If you have questions about a specific product,
                    please contact us before placing your order.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Limitation of Liability
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    NFG Global shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising from your
                    use of our services or products. Our total liability for any
                    claim shall not exceed the amount paid by you for the
                    specific product or service giving rise to the claim. This
                    limitation applies to the fullest extent permitted by
                    Nigerian law.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Changes to Terms
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    We reserve the right to update or modify these Terms of
                    Service at any time without prior notice. Changes will be
                    effective immediately upon posting on our website. Your
                    continued use of our services after any changes constitutes
                    acceptance of the updated terms. We encourage you to review
                    this page periodically for the latest information.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                  <p className="text-white/60 leading-relaxed">
                    If you have any questions about these Terms of Service,
                    please contact us at{" "}
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
