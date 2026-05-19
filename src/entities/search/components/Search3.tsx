
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useSearch4 } from "../hooks/use-search-4";
export function Search3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="search3">item</Shared4><LegacyContainer4 title="search-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search3;
