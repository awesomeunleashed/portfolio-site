import { useEffect } from "react";

const baseTitle = "Asher Tuggle | ";

const useTitle = (title: string) =>
  useEffect(() => {
    document.title = baseTitle + title;
  }, []);

export default useTitle;
