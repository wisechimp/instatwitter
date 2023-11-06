import { NextResponse } from "next/server"
import { supabaseRouteHandlerConfig } from "@/app/configs"

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get("email"))
  const password = String(formData.get("password"))
  const supabase = await supabaseRouteHandlerConfig()

  await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return NextResponse.redirect(new URL("/profile", request.url), {
    status: 301,
  })
}