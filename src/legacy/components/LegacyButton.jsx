
import { Grid } from "@mui/material";
import get from "lodash/get";
import has from "lodash/has";
import { useEffect } from "react";
import { withStyles } from "tss-react/mui";
import legacyButtonStyle from "./LegacyButton.style";

function button(props) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Enter" && props.onEnterClick) props.onEnterClick(); };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  });
  const { btnType, value, classes, onClick, tabs } = props;
  if (btnType === "tabbedNavigation") {
    return <Grid container className={classes.tabsWrapper}>{tabs.map((e, i) => <button type="button" key={i} className={e.enable ? classes.tabbedEnabled : classes.tabbedDisabled} onClick={!e.enable ? e.onClick : () => {}}>{e.name}</button>)}</Grid>;
  }
  return <button type="button" value={value} className={`${classes[btnType] || classes.primary} ${get(props, ["className"], "")}`} onClick={get(props, ["onClick"], () => {})}>{props.children}{has(props, ["icon"]) ? <div className={classes.iconWrapper}>{props.icon}</div> : null}</button>;
}
export default withStyles(button, legacyButtonStyle);
