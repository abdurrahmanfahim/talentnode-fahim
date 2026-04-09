// app/page.tsx or pages/index.tsx

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="bg-[#1E1B4B] text-white flex flex-col justify-center px-10 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Employee <br /> Management System
        </h1>

        <p className="text-gray-300 max-w-md">
          Streamline your workforce operations, track attendance,
          manage payroll, and empower your team securely.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-2">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Admin Portal */}
          <Card className="hover:shadow-md transition cursor-pointer">
            <CardContent className="flex items-center justify-between p-5">
              <span className="font-medium">Admin Portal</span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </CardContent>
          </Card>

          {/* Employee Portal */}
          <Card className="hover:shadow-md transition cursor-pointer">
            <CardContent className="flex items-center justify-between p-5">
              <span className="font-medium">Employee Portal</span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </CardContent>
          </Card>

          <p className="text-xs text-center text-gray-400 pt-4">
            © 2026 GreatStack. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage