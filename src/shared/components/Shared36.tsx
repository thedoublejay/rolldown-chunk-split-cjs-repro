
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared17 } from "../hooks/use-shared-17";

const Box36 = styled.div` color: ${tokens.colors.text}; padding: 8px; `;

export function Shared36({ label, children }) {
  const { state, derived } = useShared17(label);
  const { register } = useForm();
  const cls = clsx("shared-36", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        <DataGrid rows={[]} columns={[]} autoHeight />
        
        <Box36>emotion</Box36>
      </Stack>
    </Paper>
  );
}
export default Shared36;
