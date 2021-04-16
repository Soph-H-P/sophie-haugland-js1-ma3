const createElement = (htmlTag = "div", attributes = "", innerValue = "") => {
  if (htmlTag === "img" || htmlTag === "input") {
    return `<${htmlTag} ${attributes}>`;
  }
  return `<${htmlTag} ${attributes}>${innerValue}</${htmlTag}>`;
};
