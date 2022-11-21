import MainLayout from "../layouts/MainLayout";

import { useNavigate } from "react-router-dom";
import { Flex, Card, AppShell, Header, Image, Text, Group, Title, Grid, Stack, Select, TextInput, Button } from '@mantine/core';

import HospitalCross from '../assets/HospitalCross.png';

function Date(){
    const navigate = useNavigate();
    return(
        <MainLayout>
            <AppShell
                padding="xs"
                header={
                    <Header height={10} p="30px">      
                        <Flex
                             gap="md"
                             justify="center"
                             align="center"
                             direction="row" 
                             h="100%"  
                        >
                            <Image
                                h="10vh"
                                height={70} 
                                fit="contain"
                                src={HospitalCross}
                                onClick={() => navigate('/')}
                            />
                        </Flex>
                    </Header>
                }         
            >
                <Flex 
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            maxWidth: '1000px',
                            background: 'white'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="xl" mih="100px" miw="100px" withBorder
                    >
                        
                        <Group position="center" mt="Xl" mb="xs">
                            <Title size="h1" color="orange">
                                Cita Medica
                            </Title>
                        </Group>    
                        <Group  mt="md" mb="xs">
                            <Grid>
                                <Grid.Col span={9}>
                                    <TextInput
                                        placeholder="Nombre Completo"
                                        label="Nombre Completo"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col> 
                                <Grid.Col span={4}>
                                    <TextInput
                                        placeholder="Edad"
                                        label="Edad"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <Select
                                        label="Sexo"
                                        placeholder="Sexo"
                                        data={[
                                            { value: 'Masculino', label: 'Masculino' },
                                            { value: 'Femenino', label: 'Femenino' },
                                        ]}
                                        size="md"
                                        radius="lg"
                                    />
                                </Grid.Col>
                                <Grid.Col span={9}>
                                    <TextInput
                                        placeholder="¿Enfermedades Diagnosticadas?"
                                        label="¿Enfermedades Diagnosticadas?"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <Select
                                            label="¿Recibe algun Medicamento?"
                                            placeholder="¿Recibe algun Medicamento?"
                                            data={[
                                                { value: 'SI', label: 'SI' },
                                                { value: 'NO', label: 'NO' },
                                            ]}
                                            size="md"
                                            radius="lg"
                                        />
                                </Grid.Col> 
                                <Grid.Col span={9}>
                                    <TextInput
                                        placeholder="Medicamentos que recibe"
                                        label="Medicamentos que recibe"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col> 
                                <Grid.Col span={4}>
                                    <TextInput
                                        placeholder="Numero Telefonico - 1"
                                        label="Numero Telefonico - 1"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col> 
                                <Grid.Col span={4}>
                                    <TextInput
                                        placeholder="Numero Telefonico - 2"
                                        label="Numero Telefonico - 2"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col> 
                                <Grid.Col span={9}>
                                    <TextInput
                                        placeholder="Correo Electronico"
                                        label="Correo Electronico"
                                        radius="lg"
                                        size="md"
                                        withAsterisk
                                    />
                                </Grid.Col> 
                            </Grid>
                        </Group> 
                        <Button color="orange" radius="lg" size="md">
                            Enviar
                        </Button>
                    </Stack> 
                </Flex>
            </AppShell>
        </MainLayout>
    )   
}

export default Date