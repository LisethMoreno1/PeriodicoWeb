import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = (params) => {
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    let confir = false;
    let confirme = false;
    params.preventDefault();
    console.log(data);
    window.location.reload();

    // CONSTANTE PARA GUARDAR LOS USUARIOS
    const email = params.target.email.value;
    console.log(email);
    // CONSTANTE PARA GUARDAR LA CONTRASEÑA
    const password = params.target.password.value;
    console.log(password);

    // CONSTANT E PARA COMPARAR LOS DATOS
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        confir = true;
      }
      if (confir) {
        window.location.href = `/CrearNew`;
      }
      if (data[i].email === email && data[i].password === password) {
        confirme = true;
      }
    }
  };
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
              <form onSubmit={onSubmit}>
                <Input
                  margin={"3px"}
                  placeholder="Correo"
                  id="email"
                  name="email"
                ></Input>
                <Input
                  margin={"3px"}
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                ></Input>

                <Button
                  type="submit"
                  display="flex"
                  justifyContent={"center"}
                  alignContent="center"
                  textAlign="center"
                >
                  Ingresa
                </Button>

                <Link to="/Registra">
                  <Button
                    display="flex"
                    justifyContent={"center"}
                    alignContent="center"
                    textAlign="center"
                  >
                    Crear usuario
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
