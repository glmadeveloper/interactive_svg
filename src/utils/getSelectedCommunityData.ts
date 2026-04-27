import { ICAD } from "../constants/Icad"
import { MAAMOURAH_A } from "../constants/MaamorahA"
import { MAAMORAH_B } from "../constants/MaamorahB"
import { MUGHARRAQ } from "../constants/Mugharraq"
import { RAZEEN } from "../constants/Razeen"
import { SADEEM } from "../constants/Sadeem"

import type {
  Community,
} from "../types/communities"

export const getSelectedCommunityData = (
  community: Community,
) => {
  switch (community) {
    case "icad":
      return ICAD;

    case "maamourah_a":
      return MAAMOURAH_A;

    case "maamourah_b":
      return MAAMORAH_B;

    case "mogharraq":
      return MUGHARRAQ;

    case "razeen":
      return RAZEEN;

    case "sadeem":
      return SADEEM;

    default:
      return null;
  }
};