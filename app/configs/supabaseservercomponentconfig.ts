import type { Database } from "@/lib/database.types"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

const supabaseServerClient = () => {
  const cookieStore = cookies()
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseAnonKey) 
    return {error: {message:"Supabase server credentials not behaving!"}}
  
  const supabase = createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
  return supabase
}

export default supabaseServerClient