import { Building2Icon, PersonStandingIcon } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author")
        .title("Authors")
        .icon(PersonStandingIcon),
      S.documentTypeListItem("startup").title("Startup").icon(Building2Icon),
      S.documentTypeListItem("sanitySchema").title("SanitySchema"),
    ]);

export const structure1: StructureResolver = (S) => {
  return S.list()
    .title("content")
    .items([S.documentTypeListItem("startup").title("Startup")]);
};
