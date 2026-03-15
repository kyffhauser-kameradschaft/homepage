import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { useHandyViewport, useTabletViewport } from "../../util"


export default function () {
	const tablet = useTabletViewport()
	const handy = useHandyViewport()

	return (
		<>
			<AppBar component="header" color="primary" elevation={0}>
				<Toolbar>
					<Stack component="span" data-nosnippet direction="row" width="100%" alignItems="center" justifyContent="center">
						<img
							draggable={false}
							src="/logo.png"
							alt="Kyffhäuser Kameradschaft Berleburg 1871 e.V."
							style={{
								height: tablet ? "80px" : "100px"
							}}
						/>

						<Typography fontFamily="Cormorant Upright" fontWeight="bold" fontSize={handy ? "2rem" : tablet ? "2.75rem" : "3.25rem"} sx={{ userSelect: "none" }}>
							{handy ? "Kyffhäuser Kameradschaft" : "Kyffhäuser Kameradschaft Berleburg 1871 e.V."}
						</Typography>
					</Stack>
				</Toolbar>
			</AppBar>

			<AppBar component="nav" color="secondary" elevation={0} sx={{ position: "sticky", top: 0, zIndex: 100 }}>
				<Toolbar>
					<Stack component="span" data-nosnippet spacing={1} direction="row" width="100%" alignItems="center" justifyContent="center">
						<Button size="large" component={Link} to="/" variant="text" color="inherit">
							Start
						</Button>

						<Button size="large" component={Link} to="/veranstaltungen" variant="text" color="inherit">
							Veranstaltungen
						</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	)
}
