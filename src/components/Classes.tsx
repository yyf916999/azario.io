import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
interface Props {
  item: number;
}

function Classes({ item }: Props) {
  let classes;
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
  switch (item) {
    case 0:
      classes = math;
      break;
    case 1:
      classes = la;
      break;
    case 2:
      classes = science;
      break;
    case 3:
      classes = ah;
      break;
    case 4:
      classes = econ;
      break;
    default:
      classes = [];
  }
  return (
    <>
      {" "}
      <Box display="flex" justifyContent="center" alignItems="center"></Box>
      <List orientation="horizontal" sx={{ typography: "body1" }}></List>
    </>
  );
}

export default Classes;
