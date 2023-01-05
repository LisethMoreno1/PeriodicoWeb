import { Box, Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Registra() {
  return (
    <>
      <Box
        className="container"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card align="center" maxW="sm">
          <CardHeader>
            <Heading size="md">Registrar</Heading>
          </CardHeader>

          <CardBody>
            <Box>
              <form>
                <Input margin={"3px"} placeholder="Nombre"></Input>
                <Input margin={"3px"} placeholder="Apellido"></Input>
                <Input margin={"3px"} placeholder="Correo"></Input>
                <Input margin={"3px"} placeholder="Contraseña"></Input>
                <Link to="/CrearNew">
                  <Button
                    display="flex"
                    justifyContent={"center"}
                    alignContent="center"
                    textAlign="center"
                  >
                    Crear Cuenta
                  </Button>
                </Link>
              </form>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
