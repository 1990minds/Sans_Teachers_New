import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { logOut } from "../api/teacher";
import logo from "../Images/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import '../App.css'


const drawerWidth = 220;


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
    transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    }),
  })
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//   easing: theme.transitions.easing.sharp,
//   duration: theme.transitions.duration.leavingScreen,
//   }),
//   height:'70px' ,
//   backgroundColor: '#FFFF',
//   ...(open && {
//   width: `calc(100% - ${drawerWidth}px)`,
//   marginLeft: `${drawerWidth}px`,
//   transition: theme.transitions.create(["margin", "width"], {
//   easing: theme.transitions.easing.easeOut,
//   duration: theme.transitions.duration.enteringScreen,
//   }),
//   }),
// }));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard({ Compenets }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
    {/* <CssBaseline /> */}
    {/* <AppBar position="fixed" open={open} > */}
    <Toolbar>
    <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={{ mr: 2, ...(open && { display: "none", }) }}
    >
    <ChevronRightIcon />
    </IconButton> 
    </Toolbar>
    {/* </AppBar> */}
    <Drawer
    sx={{
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    },
  }}
  variant="persistent"
  anchor="left"
  open={open}
>
  <DrawerHeader className="bg-[#ffff]">
  <img src={logo} alt="logo" className="mr-14 w-[100px] h-[90px] flex  items-start" />
  {/* <IconButton onClick={handleDrawerClose} style={{ color: 'blue' }}>
  {theme.direction === "ltr" ? (
  <ChevronLeftIcon />
  ) : (
  <ChevronRightIcon />
  )}
  </IconButton> */}
  </DrawerHeader>
  <Divider />
  <List sx={{ flexGrow: 1 }}> 
 

  <Link to={"/exams"}>
  <ListItem disablePadding>
  <ListItemButton>
  <ListItemIcon>
  < DashboardIcon style={{fontSize:"20px", marginTop:'5px', marginRight:'10px'}} className={isActive("/exams") ? "active-text" : ""}/>
   <ListItemText primary={"Dashboard"} className={isActive("/exams") ? "active-text" : ""} />
  </ListItemIcon>
  </ListItemButton>
  </ListItem>
  </Link>

  </List>
  <Divider />
  <List>
  <ListItem disablePadding onClick={() => dispatch(logOut())}>
  <ListItemButton>
  <ListItemIcon>
  <LogoutIcon />
  </ListItemIcon>
  <ListItemText primary={"Log Out"} />
  </ListItemButton>
  </ListItem>
  </List>
  </Drawer>
  <Main open={open}>
  {/* <DrawerHeader /> */}
  <Compenets />
  </Main>
  </Box>
  );
}
