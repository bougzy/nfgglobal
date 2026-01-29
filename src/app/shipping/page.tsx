import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Shipping & Delivery | NFG Global",
  description:
    "Learn about NFG Global's shipping and delivery options. Fast delivery across Nigeria with tracking on all orders.",
};

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Shipping &amp; Delivery
              </h1>
              <p className="text-white/60 leading-relaxed text-lg">
                We deliver across Nigeria with reliable partners to ensure your
                order arrives safely and on time.
              </p>
            </div>

            {/* Delivery Timeline */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Delivery Timeline
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    2-3
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-2">
                    Business Days
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">Lagos</h3>
                  <p className="text-white/60 text-sm mt-1">
                    Mainland &amp; Island
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    3-5
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-2">
                    Business Days
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">
                    Major Cities
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Abuja, Port Harcourt, Ibadan
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    5-7
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-2">
                    Business Days
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">
                    Other Locations
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    All other states nationwide
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Costs */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Shipping Costs
              </h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left p-4 text-white/90 font-semibold">
                        Location
                      </th>
                      <th className="text-right p-4 text-white/90 font-semibold">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60">
                    <tr className="border-b border-white/[0.05]">
                      <td className="p-4">Lagos Mainland</td>
                      <td className="p-4 text-right text-amber-400 font-medium">
                        &#8358;2,500
                      </td>
                    </tr>
                    <tr className="border-b border-white/[0.05]">
                      <td className="p-4">Lagos Island</td>
                      <td className="p-4 text-right text-amber-400 font-medium">
                        &#8358;3,000
                      </td>
                    </tr>
                    <tr className="border-b border-white/[0.05]">
                      <td className="p-4">
                        Major Cities (Abuja, PH, Ibadan, etc.)
                      </td>
                      <td className="p-4 text-right text-amber-400 font-medium">
                        &#8358;4,500
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Other Locations</td>
                      <td className="p-4 text-right text-amber-400 font-medium">
                        &#8358;5,000 - &#8358;7,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/40 text-sm">
                * Shipping costs are calculated at checkout based on your
                delivery address. Prices may vary for bulky or heavy items.
              </p>
            </section>

            {/* Tracking */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Order Tracking
              </h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                <p className="text-white/60 leading-relaxed">
                  All orders come with tracking. Once your order is dispatched,
                  you&apos;ll receive a tracking number and regular updates via
                  WhatsApp. You can check the status of your delivery at any time
                  by messaging us. We keep you informed at every step — from
                  order confirmation to dispatch to final delivery.
                </p>
              </div>
            </section>

            {/* Delivery Partners */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Delivery Partners
              </h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                <p className="text-white/60 leading-relaxed">
                  We partner with trusted and reputable logistics companies
                  across Nigeria to ensure your orders are handled with care and
                  delivered on time. Our delivery partners are experienced in
                  handling premium and fragile items, so your jewelry and gifts
                  arrive in perfect condition. All packages are securely packed
                  and insured during transit.
                </p>
              </div>
            </section>

            {/* International Shipping */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                International Shipping
              </h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-1">
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 leading-relaxed">
                      We currently ship within Nigeria only. International
                      shipping is coming soon! If you&apos;re outside Nigeria
                      and interested in our products, please contact us at{" "}
                      <a
                        href="mailto:info@nfgglobal.ng"
                        className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
                      >
                        info@nfgglobal.ng
                      </a>{" "}
                      and we&apos;ll do our best to accommodate your request.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
