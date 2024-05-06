"use server"

import axios from "axios"

export async function getPosts() {
  try {
    const res = await axios.get(
      "https://648867740e2469c038fda6cc.mockapi.io/api/v1/post"
    )

    return res.data
  } catch (error) {
    return { error }
  }
}
