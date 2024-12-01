import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Link, CircularProgress, Divider, Grid } from "@mui/material";

const decodeHTML = (input) => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(input, "text/html").body.textContent;
  return decodedString;
};

const DOISummary = ({ doi }) => {
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDOI = async () => {
      try {
        const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
        const data = await response.json();
        setPaper(data.message);
      } catch (error) {
        console.error("Error fetching DOI:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDOI();
  }, [doi]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="150px">
        <CircularProgress />
      </Box>
    );
  }

  if (!paper) {
    return (
      <Typography color="error" textAlign="center">
        Could not fetch data for DOI: {doi}
      </Typography>
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Link href={paper.URL} target="_blank" underline="hover" color="primary">
            {decodeHTML(paper.title ? paper.title[0] : "Untitled")}
          </Link>
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {decodeHTML(paper["container-title"] ? paper["container-title"][0] : "No journal name")} •{" "}
          {paper["published-print"]
            ? `${paper["published-print"]["date-parts"][0].join("-")}`
            : "Unknown Date"}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="body1" gutterBottom>
          <strong>Authors:</strong>
        </Typography>
        {paper.author ? (
          <Box component="ul" sx={{ padding: 0, margin: 0, listStyle: "none" }}>
            {paper.author.map((author, index) => (
              <Typography key={index} variant="body2" component="li">
                {decodeHTML(author.given)} {decodeHTML(author.family)}
              </Typography>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No authors available
          </Typography>
        )}

        <Typography variant="caption" color="text.secondary" display="block" mt={2}>
          DOI: {decodeHTML(doi)}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Pubpage = () => {
  const dois = [
    "10.3758/s13423-023-02295-1", // Example DOI 1
    "10.1200/OP.22.00341", // Example DOI 3
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Publications
      </Typography>
      <Grid container spacing={3}>
        {dois.map((doi, index) => (
          <Grid item xs={12} key={index}>
            <DOISummary doi={doi} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Pubpage;
