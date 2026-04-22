"use client";

import { motion } from "framer-motion";

export function Reviews() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          Lo que dicen nuestros pacientes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <iframe
            className="lc_reviews_widget w-full"
            src="https://reputationhub.site/reputation/widgets/review_widget/2sl6tjSxaPSCuy6NkXf1"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%", height: "800px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
