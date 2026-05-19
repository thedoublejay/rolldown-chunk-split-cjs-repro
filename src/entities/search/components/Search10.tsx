
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useSearch3 } from "../hooks/use-search-3";
export function Search10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="search10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search10;
