
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WorldMap from 'grommet/components/WorldMap';


import Questions from '../components/Landing/Questions';
import Charts from '../components/Landing/Charts';
import Video from 'grommet/components/Video';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Footer from 'grommet/components/Footer';
import Quote from 'grommet/components/Quote';
import Map from 'grommet/components/Map';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Card from 'grommet/components/Card';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
// import Edit from 'grommet/components/icons/Edit';
import Edit from 'grommet/components/icons/base/Edit';
import Section from 'grommet/components/Section';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import logo_habitalia from '../../images/Logo_ByN.png';
import logo_color from '../../images/Logo.png';
import laptop from '../../images/laptop.png';
import wrench from '../../images/wrench.png';
import merge from '../../images/merge.png';
import dscience from '../../images/data-science.png';



import satelite from '../../images/satelite.jpg';
import redi from '../../images/logo_redi.png';
import expansion from '../../images/expansion.png';

import MapCases from '../../images/map_casos.jpg';
import appleseed from '../../images/appleseed.png';
import fbm from '../../images/fbm.png';
import PROBONOMX from '../../images/PROBONOMX_blanco.png';
import probono1 from '../../images/probono1.jpg';
import guia_juridica from '../../images/guia_juridica.jpg';
import odv from '../../images/observatorio_de_vivienda_t.png';



// import {
//   loadDashboard, unloadDashboard
// } from '../actions/dashboard';

import { pageLoaded } from './utils';

class Landing extends Component {
  // componentDidMount() {
  //   pageLoaded('Dashboard');
  //   this.props.dispatch(loadDashboard());
  // }

  // componentWillUnmount() {
  //   this.props.dispatch(unloadDashboard());
  // }

  render() {
    const { error } = this.props;
    const { intl } = this.context;
    return (
      <Article primary={true}>

        <Header
          fixed
          size="small"
          opacity=".1"
          pad={{ horizontal: 'medium', between: 'small' }}
        >

          <Title>
              <Image src={logo_habitalia}
              fit='full'
              full={true} />
          </Title>

          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
          </Box>
        </Header>


        <Hero background={<Video autoPlay={true}
                      showControls={false}
                      loop={true}
                      muted={true}
                      fit='cover'>
                      <source src='https://s3.amazonaws.com/utils-rsa/habitalia.mp4'
                        type='video/mp4' />
                    </Video>}
          margin="large"
          backgroundColorIndex='dark'
          size='large'>


          <Box direction='row'
            justify='left'>

            <Box >
                <Card
                  textSize="small"
                  size="large"
                  margin='large'
                  justify="center"
                  contentPad="medium"
                  headingStrong
                  heading="Habitalia"
                  description="Hacemos el procesamiento y análisis de datos fácil
                  para que tú tengas todas las herramientas para tomar las mejores
                  decisiones para tú empresa.">
                </Card>
            </Box>

          </Box>
        </Hero>


        <Hero background={<Image src='https://www.hewlettpackardpathfinder.com/img/home/shapes2-bg.svg'
            fit='cover'
            full={true} />}
          backgroundColorIndex='dark'
          size='xlarge'>

          <Box direction='row'
            margin='large'
            justify='center'>
            <Box
              pad={{
                  horizontal: "large",
                  vertical: "large",
                  between: "large"
                }}
                announce={false}
                direction="column"
                tag="div"
                responsive
                focusable
                size="xlarge"
                colorIndex="light-2">

                <Card
                  textSize="small"
                  size="large"
                  contentPad="medium"
                  headingStrong
                  heading="De datos a historias."
                  description=" Sabemos cómo convertir tus datos
                  en herramientas de toma de decisión con interfaces
                  interactivas, claras, hermosas y fáciles de usar."
                >

                </Card>

            <Box
                announce={false}
                direction="column"
                tag="div"
                responsive
                focusable
                size="large">

                <WorldMap onSelectPlace
                  zoom={false}
                  series={[{
                  "continent": "NorthAmerica",
                  "colorIndex": "accent-2",
                  "onClick": ""
                      }, {
                  "continent": "SouthAmerica",
                  "label": "South America",
                  "colorIndex": "accent-2"
                  },{
                  "continent": "Europe",
                  "colorIndex": "accent-2",
                  "onClick": ""
                      },{
                  "continent": "Africa",
                  "colorIndex": "accent-2",
                  "onClick": ""
                      },{
                  "continent": "Asia",
                  "colorIndex": "accent-2",
                  "onClick": ""
                      },{
                  "continent": "Australia",
                  "colorIndex": "accent-2",
                  "onClick": ""
                      }
                ]} />
            </Box>

            </Box>



          </Box>
        </Hero>




        <Box align="center"
          direction="column"
          tag="div"
          focusable
          responsive
          pad={{ vertical: 'small' }}
        >

          <Box className="columns-container"
            align="center"
            size={{ width: "xxlarge" }}
            pad={{ horizontal: "small" }}
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
          >
            <Heading tag='h2' strong={true}>Qué Ofrecemos</Heading>
          </Box>


          <Box className="columns-container"
            pad={{ horizontal: "large" }}
            full="horizontal"
            announce={false}
            direction="row"
            tag="div"
            responsive
            focusable
          >
          </Box>
          <Box className="columns-container"
            pad={{ horizontal: "small" }}
            full="horizontal"
            direction="row"
            tag="div"
            responsive
            focusable
          >
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={wrench} style={{ height: 'auto', width: '40%' }}/>
              <Paragraph style={{ fontSize: 18}} >Diseño y configuración de <b>Arquitectura de Datos e
              infraestructura</b> para tú caso de uso.</Paragraph>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={merge} style={{ height: 'auto', width: '40%' }}/>
              <Paragraph style={{ fontSize: 18}} > Generación de <b>Pipelines Automatizados </b>
              de ingesta y procesamiento.</Paragraph>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={dscience} style={{ height: 'auto', width: '40%' }}/>
              <Paragraph style={{ fontSize: 18}} > Desarrollo de modelos predictivos con
              metodologías de <b>Machine Learning</b> </Paragraph>
            </Box>
            <Box basis="1/4" align="center" margin="large" justify="center">
              <img src={laptop} style={{ height: 'auto', width: '40%' }}/>
              <Paragraph style={{ fontSize: 18}} > <b>Plataformas y Dashboards</b> adaptados a tú conjunto
              de datos</Paragraph>
            </Box>
          </Box>
        </Box>



        <Box align="center"
          direction="column"
          tag="div"
          focusable
          responsive
          pad={{ vertical: 'small' }}
        >

          <Box className="columns-container"
            align="center"
            size={{ width: "xxlarge" }}
            pad={{ horizontal: "small" }}
            announce={false}
            direction="column"
            tag="div"
            responsive
            focusable
          >
            <Heading tag='h2' strong={true}>Algunos de Nuestros Proyectos</Heading>
          </Box>


          <Box className="columns-container"
            pad={{ horizontal: "large" }}
            full="horizontal"
            announce={false}
            direction="row"
            tag="div"
            responsive
            focusable
          >
          </Box>
          <Box className="columns-container"
            pad={{ horizontal: "small" }}
            full="horizontal"
            direction="row"
            tag="div"
            responsive
            focusable
          >
            <Box basis="1/3" align="center" margin="large" justify="center">
            <Box align="center" margin="large" justify="center">
              <Heading tag='h2' strong={true}>Machine Learning</Heading>
              <a href='https://s3.amazonaws.com/www.habitalia.mx/utils/Reporte+Urban.pdf' target='_blank' >
              <Box align="center" margin="large" justify="center">
                <Heading tag='h3' strong={true}>Modelos de Expansión Urbana</Heading>
                <img src={expansion} style={{ height: 'auto', width: '40%' }}/>
                <Paragraph style={{ fontSize: 18}} >
                Desarrollo de Modelos Predictivos de crecimiento urbano para ciudades de Jordania, Indonesia y Costa de Marfil.
                </Paragraph>
              </Box>
            </a>
            </Box>
            </Box>

            <Box basis="1/3" align="center" margin="large" justify="center">
            <Box align="center" margin="large" justify="center">
              <Heading tag='h2' strong={true}>Desarrollo Web: </Heading>
              <a href='http://www.co-mapp.org/' target='_blank' >
              <Box align="center" margin="large" justify="center">
                <Image  src='http://comapp.org.s3-website-us-west-2.amazonaws.com/7c970965785b9a21f8185c0c4b2ca0e9.png' style={{ height: 'auto', width: '70%' }}/>
                <Paragraph style={{ fontSize: 18}} >
                  Desarrollo de app móvil para levantamiento de información.
                </Paragraph>
              </Box>
              </a>
            </Box>
            </Box>


            <Box basis="1/3" align="center" margin="large" justify="center">
            <Box align="center" margin="large" justify="center">
              <Heading tag='h2' strong={true}>Desarrollo Inmobiliario: </Heading>
              <a href='http://www.get-redi.com.mx' target='_blank' >
              <Box align="center" margin="large" justify="center">
                <Heading tag='h3' strong={true}>Índice de Desarrollo inmobiliario</Heading>
                <img src={redi} style={{ height: 'auto', width: '40%' }}/>
                <Paragraph style={{ fontSize: 18}} >
                REDI se dedica a mejorar la profesión de desarrollo inmobiliario a través del desempeño social y ambiental, la rendición de cuentas y la transparencia.
                </Paragraph>
              </Box>
              </a>
            </Box>
            </Box>

          </Box>
        </Box>




        <Hero background={<Image src={satelite}
            fit='full'
            full={true} />}
          size='medium'>

        </Hero>







        <Box className="columns-container"
          margin='large'
          align="center"
          announce={false}
          direction="column"
          tag="div"
          responsive
          focusable
        >
          <Heading tag='h2' strong={true}>Nuestro Equipo</Heading>

          <Box className="columns-container"
            full="horizontal"
            direction="row"
            tag="div"
            responsive
            focusable
          >



            <Box basis="1/4" align="center" margin="large" justify="center">
            <Paragraph style={{ fontSize: 20}} >
            Somos un equipo de consultores enfocados en el desarrollo de arquitecturas
            de productos de datos con técnicas de aprendizaje máquina y minería para
            la generación de herramientas que asistan a organismos públicos y privados
            en la toma de decisión.
            </Paragraph>

            <Paragraph style={{ fontSize: 20}} >
            Nacimos como un brazo analítico independiente del <a href='http://www.observatoriodevivienda.org' target='_blank' ><Image src={odv} style={{ height: 'auto', width: '30%' }}/></a>

            </Paragraph>
            </Box>


            <Box basis="1/4" align="center" margin="large" justify="center">
            <Paragraph style={{ fontSize: 18}} ><b>Equipo Investigación:</b> </Paragraph>
            <Paragraph> Equipo con Posgrados
            en Derecho, Urbanismo y Desarrollo inmobiliario.
            Conocen los desafíos y las oportunidades de las ciudades y marcan rumbo de nuestros proyectos.
            </Paragraph>
            </Box>

            <Box basis="1/4" align="center" margin="large" justify="center">
            <Paragraph style={{ fontSize: 18}} ><b>Equipo de Ciencia de Datos:</b> </Paragraph>
            <Paragraph>
            Se encargan del desarrollo de productos de datos
            que incluyen los procesos de ingesta, procesamiento y modelado.
            Cuentan con posgrados en ciencia de datos y computación.</Paragraph>
            </Box>

            <Box basis="1/4" align="center" margin="large" justify="center">

            <Paragraph style={{ fontSize: 18}} ><b>Equipo de Desarrollo:</b> </Paragraph>
            <Paragraph>
            Encargados del desarrollo del front-end y el back-end de las Plataformas y
            servicios web. Utilizan los frameworks de desarrollo más eficientes para tener
            servicios rápidos y hermosos.
            </Paragraph>
            </Box>

          </Box>
        </Box>



        <Footer justify='between'
          pad="small"
          size='large'>
          <Title>
            Habitalia
          </Title>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}
            >
              <Paragraph size="small" width="small" margin='none' >
               Powered by <a href='http://www.observatoriodevivienda.org' target='_blank' ><Image src={odv} style={{ height: 'auto', width: '30%' }}/></a>
              </Paragraph>

            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
            </Menu>
          </Box>
        </Footer>

      </Article>
    );
  }
}

// Landing.defaultProps = {
//   error: undefined,
//   tasks: []
// };

// Landing.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   error: PropTypes.object,
//   tasks: PropTypes.arrayOf(PropTypes.object)
// };

Landing.contextTypes = {
  intl: PropTypes.object
};

export default Landing;

// const select = state => ({ ...state.dashboard });

// export default connect(select)(Dashboard);
