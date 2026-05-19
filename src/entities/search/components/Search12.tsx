
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useSearch5 } from "../hooks/use-search-5";
export function Search12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="search12">item</Shared13><LegacyContainer13 title="search-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search12;
