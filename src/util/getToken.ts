import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

export async function getToken() {
  const cookie = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  const token = cookie.token;
  return token;
}
