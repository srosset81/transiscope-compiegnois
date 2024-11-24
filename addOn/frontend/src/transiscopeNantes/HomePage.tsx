/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { Avatar, Box, Card, CardActionArea, Container, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled, alpha } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';
import RuleIcon from '@mui/icons-material/Rule';

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '23px',
  fontWeight: 'normal',
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  '& strong': {
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: theme.palette.secondary.main,
  },
  '& em': {
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.tertiary.main,
  },
})) as typeof Typography;

const MainCardTitle = styled(Typography)(() => ({
  fontSize: '28px',
  fontWeight: 500,
})) as typeof Typography;

const MainCardDescription = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'normal',
  color: '#666',
})) as typeof Typography;

const BodyText = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'normal',
  color: '#444',
  textAlign: 'justify',
  '& li + li': {
    paddingTop: '20px',
  },
})) as typeof Typography;

const BodyLink = styled(Link)(() => ({
  textDecoration: 'none',
  fontWeight: 500,
  background: alpha('#D6EDED', 0.5),
  padding: '2px 5px',
  borderRadius: 5,
  '&:hover': {
    textDecoration: 'underline',
  },
})) as typeof Link;

type MainCardProps = {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  externalLink?: boolean;
};

const MainCard = ({ title, description, link, icon, externalLink }: MainCardProps) => {
  return (
    <Card elevation={0}>
      <CardActionArea
        component={RRLink}
        to={link}
        sx={{
          padding: 2,
          borderRadius: 2,
          '&:hover, &:focus-visible': { backgroundColor: alpha('#D6EDED', 0.5) },
          '& .MuiCardActionArea-focusHighlight': { zIndex: -1 },
        }}
        target={externalLink ? '_blank' : undefined}
        disableRipple
      >
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'tertiary.main', height: 60, width: 60 }}>{icon}</Avatar>
          <Box>
            <MainCardTitle variant="h3">{title}</MainCardTitle>
            <MainCardDescription>{description}</MainCardDescription>
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: { xs: 5, md: 14 }, marginBottom: { xs: 0, md: 5 } }}
        spacing={6}
      >
        <Grid container spacing={5} justifyContent={'center'}>
          <Grid xs={12} md={8}>
            <Box component="h1" sx={{ margin: 0 }}>
              <Box
                component="img"
                src="/images/logo_full.png"
                alt="Transiscope en Pays Nantais"
                sx={{ width: '100%' }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={8}>
            <MainTitle component="h2" variant="h2" textAlign="center">
              Explorons les <strong>structures</strong> et les <strong>évènements</strong> qui participent à la{' '}
              <em>transition écologique</em> et <em>sociale</em> !
            </MainTitle>
          </Grid>
        </Grid>

        <Grid xs={12} container spacing={2} rowSpacing={2}>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<MapIcon />}
              title="La carte"
              description="Trouvez les alternatives présentes à Nantes et aux alentours qui vous correspondent !"
              link="/Organization?perPage=500&sort=pair%3Alabel&view=map&lat=47.2186353776589&lng=-1.5545654296875002&zoom=10"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<CalendarMonthIcon />}
              title="L'agenda"
              description="Tenez-vous au courant de toute l'actualité des alternatives dans le pays nantais !"
              link="/Event"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<ListIcon />}
              title="L'annuaire"
              description="Explorez la liste des organisations qui participent à la transition écologique et sociale dans la région de Nantes !"
              link="/Organization"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<RuleIcon />}
              title="La charte Transiscope"
              description="Chaque alternative présente sur ce site se doit de respecter un certain nombre de critères, venez les décrouvrir !"
              link="https://transiscope.org/charte/"
              externalLink
            />
          </Grid>
        </Grid>

        <Grid xs={12} textAlign="center">
          <Box
            component="img"
            src="/images/illustration1.png"
            alt="Illustration de personnes prenant soin de la planète Terre. Design par Freepik"
            title="Illustration de personnes prenant soin de la planète Terre. Design par Freepik"
            sx={{ width: { xs: '100%', md: '50%' } }}
          />
        </Grid>

        <Grid xs={12}>
          <MainTitle component="h2" variant="h2" textAlign="center">
            Transiscope, qu’est-ce que c’est ?
          </MainTitle>
        </Grid>

        <Grid xs={12} md={10}>
          <BodyText component="p" sx={{ marginBottom: 2 }}>
            Transiscope en Pays Nantais, animé par{' '}
            <BodyLink
              component={RRLink}
              to="/Organization/https%3A%2F%2Fdata.nantes.transiscope.org%2Forganizations%2Fcollectif-transiscope-en-pays-nantais/show"
            >
              le collectif du même nom
            </BodyLink>
            , est une expérimentation liée au projet{' '}
            <BodyLink href="https://transiscope.org" target="_blank">
              Transiscope
            </BodyLink>
            , dont l’ambition est d’aggréger à l’échelle nationale les alternatives qui oeuvrent à la bifurcation
            écologique et sociale sur le territoire. Plus de 40000 collectifs y sont actuellement recensés, provenant de
            plus de 30 sources de données différentes.
          </BodyText>

          <BodyText component="div">
            Au vue de l’urgence écologique et sociale, et de la montée des idées individualistes et racistes, à travers
            ce projet, les intentions de Transiscope en Pays Nantais sont : <br />
            <ul>
              <li>
                d’<strong>inciter à la participation et à l’action citoyenne</strong> par le référencement des
                alternatives et des évènements en lien avec la transition écologique sociale sur le territoire.
              </li>
              <li>
                d’
                <strong>
                  accélérer la coopération, la mise en réseau et les synergies entre les collectifs miliants, les
                  initiatives et les habitant·e·s
                </strong>{' '}
                du territoire en renforçant la visibilité et les projets de chacun d’eux.
              </li>
              <li>
                de{' '}
                <strong>
                  visualiser les territoires ou les problématiques qui nécessitent le développement d’alternatives
                </strong>{' '}
                concrètes dans la région de Nantes.
              </li>
            </ul>
          </BodyText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
