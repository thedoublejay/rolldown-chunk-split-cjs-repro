
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useSearch2 } from "../hooks/use-search-2";
export function Search1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="search1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search1;
