
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useSearch1 } from "../hooks/use-search-1";
export function Search8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="search8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search8;
