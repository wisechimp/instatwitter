import { NextResponse } from "next/server"

import { supabaseRouteHandlerConfig } from "@/app/configs"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get("email"))
  const password = String(formData.get("password"))
  const username = String(formData.get("username"))
  const supabase = await supabaseRouteHandlerConfig()

  // Checking whether the username already exists
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("username", username)

  console.log(data)
  console.log("The data length is: " + data?.length)

  if (data && data.length > 0) {
    console.log("Here is some user data: " + data)
    const signupFailedUrl = new URL(`/login`, requestUrl)
    signupFailedUrl.searchParams.set("failed", "duplicate-username")
    signupFailedUrl.searchParams.set("username", username)
    return NextResponse.redirect(signupFailedUrl, {
      status: 301,
    })
  } else {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      },
    })
    console.log("Did we end up here?")
    return NextResponse.redirect(new URL("/profile", requestUrl), {
      status: 301,
    })
  }
}
