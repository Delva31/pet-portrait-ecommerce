"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, CheckCircle, Truck, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock data for orders
const orders = [
  {
    id: "ORD-001",
    date: "2023-11-15",
    petName: "Max",
    type: 'Framed 8x10"',
    price: "$175.00",
    status: "completed",
    imageUrl: "/placeholder.svg?height=200&width=200&text=Max",
  },
  {
    id: "ORD-002",
    date: "2023-12-03",
    petName: "Bella",
    type: "Digital Only",
    price: "$75.00",
    status: "in_progress",
    imageUrl: "/placeholder.svg?height=200&width=200&text=Bella",
  },
  {
    id: "ORD-003",
    date: "2024-01-10",
    petName: "Charlie",
    type: 'Printed 8x10"',
    price: "$125.00",
    status: "processing",
    imageUrl: "/placeholder.svg?height=200&width=200&text=Charlie",
  },
  {
    id: "ORD-004",
    date: "2024-02-05",
    petName: "Luna",
    type: 'Framed 8x10"',
    price: "$175.00",
    status: "shipped",
    imageUrl: "/placeholder.svg?height=200&width=200&text=Luna",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredOrders = activeTab === "all" ? orders : orders.filter((order) => order.status === activeTab)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "in_progress":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "shipped":
        return <Truck className="h-5 w-5 text-green-500" />
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Processing
          </Badge>
        )
      case "in_progress":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            In Progress
          </Badge>
        )
      case "shipped":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Shipped
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground mb-8">Track your orders and manage your account</p>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="in_progress">In Progress</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 gap-6">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="w-full md:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={order.imageUrl || "/placeholder.svg"}
                              alt={order.petName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <div>
                                <h3 className="text-lg font-semibold">{order.petName}'s Portrait</h3>
                                <p className="text-sm text-muted-foreground">
                                  Order #{order.id} • {order.date}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatusIcon(order.status)}
                                {getStatusBadge(order.status)}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm">
                                <span className="font-medium">Type:</span> {order.type}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Price:</span> {order.price}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {order.status === "completed" && (
                                <Button variant="outline" size="sm">
                                  Download Digital Copy
                                </Button>
                              )}
                              {(order.status === "processing" || order.status === "in_progress") && (
                                <Button variant="outline" size="sm">
                                  Contact Artist
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground py-8">No orders found in this category.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Have questions about your order or want to make changes?</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1">
                  Contact Support
                </Button>
                <Button className="flex-1">Place New Order</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

