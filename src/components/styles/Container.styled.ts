import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { PhotoCamera } from '@mui/icons-material';
import { Card, CardContent, CardMedia,
  Container } from '@mui/material'

// Tao theme voi cac thuoc tinh tuong tu nhu theme cua Material UI
const theme = createTheme();

// Su dung styled de tao mot styled component voi cac thuoc tinh tu theme
export const StyleContainer = styled.div`
  background-color: ${theme.palette.background.paper};
  padding: ${theme.spacing(8, 0, 6)};
`;

//ke thua tu photocamera cua MUI
export const StyledIcon = styled(PhotoCamera)`
  margin-right: 20px;
`;

//the div binh thuong
export const StyledButtons = styled.div`
  margin-top: 40px;
`;

export const StyleCardGrid = styled(Container)`
  padding: '20px 0';
`;

export const StyleCard = styled(Card)`
  height: '100%';
  display: 'flex';
  flexDirection: 'column';
`;
// 56.25% cho ty le 16:9
export const StyleCardMedia = styled(CardMedia)`
  padding-top: 56.25%; 
`;

export const StyleCardContent = styled(CardContent)`
  flexGrow: 1;
`;

export const StyleFooter = styled.div`
  background-color: ${theme.palette.background.paper};
  padding: '50px 0';
`;
