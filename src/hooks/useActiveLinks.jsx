import { useParams } from "react-router-dom";

const useActiveLinks = () => {
  const aciveLink = useParams().page;
  return aciveLink;
}

export default useActiveLinks