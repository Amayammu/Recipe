import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Box,
  Divider
} from '@mui/material';
import { COLORS, GRADIENTS, BORDERS, RADIUS } from '../styles/shared.styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: GRADIENTS.card,
  border: BORDERS.primary,
  borderRadius: RADIUS.large,
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-12px)',
    border: BORDERS.primaryHover,
    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 107, 53, 0.1), 0 0 60px rgba(255, 107, 53, 0.15)`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: GRADIENTS.primary,
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:last-child': {
    paddingBottom: theme.spacing(3.5),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    '&:last-child': {
      paddingBottom: theme.spacing(2.5),
    },
  },
}));

export const TitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  gap: '12px',
});

export const RecipeTitle = styled(Typography)(({ theme }) => ({
  color: COLORS.white,
  fontWeight: 700,
  letterSpacing: '-0.5px',
  fontSize: '1.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.35rem',
  },
}));

export const RecipeDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '24px',
  lineHeight: 1.7,
  fontSize: '0.95rem',
  fontWeight: 400,
});

export const StyledDivider = styled(Divider)({
  borderColor: 'rgba(255, 107, 53, 0.15)',
  marginBottom: '24px',
});

export const IngredientsHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
});

export const IngredientsList = styled(List)({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: RADIUS.medium,
  padding: '16px',
  border: BORDERS.subtle,
  backdropFilter: 'blur(10px)',
});

export const IngredientItem = styled(ListItem)(({ isLast }) => ({
  padding: '6px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  borderBottom: !isLast ? BORDERS.subtle : 'none',
  '&:last-child': {
    paddingBottom: 0,
  },
}));

export const BulletPoint = styled(Box)({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: COLORS.primary,
  flexShrink: 0,
});

export const IngredientText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '0.9rem',
  fontWeight: 400,
  letterSpacing: '0.2px',
});

export const ViewRecipeButton = styled(Button)({
  marginTop: '28px',
  background: GRADIENTS.primary,
  color: COLORS.black,
  fontWeight: 700,
  fontSize: '0.9rem',
  padding: '12px',
  borderRadius: RADIUS.medium,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: GRADIENTS.primaryReverse,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: GRADIENTS.shine,
    transition: 'left 0.5s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
});

