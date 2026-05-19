
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";



import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared10 } from "../hooks/use-shared-10";



export function Shared29({ label, children }) {
  const { state, derived } = useShared10(label);
  const { register } = useForm();
  const cls = clsx("shared-29", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        
        
        
      </Stack>
    </Paper>
  );
}
export default Shared29;
