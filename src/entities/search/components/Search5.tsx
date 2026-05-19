
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useSearch6 } from "../hooks/use-search-6";
export function Search5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="search5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search5;
