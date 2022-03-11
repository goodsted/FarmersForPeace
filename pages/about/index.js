import { Grid, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function About() {
    const router = useRouter()

    return (
        <Layout bgColor="#EBF3FE">
            <Grid container sx={{ p: 3 }}>
                <Typography variant="h1" color="primary" sx={{ mb: 3, fontSize: 32 }}>
                    Action for Ukraine
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    A lot of people may need to leave Ukraine in the near future and all of them need a place to stay, an activity to do and most of all loving human connections.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    At the same time, a lot of European farmers suffer from loneliness due to their often remote locations and they also often have trouble to find helping hands, especially in the upcoming
                    spring season.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    If there are farmers which are willing to host refugees from Ukraine, submit your interest and you&apos;ll appear on the map for those looking to find a safe space.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    If you are not a farmer but still would like to host refugees, you can also take part!
                </Typography>
            </Grid>
        </Layout>
    )
}