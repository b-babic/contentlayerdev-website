import { defineDocumentType } from "contentlayer/source-files";

import { Link } from "../nested/Link";

export const HeaderConfig = defineDocumentType(() => ({
  name: "HeaderConfig",
  filePathPattern: `config/header.yaml`,
  isSingleton: true,
  fields: {
    nav: {
      type: "list",
      description: "List of navigation links",
      of: Link,
    },
  },
  extensions: {},
}));