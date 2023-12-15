import { Tables } from "@/lib/database.types"

type FetchedTwittData = {
  data: Array<Tables<"twitts"> & Pick<Tables<"profiles">, "username">>
  error: string
}

export default FetchedTwittData
