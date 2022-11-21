import MainLayout from "../layouts/MainLayout";

import { useNavigate } from "react-router-dom";
import { Flex, Card, AppShell, Header, Image, Text, Group, Title, Container, Stack, Space } from '@mantine/core';
import { FaSearchLocation, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

import HospitalCross from '../assets/HospitalCross.png';
import nurse_1 from '../assets/nurse_1.jpg';
import nurse_2 from '../assets/nurse_2.jpg';
import nurse_3 from '../assets/nurse_3.jpg';

function Services() {
    const navigate = useNavigate();
    return (
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
                                    height={350} 
                                    fit="cover"
                                    src={nurse_1}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '35%'
                            }}>
                                <Text fw={700} size="lg" color="dimmed">
                                    Terapia intensiva
                                </Text>
                                <Text size="sm" color="dimmed"> 
                                    Una unidad de cuidados intensivos, unidad de vigilancia intensiva, unidad de cuidados críticos, centro de tratamiento intensivo, unidad de medicina intensiva o unidad de terapia intensiva es una instalación especial dentro del área hospitalaria que proporciona medicina intensiva.
                                </Text>
                            </Stack>
                        </Group>    
                    </Stack> 
                </Flex>
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            background: 'gray'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="md" mih="100px" miw="100%" withBorder>
                        <Group position="center" mt="md" mb="xs">
                            <Title order={3} size="h1" color="white">
                                El único modo de hacer un gran trabajo es amar lo que haces.
                            </Title>
                        </Group>    
                    </Stack> 
                </Flex>
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
                                width: '35%'
                            }}>
                                <Text fw={700} size="lg" color="dimmed">
                                    Rehabilitación
                                </Text>
                                <Text size="sm" color="dimmed"> 
                                    La rehabilitación es el cuidado que usted recibe para recuperar, mantener o mejorar las capacidades que necesita para la vida diaria.
                                </Text>
                                <Text size="sm" color="dimmed"> 
                                    Estas capacidades pueden ser físicas, mentales y/o cognitivas (pensar y aprender). Puede que se pierdan por una enfermedad o lesión, o como un efecto secundario de un tratamiento médico.
                                </Text>
                            </Stack>
                            <Stack sx={{
                                width: '60%'
                            }}>
                                <Image
                                    height={450} 
                                    fit="cover"
                                    src={nurse_2}
                                />
                            </Stack>
                            
                        </Group>    
                    </Stack> 
                </Flex>
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row" 
                    margin_top="32px"
                >
                    <Stack
                        sx={{
                            background: 'gray'
                        }}
                        shadow="sm"
                        p="lg"
                        radius="md" mih="100px" miw="100%" withBorder>
                        <Group position="center" mt="md" mb="xs">
                            <Title order={3} size="h2" color="white">
                                Los profesionales de atención primaria son el primer eslabón de la cadena en atención médica. En la mayoría de los casos será a ellos a quienes acudan los pacientes cuando tengan un problema de salud. Dependiendo de la gravedad o el tipo de problema, el médico de atención primaria podrá establecer diagnóstico y tratamiento o tendrá que derivar el caso a un especialista.
                            </Title>
                        </Group>    
                    </Stack> 
                </Flex>
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
                                    src={nurse_3}
                                />
                            </Stack>
                            <Stack sx={{
                                width: '35%'
                            }}>
                                <Text fw={700} size="lg" color="dimmed">
                                  Otros Servicios
                                </Text>
                                <Text size="sm" color="dimmed"> 
                                    Cumpliendo con su misión como institución cristiana bautista, el Hospital México americano.
                                </Text>
                                <Text size="sm" color="dimmed"> 
                                    En la Unidad de Urgencias del Hospital México Americano brindamos atención las 24 horas del día.
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

export default Services;