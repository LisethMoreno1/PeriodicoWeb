import { Box, Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
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
            <Heading size="md">Ingresa</Heading>
          </CardHeader>

          <CardBody>
            <Box>
              <form>
                <Input margin={"3px"} placeholder="Correo"></Input>
                <Input margin={"3px"} placeholder="Contraseña"></Input>
                <Link to="/Registra">
                  <Button
                    display="flex"
                    justifyContent={"center"}
                    alignContent="center"
                    textAlign="center"
                  >
                    {" "}
                    Ingresa
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
