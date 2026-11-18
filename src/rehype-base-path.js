
export default function rehypeBasePath(options = {}) {
  const base = options.base || "/";

  return (tree) => {
    const visit = (node) => {
      if (node.type === "element" && node.properties) {
        for (const key of ["src", "href"]) {
          const value = node.properties[key];

          if (
            typeof value === "string" &&
            value.startsWith("/") &&
            !value.startsWith("//") &&
            base !== "/" &&
            !value.startsWith(base)
          ) {
            node.properties[key] = `${base}${value.slice(1)}`;
          }
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}
