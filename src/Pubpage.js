import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Link,
  CircularProgress,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const decodeHTML = (input) => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(input, "text/html").body.textContent;
  return decodedString;
};

const DOISummary = ({ doi, fallbackYear }) => {
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDOI = async () => {
      try {
        const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
        const data = await response.json();
        setPaper(data.message);
      } catch (error) {
        console.error(`Error fetching DOI: ${doi}`, error);
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

  const getYear = () => {
    const dateParts =
      paper["published-print"]?.["date-parts"]?.[0] ||
      paper["published-online"]?.["date-parts"]?.[0] ||
      null;
    return dateParts ? dateParts[0] : fallbackYear || "Unknown Year";
  };

  const year = getYear();

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        <Link href={paper.URL} target="_blank" underline="hover" color="primary">
          {decodeHTML(paper.title ? paper.title[0] : "Untitled")}
        </Link>
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {decodeHTML(paper["container-title"] ? paper["container-title"][0] : "No journal name")} • {year}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        <strong>Authors:</strong>{" "}
        {paper.author
          ? paper.author.map((author) => `${decodeHTML(author.given)} ${decodeHTML(author.family)}`).join(", ")
          : "No authors available"}
      </Typography>

      <Typography variant="caption" color="text.secondary" display="block" mt={2}>
        DOI: {decodeHTML(doi)}
      </Typography>
    </Box>
  );
};

const Pubpage = () => {
    const dois = [
        "10.48550/arXiv.2409.14256",
        "10.1038/s41598-023-30655-3",
        "10.1186/s12859-023-05394-x",
        "10.3758/s13423-023-02295-1",
        "10.1200/OP.22.00341",
        "10.3390/e24020161",
        "10.1080/00949655.2021.2002329",
        "10.3390/e23101348",
        "10.1002/cjs.11613",
        "10.3390/e23030329",
        "10.1111/biom.13460",
        "10.1515/sagmb-2019-0058",
        "10.1002/cjs.11519",
        "10.1002/cjs.11487",
        "10.1111/rssc.12320",
        "10.1016/j.jmp.2018.07.005",
        "10.1002/sim.7680",
        "10.1093/bioinformatics/btx215",
        "10.1515/sagmb-2016-0077",
        "10.1080/00949655.2017.1326117",
        '10.1016/j.ecoinf.2017.04.010',
        '10.1016/j.jml.2017.05.002',
        '10.1002/sim.6845',
        '10.1109/PRNI.2016.7552328',
        '10.1002/sim.6582',
        '10.1016/j.jmp.2015.03.003',
        '10.1080/15614263.2014.972618',
        '10.1111/gean.12028',
        '10.1111/biom.12126',
        '10.1080/13658816.2013.818151',
        '10.1177/0962280212448971',
        '10.1177/096228021244897',
        '10.1177/0962280212448974',
        '10.1002/sim.5504',
        '10.1016/j.sste.2012.04.008',
        '10.1080/13658816.2011.633491',
        '10.1371/journal.pone.0024833',
        '10.2202/1559-0410.1372',
        '10.1002/sim.4244',
        '10.1111/j.1541-0420.2009.01305.x',
        '10.1002/env.1057',
        '10.1111/j.1541-0420.2007.00785.x',
        '10.1002/env.870',
        '10.1111/j.1541-0420.2007.00752.x'
      ];

    const [papers, setPapers] = useState([]);
    const [selectedYear, setSelectedYear] = useState("2023");
    const [loading, setLoading] = useState(true);

    // Generate array of years from 2024 to 2000
    const availableYears = Array.from({ length: 25 }, (_, i) => 2024 - i);

    useEffect(() => {
        const fetchDOI = async (doi) => {
            try {
                // First check if DOI exists in Crossref registry
                const agencyResponse = await fetch(`https://api.crossref.org/works/${doi}/agency`);
                if (!agencyResponse.ok) {
                    console.warn(`DOI not found in Crossref registry: ${doi}`);
                    return null;
                }

                // If DOI exists, fetch the full details
                const response = await fetch(`https://api.crossref.org/works/${doi}`);
                if (!response.ok) {
                    console.warn(`Could not fetch DOI details: ${doi}`);
                    return null;
                }
                return await response.json();
            } catch (error) {
                console.error(`Error fetching DOI: ${doi}`, error);
                return null;
            }
        };

        const fetchDOIsSequentially = async () => {
            setLoading(true);
            const results = [];
            
            for (const doi of dois) {
                const result = await fetchDOI(doi);
                if (result) {
                    results.push(result);
                }
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            const paperData = results
                .map(result => result.message)
                .filter(Boolean)
                .filter(paper => {
                    const dateParts = 
                        paper["published-print"]?.["date-parts"]?.[0] ||
                        paper["published-online"]?.["date-parts"]?.[0];
                    const year = dateParts ? dateParts[0].toString() : null;
                    return year === selectedYear;
                });
            setPapers(paperData);
            setLoading(false);
        };

        fetchDOIsSequentially();
        // eslint-disable-next-line
    }, [selectedYear]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="400px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
            <Typography variant="h4" gutterBottom textAlign="left">
                Publications
            </Typography>

            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <InputLabel id="year-filter-label">Filter by Year</InputLabel>
                <Select
                    labelId="year-filter-label"
                    value={selectedYear}
                    onChange={handleYearChange}
                    label="Filter by Year"
                >
                    {availableYears.map((year) => (
                        <MenuItem key={year} value={year.toString()}>
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {papers.length === 0 ? (
                <Typography variant="body1" textAlign="center">
                    No publications found for {selectedYear}
                </Typography>
            ) : (
                papers.map((paper, index) => (
                    <Box key={index} marginBottom={2}>
                        <DOISummary 
                            doi={paper.DOI || "Unknown DOI"} 
                            fallbackYear={paper["published-print"]?.["date-parts"]?.[0]?.[0]?.toString()}
                        />
                        {index < papers.length - 1 && <Divider sx={{ marginY: 2 }} />}
                    </Box>
                ))
            )}
        </div>
    );
};

export default Pubpage;
