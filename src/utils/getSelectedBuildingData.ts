import { ICAD } from "../constants/Icad"
import { MAAMOURAH_A } from "../constants/MaamorahA"
import { MAAMORAH_B } from "../constants/MaamorahB"
import { MUGHARRAQ } from "../constants/Mugharraq"
import { RAZEEN } from "../constants/Razeen"
import { SADEEM } from "../constants/Sadeem"

import type {
  Community,
  CommunityKey,
  IcadBuildingsObject,
  Maamorah_A_BuildingsObject,
  Maamorah_B_BuildingsObject,
  MugharraqBuildingsObject,
  RazeenBuildingsObject,
  SadeemBuildingsObject
} from "../types/communities"

export const getSelectedBuildingData = (
  community: Community,
  building: CommunityKey | null
) => {
  if (!building) return null;

  switch (community) {
    case "icad":
      return ICAD.data[building as keyof IcadBuildingsObject];

    case "maamourah_a":
      return MAAMOURAH_A.data[building as keyof Maamorah_A_BuildingsObject];

    case "maamourah_b":
      return MAAMORAH_B.data[building as keyof Maamorah_B_BuildingsObject];

    case "mogharraq":
      return MUGHARRAQ.data[building as keyof MugharraqBuildingsObject];

    case "razeen":
      return RAZEEN.data[building as keyof RazeenBuildingsObject];

    case "sadeem":
      return SADEEM.data[building as keyof SadeemBuildingsObject];

    default:
      return null;
  }
};