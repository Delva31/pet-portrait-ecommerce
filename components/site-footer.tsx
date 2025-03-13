
"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t, i18n } = useTranslation();
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              Pet Portrait Studio
            </Link>
            <p className="mt-2 text-muted-foreground">
              {t("secondaryTitle")}
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
          <div>
            <h3 className="font-semibold mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  {t('gallery')}
                </Link>
              </li>
             {/* <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  {t('about')}
                </Link>
              </li>*/}
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3"> {t('customerService')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  {t('FAQ')}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                {t('shippingDelivery')}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary">
                  {t('returnsPolicy')}
                </Link>
              </li>
            {/* <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>*/}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pet Portrait Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

