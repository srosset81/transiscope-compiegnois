import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const AsideCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    minWidth: '19rem',
    marginLeft: '1rem'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export default AsideCard;
