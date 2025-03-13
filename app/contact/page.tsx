"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"



export default function ContactPage() {
  const { t } = useTranslation()
  
  return (
    <div className="container py-12 px-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t("whoAreWe")}</h1>
          <p className="text-muted-foreground mb-8">
          {t('whoAreWeDesc')}
          </p>
          <p className="text-muted-foreground mb-8">
          {t('socialMediaInfo')}
          </p>
          <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

        </div>
      </motion.div>
    </div>
  )
}

