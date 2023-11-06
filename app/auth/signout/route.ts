import { supabaseRouteHandlerConfig } from "@/app/configs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = await supabaseRouteHandlerConfig()

  await supabase.auth.signOut()

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  })
}
