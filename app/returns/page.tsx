"use client"

import type React from "react"
import { useTranslation } from "react-i18next"


export default function ReturnsPage() {
  const { t } = useTranslation()
  return (
  <section className="py-16 bg-muted">
    <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t("WIP Returns Page")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <h1></h1>
      </div>
    </div>
  </section>
  )
}

