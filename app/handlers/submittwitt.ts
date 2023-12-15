"use server"
import { randomUUID } from "crypto"
import supabaseServerComponentConfig from "../configs/supabaseservercomponentconfig"
import { revalidatePath } from "next/cache"
import TwittSubmitData from "@/types/TwittSubmitData"

const handleSubmitTwitt = async (data: TwittSubmitData) => {
  const supabase = supabaseServerComponentConfig()
  const twitt = data.twitt
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
  revalidatePath("/")
}

export default handleSubmitTwitt
