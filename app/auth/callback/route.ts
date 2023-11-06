import { NextResponse, NextRequest } from "next/server"
import { supabaseRouteHandlerConfig } from "@/app/configs"

export async function GET(request: NextRequest) {
  const supabase = await supabaseRouteHandlerConfig()
  const { searchParams } = new URL(request.url)
  console.log("The request URL is: " + searchParams)
  const code = searchParams.get("code")

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/profile', request.url))
}