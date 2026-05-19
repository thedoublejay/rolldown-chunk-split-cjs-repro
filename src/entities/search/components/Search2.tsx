
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useSearch3 } from "../hooks/use-search-3";
export function Search2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="search2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search2;
