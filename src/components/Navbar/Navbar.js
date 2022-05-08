import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const pages = ["equipo", "buscar", "pokemons"];
export const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			elevation={1}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<Link
									to={`/${page}`}
									key={page}
									style={{ textDecoration: "none", color: "#fff" }}
								>
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							justifyContent: { md: "center" },
							alignItems: { md: "center" },
							width: { md: "100%" },
						}}
					>
						{pages.map((page) => (
							<Link
								to={`/${page}`}
								style={{ textDecoration: "none", color: "#fff", padding: "0 1rem" }}
								key={page}
							>
								<Button
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										display: "block",
										fontSize: "1.25rem",
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
