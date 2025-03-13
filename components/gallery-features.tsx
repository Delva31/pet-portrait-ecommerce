'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import Link from 'next/link'


export function GalleryFeatures() {
  const { t } = useTranslation()
    
  return     <section className="py-16 bg-muted">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-12">{t("featuredPetPortraits")}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-background rounded-lg overflow-hidden shadow-md"
        >
          <div className="relative h-64 w-full">
            <Image
              src={`/portrait${i}.jpg?height=400&width=600&text=Pet+Portrait+${i}`}
              alt={`Pet Portrait ${i}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{t("portraitStyle")}{i}</h3>
            <p className="text-muted-foreground mb-4">
              Beautiful custom portrait capturing the essence of this adorable companion.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/gallery">See More Like This</Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
}
