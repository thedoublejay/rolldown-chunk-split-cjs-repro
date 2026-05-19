
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";



import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared2 } from "../hooks/use-shared-2";



export function Shared1({ label, children }) {
  const { state, derived } = useShared2(label);
  const { register } = useForm();
  const cls = clsx("shared-1", { active: state });
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
export default Shared1;
