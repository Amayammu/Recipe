import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
import { COLORS, RADIUS, BORDERS } from '../styles/shared.styles';

export const PageContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(180deg, #0a0a0a 0%, ${COLORS.black} 100%)`,
  minHeight: '100vh',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '300px',
    background: 'radial-gradient(ellipse at top, rgba(255, 107, 53, 0.08) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

export const ContentContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
});

export const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(8),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(6),
  },
}));

export const HeaderBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px',
  padding: '16px',
  borderRadius: RADIUS.xlarge,
  background: 'rgba(255, 107, 53, 0.05)',
  border: '1px solid rgba(255, 107, 53, 0.2)',
});

export const MainTitle = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  letterSpacing: '-1px',
  fontSize: '3rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 400,
  letterSpacing: '0.5px',
  fontSize: '1.1rem',
  maxWidth: '600px',
  margin: '0 auto 24px',
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const ChipContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const RecipeGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(6),
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(10),
  paddingTop: theme.spacing(4),
  borderTop: BORDERS.subtle,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(6),
  },
}));

export const FooterText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.4)',
  letterSpacing: '0.5px',
  fontSize: '0.85rem',
});

