import { Box, Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Registra() {

  //  const [values, setValues] = useState < any > [];
  //  const Select = (params) => {
  //    setValues([...values, { Permiso: params.target.value }]);
  //  };
  //  console.log(values);

   const handleOnSubmit = (params) => {
     const datas = JSON.parse(localStorage.getItem("user") || "[]");
     params.preventDefault();
     let data = [
       ...datas,
       {
         name: params.target.name.value,
         LastName: params.target.LastName.value,
         email: params.target.email.value,
         password: params.target.password.value,
       },
     ];
     console.log(datas);
     localStorage.setItem("user", JSON.stringify(data));
   };

  //  const { name } = useParams();
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
              <form onSubmit={handleOnSubmit}>
                <Input
                  name="name"
                  margin={"3px"}
                  placeholder="Nombre"
                  id="name"
                ></Input>
                <Input
                  name="LastName"
                  margin={"3px"}
                  placeholder="Apellido"
                  id="LastName"
                ></Input>
                <Input
                  name="email"
                  margin={"3px"}
                  placeholder="Correo"
                  id="email"
                ></Input>
                <Input
                  name="password"
                  margin={"3px"}
                  placeholder="Contraseña"
                  id="password"
                ></Input>
                {/* <Link to="/CrearNew"> */}
                  <Button
                    display="flex"
                    justifyContent={"center"}
                    alignContent="center"
                    textAlign="center"
                    name="Crear"
                    type="submit"
                    onSubmit={Registra}
                  >
                    Crear Cuenta
                  </Button>
                {/* </Link> */}
              </form>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
