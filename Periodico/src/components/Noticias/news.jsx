import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import Encabezado from './encabezado/encabezado';
import Notas from './nota/notas';
import Art from './Artistas/Art';

export default function News() {
  return (
    <>
      <Grid
        templateAreas={`"header header "
                  "nav main "
                  "nav footer "`}
        gridTemplateRows={"1% 1fr auto "}
        gridTemplateColumns={"350px 3fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        margin={"3px"}
      >
        <GridItem pl="2" bg="gray.100" area={"nav"}>
          <Notas />
        </GridItem>
        <GridItem pl="2" bg="gray.100" area={"main"}>
          <Encabezado />
        </GridItem>
        <GridItem pl="2" bg="gray.100" area={"footer"}>
          <Art />
        </GridItem>
      </Grid>
    </>
  );
}
