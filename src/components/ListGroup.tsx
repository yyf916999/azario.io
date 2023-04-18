import { useState } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Classes from "./Classes";
import { Button } from "@mui/joy";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showClasses, setShowClasses] = useState(false);
  //   const handleClick = (event: MouseEvent) => {
  //     const element = event.currentTarget as HTMLInputElement;
  //     // element.classList.toggle("active");
  //     console.log(element);
  //     setSelectedIndex(element.tabIndex);
  //   };

  return (
    <>
      <Box display="flex">
        <Grid container spacing={1} sx={{ ml: 45, mt: 3 }}>
          <List orientation="horizontal" sx={{ typography: "body1" }}>
            <Grid item xs={2}>
              <ListItem>{heading}</ListItem>
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

                    // {
                    //   showClasses && <Button />;
                    // }
                  }}
                >
                  {item}
                </ListItem>
              </Grid>
            ))}
          </List>
        </Grid>
      </Box>
    </>
  );
}

export default ListGroup;
