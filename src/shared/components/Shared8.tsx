
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import { DataGrid } from "@mui/x-data-grid";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared9 } from "../hooks/use-shared-9";



export function Shared8({ label, children }) {
  const { state, derived } = useShared9(label);
  const { register } = useForm();
  const cls = clsx("shared-8", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        <DataGrid rows={[]} columns={[]} autoHeight />
        
        
      </Stack>
    </Paper>
  );
}
export default Shared8;
