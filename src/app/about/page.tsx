import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "About Us | NFG Global",
  description:
    "Learn about NFG Global - your trusted source for premium jewelry, fashion, and gifts in Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              About NFG Global
            </h1>

            {/* Content */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
                <div className="space-y-6">
                  <p className="text-white/60 leading-relaxed text-lg">
                    We curate premium jewelry, fashion accessories, and luxury
                    gifts for discerning customers across Nigeria. Every piece is
                    carefully selected for quality and style.
                  </p>

                  <p className="text-white/60 leading-relaxed text-lg">
                    Founded in 2024, we&apos;re committed to delivering
                    excellence with every order. Our collection features
                    carefully curated diamond jewelry, gold and luxury pieces,
                    fashion accessories, children&apos;s wear, and premium gifts
                    that make every occasion special.
                  </p>

                  <p className="text-white/60 leading-relaxed text-lg">
                    Whether you&apos;re shopping for yourself or looking for the
                    perfect gift, NFG Global brings you luxury, convenience, and
                    style—all delivered to your doorstep.
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Our Values
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                    <h3 className="text-xl font-semibold text-white/90 mb-3">
                      Quality First
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Every item in our collection is handpicked and inspected
                      to meet our high standards of craftsmanship and quality.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                    <h3 className="text-xl font-semibold text-white/90 mb-3">
                      Customer Satisfaction
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Your happiness is our priority. We go above and beyond to
                      ensure every shopping experience is seamless and enjoyable.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                    <h3 className="text-xl font-semibold text-white/90 mb-3">
                      Fast Delivery
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      We partner with reliable logistics providers to deliver
                      your orders safely and swiftly across Nigeria.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
                    <h3 className="text-xl font-semibold text-white/90 mb-3">
                      Trusted Service
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Transparency, honesty, and reliability are at the core of
                      everything we do. Shop with confidence at NFG Global.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
