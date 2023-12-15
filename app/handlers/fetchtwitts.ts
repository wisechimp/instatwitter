import supabaseClientConfig from "../configs/supabaseClientConfig"

const handleFetchTwitts = async () => {
  const {data , error } =  await supabaseClientConfig()
    .from("twitts")
    .select(
      `*,
      profiles (
        username
      )`
    )
  
    return {data, error}
}

export default handleFetchTwitts