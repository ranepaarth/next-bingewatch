import { nextConstants } from "@/constants";
import { getToken } from "./getToken";

const { API_URL } = nextConstants;

export async function getProfiles() {
  const token = await getToken();
  try {
    const request = await fetch(`${API_URL}/profiles`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ["profiles"],
      },
    });

    if (request.status) {
      const response = await request.json();

      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
