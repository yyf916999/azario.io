import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { useState } from "react";
interface Props {
  heading: string;
  onSelectItem: (item: string) => void;
  items: string[];
}

function Classes({ heading, onSelectItem, items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedSIndex, setSelectedSIndex] = useState(-1);
  const [classesList, setClassesList] = useState([]);
  const [showClasses, setShowClasses] = useState(false);
  let classes = [""];
  const math = [
    "Integrated Math 1",
    "Integrated Math 2",
    "Integrated Math 3",
    "AP Calculus AB",
    "AP Calculus BC",
    "AP Precalculus",
    "Precalculus",
    "General Math",
    "Algebra 1",
    "Algebra 2",
    "Geometry",
    "Statistics",
    "AP Statistics",
    "Others",
  ];
  const la = [
    "General English",
    "AP Literature & Composition",
    "AP Language & Composition",
    "Others",
  ];
  const science = [
    "Physics",
    "Chemistry",
    "Biology",
    "Environmental Science",
    "AP Biology",
    "AP Chemistry",
    "AP Physics 1",
    "AP Physics 2",
    "AP Physics C-Mechanics",
    "AP Physics C-Magnetism",
    "AP Environmental Science",
    "Geography",
    "Astronomy",
    "Computer Science",
    "Computer Science A",
    "AP Computer Science Principles",
    "Others",
  ];
  const ah = [
    "US History",
    "World History",
    "European History",
    "AP US History",
    "AP European History",
    "AP World History",
    "US Government",
    "AP US Government & Politics",
    "AP Art History",
    "AP Music Theory",
    "AP Psychology",
    "Others",
  ];
  const econ = [
    "Macroeconomics",
    "AP Macroeconomics",
    "Microeconomics",
    "AP Microeconomics",
    "Others",
  ];
  //   classesDic = { 0: math };
  classes = math;
  let switchCases = -1;
  return (
    <>
      <Box display="flex">
        <Grid container spacing={1} sx={{ ml: 45, mt: 3 }}>
          <List orientation="horizontal" sx={{ typography: "body1" }}>
            <Grid item xs={2}>
              <ListItem key={"header"}>{heading}</ListItem>
            </Grid>
            {items.map((item, index) => (
              <Grid item xs={8 / 5} key={index}>
                <ListItem
                  color={selectedIndex === index ? "success" : "neutral"}
                  variant={selectedIndex === index ? "soft" : "plain"}
                  key={item}
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(index.toString());
                    onSelectItem(item);
                    setShowClasses(true);
                    onSelectItem(classes[0]);
                  }}
                >
                  {item}
                </ListItem>
              </Grid>
            ))}
          </List>
        </Grid>
      </Box>
      <div></div>
      {showClasses ? (
        <Box display="flex">
          <Grid container spacing={1} sx={{ ml: 45, mt: 3 }}>
            <List orientation="horizontal" sx={{ typography: "body1" }}>
              <Grid item xs={2}>
                <ListItem key={"header"}>{"Specific Subject"}</ListItem>
              </Grid>
              {classes.map((item_1, index_1) => (
                <Grid item xs={8 / 5} key={index_1}>
                  <ListItem
                    color={selectedSIndex === index_1 ? "success" : "neutral"}
                    variant={selectedSIndex === index_1 ? "soft" : "plain"}
                    key={item_1}
                    onClick={() => {
                      setSelectedSIndex(index_1);
                      onSelectItem(index_1.toString());
                      onSelectItem(item_1);
                    }}
                  >
                    {item_1}
                  </ListItem>
                </Grid>
              ))}
            </List>
          </Grid>
        </Box>
      ) : null}
    </>
  );
}

export default Classes;
