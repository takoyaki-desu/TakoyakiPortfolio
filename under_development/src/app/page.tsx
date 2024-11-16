"use client"
import { AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative p-[2px] rounded-lg overflow-hidden rainbow-border">
        <Card className="w-full max-w-md relative z-10 bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              Under Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-300">
              We&apos;re working hard to bring you something amazing. Our website is currently under construction, but we&apos;ll be back soon with a brand new look and exciting features.
            </p>
          </CardContent>
        </Card>
      </div>
      <style jsx global>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-border {
          background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff);
          background-size: 300% 300%;
          animation: rainbow 5s ease infinite;
        }
      `}</style>
    </div>
  )
}