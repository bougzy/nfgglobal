import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "FAQ | NFG Global",
  description:
    "Frequently asked questions about NFG Global. Find answers about ordering, delivery, returns, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-white/60 leading-relaxed text-lg">
                Find answers to common questions about shopping with NFG Global.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {/* Q1 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>How do I place an order?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Browse our collection and add items to your cart. When
                  you&apos;re ready, proceed to checkout. Your order will be
                  confirmed via WhatsApp, where you&apos;ll receive payment
                  instructions and delivery details. You can also place orders
                  directly through WhatsApp by messaging us with the products
                  you&apos;d like to purchase.
                </div>
              </details>

              {/* Q2 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>What payment methods do you accept?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  We accept bank transfers, debit/credit card payments, and
                  USSD payments. All prices are in Nigerian Naira (&#8358;).
                  Payment details will be shared via WhatsApp after your order is
                  placed. Full payment is required before orders are processed.
                </div>
              </details>

              {/* Q3 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>Do you deliver nationwide?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Yes! We deliver to all states across Nigeria. Lagos deliveries
                  typically arrive within 2-3 business days, major cities like
                  Abuja, Port Harcourt, and Ibadan within 3-5 days, and other
                  locations within 5-7 business days. You&apos;ll receive
                  tracking updates via WhatsApp.
                </div>
              </details>

              {/* Q4 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>How much is delivery?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Delivery fees depend on your location. Lagos Mainland starts at
                  &#8358;2,500, Lagos Island at &#8358;3,000, major cities at
                  &#8358;4,500, and other locations range from
                  &#8358;5,000-&#8358;7,000. Exact fees are calculated at
                  checkout based on your delivery address.
                </div>
              </details>

              {/* Q5 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>What is your return policy?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  We offer a 7-day return policy from the date of delivery. Items
                  must be returned in their original packaging and unused
                  condition. Personalized or customized items cannot be returned.
                  To initiate a return, contact us via WhatsApp or email with
                  your order details. Refunds are processed within 5-7 business
                  days after inspection.
                </div>
              </details>

              {/* Q6 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>Are your products authentic?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Absolutely. Every product at NFG Global is carefully sourced
                  and verified for authenticity and quality. Our jewelry pieces
                  come with appropriate certifications where applicable. We stand
                  behind the quality of every item we sell and offer a
                  satisfaction guarantee.
                </div>
              </details>

              {/* Q7 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>Can I track my order?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Yes! Once your order is dispatched, we&apos;ll send you
                  tracking information via WhatsApp. You&apos;ll receive updates
                  at each stage of delivery. You can also reach out to us
                  anytime on WhatsApp to check the status of your order.
                </div>
              </details>

              {/* Q8 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>Do you offer gift wrapping?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Yes, we offer premium gift wrapping for an additional fee.
                  Simply mention that you&apos;d like gift wrapping when placing
                  your order via WhatsApp, and we&apos;ll ensure your item is
                  beautifully wrapped and ready to impress. We also include a
                  personalized gift note if requested.
                </div>
              </details>

              {/* Q9 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>What if I receive a damaged item?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  If you receive a damaged or defective item, please contact us
                  immediately via WhatsApp with photos of the damage and your
                  order details. We&apos;ll arrange a replacement or full refund
                  at no extra cost to you. Reports must be made within 48 hours
                  of delivery to be eligible for a free replacement.
                </div>
              </details>

              {/* Q10 */}
              <details className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-semibold text-lg hover:text-amber-400 transition-colors list-none">
                  <span>Do you have a physical store?</span>
                  <svg
                    className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                  Currently, NFG Global operates exclusively online, which allows
                  us to offer competitive prices and serve customers across
                  Nigeria. We&apos;re based in Port Harcourt and all orders are processed
                  and shipped from our Port Harcourt warehouse. Plans for a physical
                  showroom are in the works — stay tuned!
                </div>
              </details>
            </div>

            {/* Still Have Questions */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/60 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out to us
                via WhatsApp or email at{" "}
                <a
                  href="mailto:info@nfgglobal.ng"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
                >
                  info@nfgglobal.ng
                </a>{" "}
                and we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
