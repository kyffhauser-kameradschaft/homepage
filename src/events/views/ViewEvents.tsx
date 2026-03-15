import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Helmet } from "react-helmet-async"
import { EventList } from "../components"


export default function () {
	return (
		<>
			<Helmet>
				<title>Veranstaltungen</title>
				<meta name="description" content="Die nächsten Veranstaltungen des Vereins" />

				<link rel="canonical" href="https://kyffhäuser-kameradschaft.de/veranstaltungen" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": [
							{
								"@type": "ListItem",
								"position": 1,
								"name": "Veranstaltungen",
								"item": "https://kyffhäuser-kameradschaft.de/veranstaltungen"
							}
						]
					})}
				</script>
			</Helmet>

			<Container maxWidth="md">
				<Paper>
					<Stack spacing={4}>
						<Typography variant="h3" fontWeight="bold" textAlign="center" component="span" data-nosnippet>
							Veranstaltungen
						</Typography>

						<EventList file="/download/veranstaltungen.ics" />
					</Stack>
				</Paper>
			</Container>
		</>
	)
}
