import { fetchTrees } from "../lib/data";
import Slader from "./Slader";

export default async function ParentSlader() {
  const trees = await fetchTrees();

  return <>
    <Slader trees={trees} />
  </>
}
