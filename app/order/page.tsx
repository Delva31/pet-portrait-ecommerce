"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next"

interface IDataForm 
{
  orderNumber: number;
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  orderType: string,
  petName: string,
  additionalInfo: string,
}

const sendToWhatsApp = (formData: IDataForm) => {
  const phoneNumber = "+5491126339375"; 
  
  const message = `Hola! Quiero hize un pedido *N° ${formData.orderNumber}* para mi mascota *${formData.petName}*
  *Nombre:* ${formData.firstName} ${formData.lastName}
  *Teléfono:* ${formData.phone}
  *Email:* ${formData.email}
  *Dirección:* ${formData.address} - ${formData.city} (${formData.city}) CP: ${formData.zipCode}
  *Tipo de pedido:* ${formData.orderType}
  *Información adicional:*  ${formData.additionalInfo}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


export default function OrderPage() {
  const { toast } = useToast()
  const { t } = useTranslation()
  
  const [formData, setFormData] = useState<IDataForm>({
    orderNumber: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    orderType: "digital",
    petName: "",
    additionalInfo: "",
  })
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, orderType: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
      
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Order Submitted!",
      description: "We've received your order and will contact you soon.",
    })
    sendToWhatsApp(formData);

  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t("orderYourPetPortrait")}</h1>
          <p className="text-muted-foreground mb-8">
          {t('orderYourPetPortraitDesc')}
          </p>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>{t("personalInformation")}</CardTitle>
                <CardDescription>
                {t("personalInformationDesc")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("firstName")}</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("lastName")}</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("phoneNumber")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">{t("address")}</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">{t("city")}</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">{t("stateProvince")}</Label>
                    <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">{t("postalCode")}</Label>
                    <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>{t('orderDetails')}</CardTitle>
                <CardDescription>{t('orderDetailsDesc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="petName"> {t('petsName')}</Label>
                  <Input id="petName" name="petName" value={formData.petName} onChange={handleInputChange} required />
                </div>

                <div className="space-y-3">
                  <Label> {t('portraitType')}</Label>
                  <RadioGroup
                    value={formData.orderType}
                    onValueChange={handleRadioChange}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="digital" id="digital" />
                      <Label htmlFor="digital" className="cursor-pointer">
                        Digital Only ($75)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="printed" id="printed" />
                      <Label htmlFor="printed" className="cursor-pointer">
                        Printed 8x10" ($125)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="framed" id="framed" />
                      <Label htmlFor="framed" className="cursor-pointer">
                        Framed 8x10" ($175)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label> {t('uploadPetPhoto')}</Label>
                  <div
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => document.getElementById("photo-upload")?.click()}
                  >
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    {imagePreview ? (
                      <div className="space-y-4">
                        <div className="relative w-40 h-40 mx-auto">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Pet preview"
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-primary">
                          <Check className="h-4 w-4" />
                          <span>{t('photoUploaded')}</span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById("photo-upload")?.click()}
                        >
                          {t('changePhoto')}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                          <Upload className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">  {t('clickUploadOrdrag')}</p>
                          <p className="text-xs text-muted-foreground mt-1">  {t('photoResoltionMax')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">{t('additionalInformation')}</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder={t('additionalInformationDesc')}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" size="lg">
                {t('submitOrder')}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

