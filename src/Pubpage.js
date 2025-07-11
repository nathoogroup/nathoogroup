import React, {useState } from "react";
import {
  Typography,
  Box,
  Link,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const PaperSummary = ({ paper }) => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        <Link href={"https://doi.org/" + paper.doi } target="_blank" underline="hover" color="primary">
          {paper.title}
        </Link>
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {paper.journal} • {paper.year}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        <strong>Authors:</strong> {paper.authors}
      </Typography>

      <Typography variant="caption" color="text.secondary" display="block" mt={2}>
        DOI: {paper.doi}
      </Typography>
    </Box>
  );
};

const Pubpage = () => {
    const allPapers = [
        {
            title: "Evaluating the Bayes factor under model misspecification",
            authors: "Zhengxiao Wei, Farouk S. Nathoo, Michael E. J. Masson",
            journal: "Submitted for publication",
            year: "2025",
            doi: "",
            url: ""
        },
        {
            title: "A-LAVA: Germline genetic contribution to metabolic pathways in cancer. Submitted for Publication",
            authors: "Mansoureh Jalilkhany , Kiana Gallagher, Isabella Wehner, Phineas T. Hamilton, Sarah McPherson, Sarah McPhedran, Farouk Nathoo, Julian Lum, Ibrahim Numanagić",
            journal: "Submitted for publication",
            year: "2025",
            doi: "",
            url: ""
        },
        {
            title: "Prognostically favorable immune responses to ovarian cancer are distinguished by self-reactive intra-epithelial plasma cells",
            authors: "Allyson Claire Banville; Céline Marie Laumont; Karanvir Singh; Breeze Gladwin; Jaden Dedora; Liam Mitchell; Jen Wang; Alex Miranda; Bridget Mateyko; Elizabeth Chavez; Gian Luca Negri; Se Wing Grace Cheng; Julian Smazynski; Katy Milne; Kylee Wright; Malia Lampard; Nicole Gierc; Phineas T Hamilton; Sandra E Spencer; Shreena Kalaria*; Talen Oostenbroek; Victor Negrea Puskas; Christian Steidl; Gregg B Morin; Farouk S. Nathoo; Brad H Nelson",
            journal: "Submitted for publication",
            year: "2025",
            doi: "",
            url: ""
        },
        {
            title: "Editorial: Emerging trends in large-scale data analysis for neuroscience research",
            authors: "Nathoo FS, Krigolson OE, and Wang F",
            journal: "Frontiers in Neuroinformatics",
            year: "2024",
            doi: "10.3389/fninf.2024.1538787",
            url: "https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2024.1538787/full"
        },
        {
            title: "POI-SIMEX for Conditionally Poisson Distributed Biomarkers from Tissue Histology",
            authors: "Yang, A., Hamilton P.T., Nelson, B. H., Lum, J.J., Lesperance, M., Nathoo, F.S.",
            journal: "Submitted for publication",
            year: "2024",
            doi: "10.48550/arXiv.2409.14256",
            url: "https://doi.org/10.48550/arXiv.2409.14256"
        },
        {
            title: "Time-restricted eating alters lymphocyte counts, autophagy, and metabolite composition in chronic lymphocytic leukemia",
            authors: "Stringer, E., Wei, Z., Punch, S., Costie, N., Han, J., Goodlett, D., Nathoo, F.S., Lum, J., Macpherson, N.",
            journal: "Submitted for publication",
            year: "2024",
            doi: "10.1101/2024.12.16.24319108",
            url: ""
        },
        {
            title: "CD8+ T cell infiltration is associated with improved survival and negatively correlates with hypoxia in clear cell ovarian cancer",
            authors: "Guo, N., Yang, A., Farooq, F.B., Kalaria, S., Moss, E., DeVorkin, L., Lesperance, M., Benard, F., Wilson, D., Tinker, A.V., Nathoo, F.S., Hamilton, P.T., Lum, J.J.",
            journal: "Scientific Reports",
            year: "2023",
            doi: "10.1038/s41598-023-30655-3",
            url: "https://doi.org/10.1038/s41598-023-30655-3"
        },
        {
            title: "Neural Network Disease Classification Based Feature Extraction for Imaging Genetics",
            authors: "Beaulac, C., Wu, S., Gibson, E., Cao, J., Miranda, M., Rocha, L., Beg, M.F., Nathoo, F.S.",
            journal: "BMC Bioinformatics",
            year: "2023",
            doi: "10.1186/s12859-023-05394-x",
            url: "https://doi.org/10.1186/s12859-023-05394-x"
        },
        {
            title: "Investigating the relationship between the Bayes factor and the separation of credible intervals",
            authors: "Wei, Z., Nathoo, F.S., Masson, M.E.J.",
            journal: "Psychonomic Bulletin & Review",
            year: "2023",
            doi: "10.3758/s13423-023-02295-1",
            url: "https://doi.org/10.3758/s13423-023-02295-1"
        },
        {
            title: "Improving Rates of Germline BRCA Mutation Testing for Ovarian Cancer Patients on Vancouver Island, British Columbia, Canada: Implementation of a Local Consenting Seminar- a Quality Improvement Project",
            authors: "Barnhardt, L., Nathoo, F.S., Rauw, J.",
            journal: "Journal of Oncology Practice",
            year: "2022",
            doi: "10.1200/OP.22.00341",
            url: "https://doi.org/10.1200/OP.22.00341"
        },
        {
            title: "A review of Bayesian hypothesis testing and its practical implementation",
            authors: "Wei, Z., Yang, A., Rocha, L., Miranda, M., Nathoo, F.S.",
            journal: "Entropy",
            year: "2022",
            doi: "10.3390/e24020161",
            url: "https://doi.org/10.3390/e24020161"
        },
        {
            title: "Online Bayesian Learning for Mixtures of Spatial Spline Regressions with Mixed-Effects",
            authors: "Ge, S., Wang, S., Nathoo, F.S., Wang, L.",
            journal: "Journal of Statistical Computation and Simulation",
            year: "2021",
            doi: "10.1080/00949655.2021.2002329",
            url: "https://doi.org/10.1080/00949655.2021.2002329"
        },
        {
            title: "Sparse Estimation Strategies in Linear Mixed Effect Models for High-dimensional Data Application",
            authors: "Opoku, E.A., Nathoo, F., Ahmed, S.",
            journal: "Entropy",
            year: "2021",
            doi: "10.3390/e23101348",
            url: "https://doi.org/10.3390/e23101348"
        },
        {
            title: "Bayesian Methods for Imaging Genetics",
            authors: "Nathoo, F.S.",
            journal: "Journal of Brain, Behaviour and Cognitive Sciences",
            year: "2021",
            doi: "",
            url: ""
        },
        {
            title: "Special Issue on Neuroimaging data analysis: Guest Editors' Introduction",
            authors: "Nathoo, F.S., Kong, L., Yi, G.Y.",
            journal: "Canadian Journal of Statistics",
            year: "2021",
            doi: "10.1002/cjs.11613",
            url: "https://doi.org/10.1002/cjs.11613"
        },
        {
            title: "Ant Colony System Optimization for Spatiotemporal Modelling of Combined EEG and MEG Data",
            authors: "Opoku, E.A., Ahmed, S., Song, Y., Nathoo, F.",
            journal: "Entropy",
            year: "2021",
            doi: "10.3390/e23030329",
            url: ""
        },
        {
            title: "A Bayesian Spatial Model for Imaging Genetics",
            authors: "Song, Y., Ge, S., Cao, J., Wang, L., Nathoo, F.S.",
            journal: "Biometrics",
            year: "2021",
            doi: "10.1111/biom.13460",
            url: "https://doi.org/10.1111/biom.13460"
        },
        {
            title: "Spectral Dynamic Causal Modelling of Resting-State fMRI: Relating Effective Brain Connectivity in the Default Mode Network to Genetics",
            authors: "Nie, Y., Opoku, E., Yasmin, L., Song, Y., Wang, J., Wu, S., Scarapicchia, V., Gawryluk, J., Wang, L., Cao, J., Nathoo, F.S.",
            journal: "Statistical Applications in Genetics and Molecular Biology",
            year: "2020",
            doi: "10.1515/sagmb-2019-0058",
            url: "https://doi.org/10.1515/sagmb-2019-0058"
        },
        {
            title: "Parameter and Mixture Component Estimation in Spatial Hidden Markov Models: A Comparative Analysis of Computational Methods",
            authors: "Opoku, E., Ahmed, E., Nelson, T., Nathoo, F.S.",
            journal: "International Conference on Management Science and Engineering Management",
            year: "2020",
            doi: "10.1007/978-3-030-49829-0_25",
            url: ""
        },
        {
            title: "A Potts-Mixture Spatiotemporal Joint Model for Combined MEG and EEG Data",
            authors: "Song, Y., Nathoo, F.S., Babul A.",
            journal: "Canadian Journal of Statistics",
            year: "2019",
            doi: "10.1002/cjs.11519",
            url: "https://doi.org/10.1002/cjs.11519"
        },
        {
            title: "A Review of Statistical Methods in Imaging Genetics",
            authors: "Nathoo, F.S., Kong, L., Zhu, H.",
            journal: "Canadian Journal of Statistics",
            year: "2018",
            doi: "10.1002/cjs.11487",
            url: "https://doi.org/10.1002/cjs.11487"
        },
        {
            title: "Bayesian Analysis of fMRI data with Spatially-Varying Autoregressive Orders",
            authors: "Teng, M., Nathoo, F.S., Johnson, T.D.",
            journal: "Journal of the Royal Statistical Society: Series C",
            year: "2018",
            doi: "10.1111/rssc.12320",
            url: "https://doi.org/10.1111/rssc.12320"
        },
        {
            title: "A Better (Bayesian) Interval Estimate for Within-Subject Designs",
            authors: "Nathoo, F.S., Kilshaw, R.E., Masson, M.E.J.",
            journal: "Journal of Mathematical Psychology",
            year: "2018",
            doi: "10.1016/j.jmp.2018.07.005",
            url: "https://doi.org/10.1016/j.jmp.2018.07.005"
        },
        {
            title: "Time Series Analysis of fMRI Data: Spatial Modeling and Bayesian Computation",
            authors: "Teng, M., Johnson, T.D., Nathoo, F.S.",
            journal: "Statistics in Medicine",
            year: "2018",
            doi: "10.1002/sim.7680",
            url: "https://doi.org/10.1002/sim.7680"
        },
        {
            title: "Feature Learning and Classification in Neuroimaging: Predicting Cognitive Impairment from Magnetic Resonance Imaging",
            authors: "Shi S., Nathoo, F.S.",
            journal: "Proceedings of the 4th International Conference on Big Data and Information Analytics",
            year: "2018",
            doi: "10.48550/arXiv.1806.06415",
            url: ""
        },
        {
            title: "A Bayesian Group Sparse Multi-Task Regression Model for Imaging Genetics",
            authors: "Greenlaw, K., Szefer, E., Graham, J., Lesperance, M.L., Nathoo, F.S.",
            journal: "Bioinformatics",
            year: "2017",
            doi: "10.1093/bioinformatics/btx215",
            url: "https://doi.org/10.1093/bioinformatics/btx215"
        },
        {
            title: "Multivariate association between single-nucleotide polymorphisms in Alzgene linkage regions and structural changes in the brain: discovery, refinement and validation",
            authors: "Szefer, E., Lu, D., Nathoo, F.S., Beg, M.F., Graham, J.",
            journal: "Statistical Applications in Genetics and Molecular Biology",
            year: "2017",
            doi: "10.1515/sagmb-2016-0077",
            url: "https://doi.org/10.1515/sagmb-2016-0077"
        },
        {
            title: "Bayesian Computation for Log Gaussian Cox Processes: A Comparative Analysis of Methods",
            authors: "Teng, M., Nathoo, F.S., Johnson, T.D.",
            journal: "Journal of Statistical Computation and Simulation",
            year: "2017",
            doi: "10.1080/00949655.2017.1326117",
            url: "https://doi.org/10.1080/00949655.2017.1326117"
        },
        {
            title: "Characterizing spatial-temporal patterns of landscape disturbance and recovery in western Alberta, Canada using a functional data analysis approach",
            authors: "Bourbonnais ML, Nelson TA, Stenhouse GB, Wulder MA, White JC, Hobart GW, Hermosilla T, Coops NC, Nathoo F.S., Darimont C.",
            journal: "Ecological Informatics",
            year: "2017",
            doi: "10.1016/j.ecoinf.2017.04.010",
            url: "https://doi.org/10.1016/j.ecoinf.2017.04.010"
        },
        {
            title: "A Bayesian approach to the mixed effects analysis of repeated measures accuracy studies",
            authors: "Song, Y., Nathoo, F.S., Masson, M.E.J.",
            journal: "Journal of Memory and Language",
            year: "2017",
            doi: "10.1016/j.jml.2017.05.002",
            url: "https://doi.org/10.1016/j.jml.2017.05.002"
        },
        {
            title: "Comparison of Change Point Models: A Simulation and Case Study in Modeling Lung Function in Children with Cystic Fibrosis",
            authors: "Moss, A., Juarez-Colunga, E., Nathoo, F.S., Wagner, B., Sagel, S.",
            journal: "Statistics in Medicine",
            year: "2016",
            doi: "10.1002/sim.6845",
            url: "https://doi.org/10.1002/sim.6845"
        },
        {
            title: "High-dimensional classification for brain decoding",
            authors: "Croteau, N., Nathoo, F.S., Cao, J., Budney, R.",
            journal: "Big and Complex Data Analysis: Statistical Methodologies and Applications, Springer",
            year: "2016",
            doi: "10.1007/978-3-319-41573-4_15",
            url: ""
        },
        {
            title: "Regularization parameter selection for a Bayesian multi-level group lasso regression model with application to imaging genomics",
            authors: "Nathoo, F.S., Greenlaw, K., Lesperance, M.L.",
            journal: "Pattern Recognition in Neuroimaging (PRNI), 2016 International Workshop on IEEE",
            year: "2016",
            doi: "10.1109/PRNI.2016.7552328",
            url: "https://doi.org/10.1109/PRNI.2016.7552328"
        },
        {
            title: "A Joint Model for Interval-Censored Functional Decline Trajectories Under Informative Observation",
            authors: "Lesperance, M.L., Sabelnykova V., Nathoo F.S., Lau, F., Downing, G.M.",
            journal: "Statistics in Medicine",
            year: "2015",
            doi: "10.1002/sim.6582",
            url: "https://doi.org/10.1002/sim.6582"
        },
        {
            title: "Bayesian Alternatives to Null-Hypothesis Significance Testing for Repeated Measures Designs",
            authors: "Nathoo, F.S., Masson, E.J.M.",
            journal: "Journal of Mathematical Psychology",
            year: "2015",
            doi: "10.1016/j.jmp.2015.03.003",
            url: "https://doi.org/10.1016/j.jmp.2015.03.003"
        },
        {
            title: "Predictive crime mapping",
            authors: "Fitterer, J., Nelson, T.A., Nathoo, F.S.",
            journal: "Police Practice and Research",
            year: "2014",
            doi: "10.1080/15614263.2014.972618",
            url: "https://doi.org/10.1080/15614263.2014.972618"
        },
        {
            title: "Assessing quality of spatial models using the structural similarity index and posterior predictive checks",
            authors: "Robertson, C., Long, J.A., Nathoo, F.S., Nelson, T.A., Plouffe, C.C.F.",
            journal: "Geographical Analysis",
            year: "2014",
            doi: "10.1111/gean.12028",
            url: ""
        },
        {
            title: "Statistical Modeling of Electromagnetic Neuroimaging data",
            authors: "Nathoo, F.S., Babul, A.",
            journal: "Notes of the Canadian Mathematical Society",
            year: "2014",
            doi: "",
            url: ""
        },
        {
            title: "A Variational Bayes Spatiotemporal Model for Electromagnetic Brain Mapping",
            authors: "Nathoo, F.S., Babul, A., Moiseev, A., Virji-Babul, N., Beg, M.F.",
            journal: "Biometrics",
            year: "2013",
            doi: "10.1111/biom.12126",
            url: "https://doi.org/10.1111/biom.12126"
        },
        {
            title: "Towards a kinetic based probabilistic time geography",
            authors: "Long, JA, Nelson, TA, Nathoo, F.S.",
            journal: "International Journal of Geographical Information Science",
            year: "2013",
            doi: "10.1080/13658816.2013.818151",
            url: "https://doi.org/10.1080/13658816.2013.818151"
        },
        {
            title: "Guest editors' introduction to the special issue on spatial statistics for neuroimaging",
            authors: "Nathoo, F.S., Lawson, A.B., Dean, C.B.",
            journal: "Statistical Methods in Medical Research",
            year: "2012",
            doi: "10.1177/0962280212448971",
            url: "https://doi.org/10.1177/0962280212448971"
        },
        {
            title: "Comparing Variational Bayes with Markov Chain Monte Carlo for Bayesian Computation in Neuroimaging",
            authors: "Nathoo, F.S., Lesperance, M.L., Lawson, A.B., Dean, C.B.",
            journal: "Statistical Methods in Medical Research",
            year: "2012",
            doi: "10.1177/0962280212448973",
            url: "https://doi.org/10.1177/0962280212448973"
        },
        {
            title: "A Skew-t Space-Varying Regression Model for the Spectral Analysis of Resting State Brain Activity",
            authors: "Ismail, S., Sun, W., Nathoo, F.S., Babul, A., Moiseev, A., Beg, M.F., Virji-Babul, N.",
            journal: "Statistical Methods in Medical Research",
            year: "2012",
            doi: "10.1177/0962280212448974",
            url: "https://doi.org/10.1177/0962280212448974"
        },
        {
            title: "Skew-Elliptical Spatial Random Effect Modeling for Areal Data with Application to Mapping Health Utilization Rates",
            authors: "Nathoo, F.S., Ghosh, P.",
            journal: "Statistics in Medicine",
            year: "2012",
            doi: "10.1002/sim.5504",
            url: "https://doi.org/10.1002/sim.5504"
        },
        {
            title: "A Bayesian Space-Time Model for Discrete Spread Processes on a Lattice",
            authors: "Long, J.A., Robertson, C., Nathoo, F.S., Nelson, T.A.",
            journal: "Spatial and Spatio-Temporal Epidemiology",
            year: "2012",
            doi: "10.1016/j.sste.2012.04.008",
            url: "https://doi.org/10.1016/j.sste.2012.04.008"
        },
        {
            title: "Application of Bayesian spatial smoothing models to assess agricultural self-sufficiency",
            authors: "Morrison, K.T., Nelson, T.A., Nathoo, F.S., Ostry A.S.",
            journal: "International Journal of Geographical Information Science",
            year: "2011",
            doi: "10.1080/13658816.2011.633491",
            url: "https://doi.org/10.1080/13658816.2011.633491"
        },
        {
            title: "A hidden Markov model for analysis of frontline veterinary data for emerging zoonotic disease surveillance",
            authors: "Robertson, C., Sawford, K., Gunawardena, S., Nelson, T.A., Nathoo, F.S., Stephen, C.",
            journal: "PLoS ONE",
            year: "2011",
            doi: "10.1371/journal.pone.0024833",
            url: "https://doi.org/10.1371/journal.pone.0024833"
        },
        {
            title: "Playoff Series: Psychological Ups and Downs",
            authors: "Swartz, T. B., Tennakoon, A., Nathoo, F.S., Tsao, M., Sarohia, P.",
            journal: "Journal of Quantitative Analysis in Sports",
            year: "2011",
            doi: "10.2202/1559-0410.1372",
            url: "https://doi.org/10.2202/1559-0410.1372"
        },
        {
            title: "Dynamic facial expression recognition in Down syndrome",
            authors: "Virji-Babul, N., Watt, K., Nathoo, F.S., Johnson, P.",
            journal: "Physical and Occupational Therapy in Pediatrics",
            year: "2011",
            doi: "10.3109/01942638.2011.653626",
            url: "https://doi.org/10.3109/01942638.2011.653626"
        },
        {
            title: "Assessing noninferiority in a three-arm trial using the Bayesian approach",
            authors: "Ghosh, P., Nathoo F.S., Gonenn, M., Tiwari, R.C.",
            journal: "Statistics in Medicine",
            year: "2010",
            doi: "10.1002/sim.4244",
            url: ""
        },
        {
            title: "Joint spatial modeling of recurrent infection and growth with processes under intermittent observation",
            authors: "Nathoo, F.S.",
            journal: "Biometrics",
            year: "2010",
            doi: "10.1111/j.1541-0420.2009.01305.x",
            url: ""
        },
        {
            title: "Space-time regression modeling of tree growth using the skew-t distribution",
            authors: "Nathoo, F.S.",
            journal: "Environmetrics",
            year: "2010",
            doi: "10.1002/env.1057",
            url: "https://doi.org/10.1002/env.1057"
        },
        {
            title: "Spatial multi-state transitional models for longitudinal event data",
            authors: "Nathoo, F.S., Dean, C.B.",
            journal: "Biometrics",
            year: "2008",
            doi: "10.1111/j.1541-0420.2007.00785.x",
            url: ""
        },
        {
            title: "Spatial and mixture models for recurrent event processes",
            authors: "Dean, C.B., Nathoo, F.S., Nielson, J.D.",
            journal: "Environmetrics",
            year: "2007",
            doi: "10.1111/j.1541-0420.2007.00785.x",
            url: ""
        },
        {
            title: "A mixed mover-stayer model for spatio-temporal two-state processes",
            authors: "Nathoo, F.S., Dean, C.B.",
            journal: "Biometrics",
            year: "2007",
            doi: "10.1111/j.1541-0420.2007.00752.x.",
            url: ""
        },
        {
            title: "Codling moth incidence in Okanagan orchards",
            authors: "Nathoo, F.S., Ainsworth, L., Gill, P., Dean, C.B.",
            journal: "Canadian Journal of Statistics",
            year: "2006",
            doi: "10.1002/cjs.5550340310",
            url: ""
        },
        {
            title: "Spatial multi-state models with application to revascularization intervention in Quebec",
            authors: "Nathoo, F.S., Dean, C.B.",
            journal: "Geomatica",
            year: "2005",
            doi: "10.5623/geomat-2005-0040",
            url: ""
        }
    ];

    const [selectedYear, setSelectedYear] = useState("2025");
    const availableYears = Array.from({ length: 25 }, (_, i) => 2025 - i);

    const papers = allPapers.filter(paper => paper.year === selectedYear);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

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
                        <PaperSummary paper={paper} />
                        {index < papers.length - 1 && <Divider sx={{ marginY: 2 }} />}
                    </Box>
                ))
            )}
        </div>
    );
};

export default Pubpage;
