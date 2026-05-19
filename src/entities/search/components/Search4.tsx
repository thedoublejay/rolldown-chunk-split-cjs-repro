
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useSearch5 } from "../hooks/use-search-5";
export function Search4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="search4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search4;
