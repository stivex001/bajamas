// utils/renderContentPreview.ts

/**
 * Parses HTML content and returns an object with a type and value.
 * If an image is found, it returns { type: 'image', value: imageUrl }
 * Otherwise, it returns { type: 'text', value: plainText }
 */
export function getContentPreview(content: string) {
  const trimmedContent = content?.trim() || "";

  const imgRegex = /<img\s[^>]*src=["']([^"']+)["'][^>]*>/i;
  const imageMatch = trimmedContent.match(imgRegex);

  if (imageMatch) {
    return {
      type: "image",
      value: imageMatch[1],
    };
  }

  // Strip HTML tags and decode entities
  const plainText = trimmedContent
    .replace(/<[^>]*>/g, "") // remove tags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  return {
    type: "text",
    value: plainText,
  };
}
