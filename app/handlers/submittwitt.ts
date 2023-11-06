import { randomUUID } from "crypto"
import { supabaseServerComponentConfig } from "../configs"

const handleSubmitTwitt = async (formData: FormData) => {
  "use server"
  const supabase = supabaseServerComponentConfig()
  const twitt = formData.get("twitt")?.toString()
  console.log("Form Data: " + twitt)
  if (!twitt) return

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError) return
  console.log("User Data is: " + JSON.stringify(userData))

  const { data: twittData, error: twittError } = await supabase
    .from("twitts")
    .insert({
      profile_id: userData.user.id,
      text: twitt,
      id: randomUUID(),
    })
  console.log(
    "Twitt Data is: " +
      JSON.stringify(twittData) +
      " . The Error is " +
      JSON.stringify(twittError)
  )
}

export default handleSubmitTwitt
