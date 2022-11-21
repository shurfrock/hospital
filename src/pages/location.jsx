import MainLayout from "../layouts/MainLayout";

import { useNavigate } from "react-router-dom";
import { Flex, AppShell, Header, Image, Title, Group, Stack, Grid, Space, Text, Container, Card } from '@mantine/core';
import { FaSearchLocation, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

import HospitalCross from '../assets/HospitalCross.png';
import SSO from '../assets/SSO.jpg';
import hospital_1 from '../assets/hospital_1.jpg';
import habitacion_1 from '../assets/habitacion_1.jpg';
import habitacion_2 from '../assets/habitacion_2.jpg';
import pasillo_1 from '../assets/pasillo_1.jpg';
import pasillo_2 from '../assets/pasillo_2.jpg';
import jardin from '../assets/jardin.jpg';
import urgencias from '../assets/urgencias.jpeg';
import gym_1 from '../assets/gym_1.jpg';
import maps from '../assets/maps.jpg';

function Location() {
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
                    </Header>}    
            >
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                >
                    <Stack
                        shadow="sm"
                        p="lg"
                        radius="md" mih="20px" miw="100%" withBorder>
                        <Group position="center" mt="Xl" mb="xs">
                            <Title order={3} size="h1" color="white">
                                Instalaciones
                            </Title>
                            
                        </Group>    
                    </Stack> 
                </Flex>
                <Grid>
                    <Grid.Col span={7}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={SSO}
                        />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={hospital_1}
                        />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={habitacion_1}
                        />
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={habitacion_2}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={pasillo_1}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            height={450} 
                            fit="cover"
                            src={pasillo_2}
                        />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <Image
                            height={350} 
                            fit="cover"
                            src={jardin}
                        />
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <Image
                            height={350} 
                            fit="cover"
                            src={urgencias}
                        />
                    </Grid.Col>
                </Grid>
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            background: 'white'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="md" mih="100px" miw="100px" withBorder>
                        <Group position="apart" mt="md" mb="xs">
                            <Stack sx={{
                                width: '60%'
                            }}>
                                <Image
                                    height={450} 
                                    fit="cover"
                                    src={gym_1}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '35%'
                            }}>
                                <Text size="xl" color="dimmed"> 
                                    Contactanos para Agendar cita ya sea, cita medica o cita de reahbilitación.
                                </Text>
                                <Text size="md" color="dimmed"> 
                                    Servicios-----------Salas de Espera.                           
                                </Text>
                                <Text size="md" color="dimmed"> 
                                    Especialidades.-----------Habitaciones.                               
                                </Text>
                                <Text size="md" color="dimmed"> 
                                    Instalaciones.-----------Salas de reahibilitacion.                           
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
                <Image
                    height={450}
                    fit="cover"
                    src={maps}
                />
            </AppShell>
            <Flex
                justify="center"
                align="center"
                direction="row"
                gap="xl"
                h="100vh"
            >
                <Container>
                    <Card  shadow="sm" p="lg" radius="xl" mih="300px" miw="500px" withBorder> 
                        <Space h="md" /> 
                        <Text size="lg" lineClamp={4} fw={700} c="orange" >
                            <FaSearchLocation /> Av. Álvaro Obregón #1110 Norte Col.                           
                        </Text>
                        <Space h="5vh" />
                        <Text size="lg" lineClamp={4} fw={700} c="orange">
                            <FaPhoneAlt /> + 52 - 334 - 675 - 2245                         
                        </Text>
                        <Space h="5vh" />
                        <Text size="lg" lineClamp={4} fw={700} c="orange">
                            <FaPhoneAlt /> + 52 - 112 - 358 - 1321                        
                        </Text>
                        <Space h="5vh" />
                        <Text size="lg" lineClamp={4} fw={700} c="orange">
                            <FaMailBulk /> hospital.seguro@hospital.mx.gob                     
                        </Text>
                    </Card>
                </Container>
            </Flex>
            
        </MainLayout>
    )
}

export default Location;