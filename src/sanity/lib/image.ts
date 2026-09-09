import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

type ImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0] | string | null | undefined;

const imageBuilder = projectId
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

export const urlForImage = (source: ImageSource): string => {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (!imageBuilder) return "";
  return imageBuilder.image(source).auto("format").fit("max").url();
};
