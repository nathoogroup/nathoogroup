import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box, Link, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";

const RepoSummary = ({ username, repository }) => {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await fetch(`https://api.github.com/repos/${username}/${repository}`);
      const data = await response.json();
      setRepo(data);
    };
    fetchRepo();
  }, [username, repository]);

  if (!repo) return <Typography>Loading...</Typography>;

  return (
    <Card
      variant="outlined"
      sx={{
        margin: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={1}>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
          <Typography variant="body1">
            <Link href={`https://github.com/${repo.owner.login}`} target="_blank" underline="hover">
              {repo.owner.login}
            </Link>
          </Typography>
        </Box>
        <Typography variant="h6" component="div">
          <Link href={repo.html_url} target="_blank" underline="hover">
            {repo.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {repo.description || "No description available"}
        </Typography>
        <Box mt={2} display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center">
            <StarIcon sx={{ color: "#FFD700", marginRight: 0.5 }} />
            <Typography variant="body2">{repo.stargazers_count}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ForkRightIcon sx={{ color: "#4CAF50", marginRight: 0.5 }} />
            <Typography variant="body2">{repo.forks_count}</Typography>
          </Box>
        </Box>
        <Typography variant="caption" color="text.secondary" display="block" mt={1}>
          Last updated: {new Date(repo.updated_at).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SoftwarePage = () => {
  const repositories = [
    { username: "zhengxiaoUVic", repository: "rmBayes" },
    { username: "Aijunyan", repository: "POI-SIMEX" },
    { username: "v2south", repository: "PottsMix" },
    { username: "cran", repository: "bgsmtr" },


  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Software
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {repositories.map((repo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RepoSummary username={repo.username} repository={repo.repository} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SoftwarePage;
