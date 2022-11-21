import MainLayout from "../layouts/MainLayout";

import { useNavigate } from "react-router-dom";
import { Flex, Card, AppShell, Header, Image, Text, Group, Title, Container, Stack, Space } from '@mantine/core';
import { FaSearchLocation, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

import HospitalCross from '../assets/HospitalCross.png';
import doctor_1 from '../assets/doctor_1.jpg';
import doctor_2 from '../assets/doctor_2.jpg';
import doctor_3 from '../assets/doctor_3.jpg';
import doctor_4 from '../assets/doctor_4.jpg';

function Doctors(){
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
                        radius="md" mih="100px" miw="50px" withBorder
                    >
                        <Group  mt="md" mb="xs">
                            <Stack sx={{
                                width: '40%'
                            }}>
                                <Image
                                    height={300} 
                                    fit="contain"
                                    src={doctor_1}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '50%'
                            }}>
                                <Title order={3} size="h1">
                                    Dr. Juan Paulo Abarca de la Paz
                                </Title>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Especialidad
                                    <Text size="md" color="dimmed" fw={300}> 
                                        Cardiología Pediátrica
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Teléfono Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        (33) 1643-3092
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Teléfono Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        (55) 5678-7141
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Email Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        abarca.cardiopedia@hotmail.com
                                    </Text>
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
                <Space h="30px"/>
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
                        radius="md" mih="100px" miw="50px" withBorder
                    >
                        <Group  mt="md" mb="xs">
                            <Stack sx={{
                                width: '40%'
                            }}>
                                <Image
                                    height={310} 
                                    fit="contain"
                                    src={doctor_2}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '50%'
                            }}>
                                <Title order={3} size="h1">
                                    Dra. Irisi Faviola Cervantes Garcia
                                </Title>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Especialidad
                                    <Text size="md" color="dimmed" fw={300}> 
                                        Cirugía Pediátrica
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Teléfono Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        (33) 1220-0496
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Email Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        faviolacervantes@hotmail.com
                                    </Text>
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
                <Space h="30px"/>
                <Flex 
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            maxWidth: '750px',
                            background: 'white'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="md" mih="100px" miw="50px" withBorder
                    >
                        <Group  mt="md" mb="xs">
                            <Stack sx={{
                                width: '40%'
                            }}>
                                <Image
                                    height={310} 
                                    fit="contain"
                                    src={doctor_3}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '50%'
                            }}>
                                <Title order={3} size="h1">
                                    Dr. Jonathan Germán Chavez Padilla
                                </Title>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Especialidad
                                    <Text size="md" color="dimmed" fw={300}> 
                                        Traumatología y Ortopedia
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Teléfono Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        (33) 1212-3937
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Email Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        chavezorthopaedics@gmail.com
                                    </Text>
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
                <Space h="30px"/>
                <Flex 
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            maxWidth: '750px',
                            background: 'white'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="md" mih="100px" miw="50px" withBorder
                    >
                        <Group  mt="md" mb="xs">
                            <Stack sx={{
                                width: '40%'
                            }}>
                                <Image
                                    height={310} 
                                    fit="contain"
                                    src={doctor_4}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '50%'
                            }}>
                                <Title order={3} size="h1">
                                    Dra. María Castañeda Ureña
                                </Title>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Especialidad
                                    <Text size="md" color="dimmed" fw={300}> 
                                        Reumatología
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Teléfono Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        (33) 5678-8677
                                    </Text>
                                </Text>
                                <Text size="xl" color="dimmed" fw={700}> 
                                    Email Trabajo:
                                    <Text size="md" color="dimmed" fw={300}> 
                                        dra_urena_02@hotmail.com
                                    </Text>
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
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

export default Doctors