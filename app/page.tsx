"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Camera, Package } from "lucide-react"
import "./i18n"


import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { GalleryFeatures } from "@/components/gallery-features"

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/biglogo2.png"
            alt="Pet Portrait Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("mainTitle")}</h1>
            <p className="text-lg md:text-xl mb-8">
             {t("secondaryTitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/order">
                  {t("orderNow")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
          
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <GalleryFeatures/>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("howItWorks")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: t("uploadYourPhoto"),
                description:  t("uploadYourPhotoDesc"),
              },
              {
                icon: Palette,
                title: t("weCreateYourPortrait"),
                description: t("weCreateYourPortraitDesc"),
              },
              {
                icon: Package,
                title: t("receiveYourMasterpiece"),
                description: t("receiveYourMasterpieceDesc"),
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
          {/*  
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/order">{t("startYourOrder")}</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Testimonials 
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                pet: "Max",
                quote:
                  "The portrait of Max captured his playful spirit perfectly. I couldn't be happier with the result!",
              },
              {
                name: "David Thompson",
                pet: "Bella",
                quote:
                  "The attention to detail is amazing. The artist truly captured Bella's soulful eyes and gentle expression.",
              },
              {
                name: "Emily Parker",
                pet: "Charlie",
                quote:
                  "I ordered a portrait as a memorial for Charlie, and it brings me joy every day. Thank you for this beautiful keepsake.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col h-full">
                  <blockquote className="flex-1 mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <footer>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Pet: {testimonial.pet}</p>
                  </footer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("readyImmortalizeYourPet")}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
          {t("readyImmortalizeYourPetDesc")}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/order">{t("startYourOrderNow")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

