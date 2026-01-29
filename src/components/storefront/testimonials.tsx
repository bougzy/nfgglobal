"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Amaka O.",
    location: "Lagos",
    text: "Beautiful quality and fast delivery! The diamond earrings exceeded my expectations. Will definitely order again.",
  },
  {
    name: "Chidi M.",
    location: "Abuja",
    text: "Professional service and authentic products. My go-to for luxury gifts. The packaging was also impressive.",
  },
  {
    name: "Blessing K.",
    location: "Port Harcourt",
    text: "Love the WhatsApp checkout \u2014 so convenient! The gold bracelet I got for my anniversary was absolutely stunning.",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-sm text-white/40 mt-2">
            Trusted by customers across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{t.name}</p>
                  <p className="text-xs text-white/40">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
