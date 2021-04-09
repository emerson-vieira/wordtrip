import { Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "repeat(5, 1fr)"]}
      gap={[1, 5]}
      w="100%"
      maxWidth={1160}
      mt={["10", "32"]}
      mx="auto"
    >
      <GridItem>
        <Type icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Type icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 1]}>
        <Type icon="earth" text="e mail..." />
      </GridItem>
    </Grid>
  );
}
