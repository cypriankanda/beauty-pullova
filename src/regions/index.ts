import { kenyaRegion } from "./kenya";
import { usaRegion } from "./usa";

export const regions = {
  kenya: kenyaRegion,
  usa: usaRegion,
};

export type RegionKey = keyof typeof regions;
