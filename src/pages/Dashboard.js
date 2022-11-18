import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import { UseFetch } from "../helpers/functions";

export default function Dashboard() {
  const { contactList } = UseFetch();
  console.log(contactList?.img_url);
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {contactList?.length === 0 ? (
          <p>Loading </p>
        ) : (
          contactList?.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{ width: 320, margin: "1rem" }}
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={item.img} loading="lazy" alt="img" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="md"
                  variant="solid"
                  color="danger"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                <Link href="#multiple-actions" overlay underline="none">
                  {item.title}
                </Link>
              </Typography>
              <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                <Link href="#multiple-actions">{item.content}</Link>
              </Typography>
              <Divider inset="context" />
              <CardOverflow
                variant="soft"
                sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  bgcolor: "background.level1",
                }}
              >
                <Typography
                  level="body3"
                  sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                  6.3k views
                </Typography>
                <Divider orientation="vertical" />
                <Typography
                  level="body3"
                  sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                  1 hour ago
                </Typography>
              </CardOverflow>
            </Card>
          ))
        )}
      </Box>
    </>
  );
}
