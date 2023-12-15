import { Database } from "@/lib/database.types"
import { createBrowserClient } from "@supabase/ssr"

const supabaseClientConfig = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseAnonKey)
    return { error: { message: "Supabase server credentials not behaving!" } }

  const supabase = createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey
  )
  return supabase
}

export default supabaseClientConfig