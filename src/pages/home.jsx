import MainLayout from "../layouts/MainLayout";

import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Title, Group, Flex, Container, Grid, Space, Button} from '@mantine/core';
import { FaSearchLocation, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

import ConsultorioMedico from '../assets/ConsultorioMedico.jpg';
import docs_1 from '../assets/docs_1.jpeg';
import docs_2 from '../assets/docs_2.jpg';
import docs_3 from '../assets/docs_3.jpeg';
import docs_4 from '../assets/docs_4.jpeg';
import HospitalCross from '../assets/HospitalCross.png';
import SSO from '../assets/SSO.jpg';
import pills from '../assets/pills.jpg';

function Home() {
    const navigate = useNavigate();

    return ( 
        <MainLayout>
            <Flex
                    gap="md"
                    align="center"
                    direction="row"
                    h="80vh"
            >
                <Image
                    fit="contain"
                    src={SSO}  
                />
            </Flex>
            <Flex
                gap="md"
                align="center"
                direction="row"
            >
                <Image
                    h="10vh"
                    height={70} 
                    fit="contain"
                    src={HospitalCross}
                />
            </Flex>

            <Card shadow="sm" p="lg" >
                <Flex
                    gap="md"
                    align="center"
                    direction="row"
                    h="100vh"
                >
                    <Card component="a"shadow="sm" p="lg" radius="md" mih="100px" miw="100px" withBorder>
                        <Card.Section>
                            <Image
                                height={310} 
                                fit="contain"
                                src={docs_1}
                            />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">  
                            <Text size="sm" color="dimmed">
                                Se cuenta con 2 quir??fanos amplios y completamente equipados, con tecnolog??a de punta; apegados a la Norma Oficial Mexicana .
                            </Text>
                        </Group>      
                    </Card>
                    <Card shadow="sm" p="lg" radius="md" mih="100px" miw="100px" withBorder>
                        <Card.Section>
                            <Image
                                height={310} 
                                fit="contain"
                                src={pills}
                            />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                            <Text size="sm" color="dimmed">
                                Contamos con servicio de Farmacias las 24 horas poniendo a su alcance medicina de alta especialidad, oncol??gico y general.
                            </Text>
                        </Group>    
                    </Card>
                    <Card shadow="sm" p="lg" radius="md" mih="100px" miw="100px" withBorder>
                        <Card.Section>
                            <Image
                                height={310} 
                                fit="contain"
                                src={ConsultorioMedico}
                            />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                            <Text size="sm" color="dimmed">
                            14 habitaciones est??ndar, 6 habitaciones de lujo y una master suite. Con todas las amenidades para brindarte confort y seguridad
                            </Text>
                        </Group>    
                    </Card>
                    
                </Flex>
                <Flex
                    mih={50}
                    gap="100px"
                    justify="center"
                    align="center"
                    direction="row"
                >
                    <Button color="orange" radius="xl" size="md" onClick={() => navigate('/services')}>
                        Servicios
                    </Button>
                
                    <Button color="orange" radius="xl" size="md" onClick={() => navigate('/location')}>
                        Instalaciones
                    </Button>
                
                    <Button color="orange" radius="xl" size="md" onClick={() => navigate('/doctors')}>
                        Doctores
                    </Button>
                
                    <Button color="orange" radius="xl" size="md" onClick={() => navigate('/date')}>
                        Cita Medica
                    </Button>
                </Flex>
                <Space h="100px"/>
                <Title size="h2" order={3} weight={100} align="center" underline h="20vh">
                    "CALIDAD AL ALCANCE DE TODOS".
                </Title>
            </Card>
            <Space h="md" />
            <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                h="100vh"
            >
                <Grid>  
                    <Grid.Col span={6} >
                        <Container>
                            <Card
                                radius="xl"
                                shadow="sm"
                                p="xl"
                                component="a"
                                target="_blank"
                            >
                                <Card.Section>
                                    <Image
                                        height={300} 
                                        fit="contain"
                                        src={docs_2}
                                    />
                                </Card.Section>
                                <Space h="md" />
                                <Text size="lg" lineClamp={4} fw={300}>
                                    -El Hospital M??xico Americano pone a su disposici??n los equipos con la m??s alta tecnolog??a y m??dicos???                            
                                </Text>
                                <Text size="lg" lineClamp={4} fw={300}>
                                    - Realizarse un chequeo m??dico es la mejor manera de asegurarnos de gozar con buena salud o detectar???                            
                                </Text>
                            </Card>
                        </Container> 
                    </Grid.Col>  
                    <Grid.Col span={6} >
                        <Container>
                            <Card
                                radius="xl"
                                shadow="sm"
                                p="xl"
                                component="a"
                                target="_blank"
                            >
                                <Card.Section>
                                    <Image
                                        height={300} 
                                        fit="contain"
                                        src={docs_4}
                                    />
                                </Card.Section>
                                <Space h="md" />
                                <Text size="lg" lineClamp={4} fw={300} >
                                    -Cuenta con un moderno complejo quir??rgico conformado por 7 salas de cirug??a amplias y confortables                            
                                </Text>
                                <Text size="lg" lineClamp={4} fw={300} >
                                    - Terapia Intensiva Ofrece experiencia m??dica, tecnolog??a de vanguardia y personal altamente calificado???                            
                                </Text>
                            </Card>
                        </Container> 
                    </Grid.Col> 
                </Grid>    
            </Flex>  
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
                            <FaSearchLocation /> Av. ??lvaro Obreg??n #1110 Norte Col.                           
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
                <Container>
                    <Card  shadow="sm" p="lg" radius="xl" mih="300px" miw="500px" withBorder> 
                        <Space h="md" /> 
                        <Text size="lg" lineClamp={4} fw={700} c="orange" >
                            M??DICA DE LA CIUDAD. Derechos Reservados 2020       
                        </Text>
                        <Space h="5vh" />
                        <Text size="lg" lineClamp={4} fw={800} c="orange">
                            Contribuir a mejorar la calidad de vida de las familias que atendemos, a trav??s de servicios m??dicos competentes, con alta calidad humana y a precios accesibles para la mayor??a de la poblaci??n.                         
                        </Text>
                        <Space h="sm" />
                        <Text size="lg" lineClamp={4} fw={600} c="orange">
                            Clave de Autorizaci??n COFEPRIS 193301201A0219 Responsable Sanitario: Dr. Carlos Due??as Garc??a con C??dula Profesional No. 610497. Otorgada por la Universidad Nacional Aut??noma de M??xico.
                        </Text>
                    </Card>
                </Container> 
            </Flex>
            
        </MainLayout>
    )
}

export default Home;