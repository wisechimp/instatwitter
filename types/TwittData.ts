import { Tables } from "@/lib/database.types"

type TwittData = {
  data: Tables<"twitts"> & Pick<Tables<"profiles">, "username">
}

export default TwittData