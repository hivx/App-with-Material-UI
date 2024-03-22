import React from 'react';
// import './App.css';
import { Typography, AppBar, CardActions,
  CssBaseline, Grid, Toolbar, Container,
  Button } from '@mui/material'
import { StyleContainer, StyledIcon, StyledButtons,
  StyleCard, StyleCardGrid, StyleCardMedia,
  StyleCardContent, StyleFooter } from './components/styles/Container.styled';
import * as images from './asset/images'

// const theme = createTheme();
const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const App: React.FC = () => {
  return (
    <>
      <CssBaseline /> {/*tang tinh nhat quan trong viec dung css*/}
      <AppBar position='relative'>
        <Toolbar>
          <StyledIcon /> {/*icon photocamera*/}
          <Typography variant='h6'> {/*van ban voi kieu chu variant va co chu h6*/}
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StyleContainer>{/*container cua MUI*/}
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' 
            color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' 
            color="textSecondary" paragraph>
              This is my Photo Album
            </Typography>
            <StyledButtons>
              {/*grid quan ly dang luoi cho viec sap xep*/}
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                  </Grid>
                  <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </StyledButtons>
          </Container>
        </StyleContainer>
        <StyleCardGrid maxWidth="md"> {/*nhom cac card lai*/}
          <Grid container spacing={4}>
            {/*card de xac dinh mang thi inedx bat dau tu 0*/}
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}> {/*xs 12 la full man hinh voi 2 anh - sm=6*/}
                <StyleCard>
                  <StyleCardMedia 
                    image={images[`image${index + 1}` as keyof typeof images]}
                    title="Image title"
                  /> {/*images[`image${index + 1}` as keyof typeof images] = images.image1-18*/}
                  <StyleCardContent>{/*gutterbottom de tao khoang trang duoi cac phan tu*/}
                    <Typography gutterBottom variant='h5'>
                      My Picture
                    </Typography>
                    <Typography>
                    This is photo {index + 1} in my photo collection.
                    </Typography>
                    <CardActions>
                      <Button size='small' color='primary'>View</Button>
                      <Button size='small' color='primary'>Edit</Button>
                    </CardActions>
                  </StyleCardContent>
                </StyleCard>
              </Grid>
            ))}
          </Grid>
        </StyleCardGrid>
      </main>
      <StyleFooter>
        <Typography variant='h6' align='center' gutterBottom> {/*align de can le, day la can le giua*/}
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' gutterBottom> {/*align de can le, day la can le giua*/}
          Do you see the beautiful photos above? Let me know what you think.
          <a href='https://www.youtube.com/channel/UC7HiHQPre4Ieow5g8GXvbhQ'
            target="_blank"
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'rgba(0, 100, 255, 1)'}}
          > {/* target de mo lien ket o 1 tab moi
              rel de tang bao mat, style de ghi de kieu css
              textdecoration none la bo chan trang, color la mau chu*/}
            Click here.
          </a>
        </Typography>
      </StyleFooter>
    </>
  );
}

export default App;