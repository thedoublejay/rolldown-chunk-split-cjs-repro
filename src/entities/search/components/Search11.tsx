
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useSearch4 } from "../hooks/use-search-4";
export function Search11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="search11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search11;
