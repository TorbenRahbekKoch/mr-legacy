import { useEffect, useState } from "react";
import { Repository } from "./Repository";
import { InfoPageComposer } from "./InfoPage.composer";

export interface Props {
  path: string;
  repository: Repository;
}

export function InfoPageController({ path, repository }: Props) {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    repository.getInfoPageContent(pageName, (pageContent) => {
      setPageContent(pageContent);
    });
  });

  const startUrl = "/pages";
  if (!path.startsWith(startUrl) || path.length <= startUrl.length) {
    return null;
  }

  const pageName = path.substring(startUrl.length + 1);

  if (pageContent == "") {
    return null;
  }

  return <InfoPageComposer pageContent={pageContent}></InfoPageComposer>;
}
