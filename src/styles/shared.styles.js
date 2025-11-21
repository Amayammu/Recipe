import { styled } from '@mui/material/styles';
import { Box, Chip, Typography } from '@mui/material';

export const COLORS = {
  primary: '#ff6b35',
  primaryLight: '#ff8c42',
  primaryDark: '#e55a2b',
  black: '#000000',
  darkGray: '#1e1e1e',
  mediumGray: '#141414',
  white: '#ffffff',
};

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
  primaryReverse: 'linear-gradient(135deg, #ff8c42 0%, #ffa352 100%)',
  card: 'linear-gradient(145deg, #1e1e1e 0%, #141414 100%)',
  iconBadge: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 140, 66, 0.05) 100%)',
  iconBadgeLarge: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 140, 66, 0.1) 100%)',
  shine: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
};

export const BORDERS = {
  primary: '1px solid rgba(255, 107, 53, 0.2)',
  primaryHover: '1px solid rgba(255, 107, 53, 0.6)',
  primaryStrong: '1px solid rgba(255, 107, 53, 0.3)',
  subtle: '1px solid rgba(255, 255, 255, 0.05)',
};

export const RADIUS = {
  small: '8px',
  medium: '12px',
  large: '16px',
  xlarge: '20px',
};

export const FlexContainer = styled(Box)(({ gap = '12px', justify = 'flex-start', margin }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: gap,
  justifyContent: justify,
  ...(margin && { margin }),
}));

export const IconBadge = styled(Box)(({ size = 48, borderRadius = RADIUS.medium }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: size,
  height: size,
  borderRadius: borderRadius,
  background: size > 50 ? GRADIENTS.iconBadgeLarge : GRADIENTS.iconBadge,
  border: BORDERS.primary,
  flexShrink: 0,
}));

export const OrangeChip = styled(Chip)({
  height: 22,
  fontSize: '0.75rem',
  fontWeight: 600,
  backgroundColor: 'rgba(255, 107, 53, 0.15)',
  color: COLORS.primary,
  border: BORDERS.primaryStrong,
  '& .MuiChip-icon': {
    color: COLORS.primary,
  },
});

export const LargeOrangeChip = styled(Chip)({
  backgroundColor: 'rgba(255, 107, 53, 0.1)',
  color: COLORS.primary,
  border: BORDERS.primaryStrong,
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '0 8px',
  '& .MuiChip-icon': {
    color: COLORS.primary,
  },
});

export const SectionHeader = styled(Typography)({
  color: COLORS.primary,
  fontWeight: 600,
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

export const MutedText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 400,
  letterSpacing: '0.5px',
});

export const ResponsiveTypography = styled(Typography)(({ theme, desktopSize, tabletSize, mobileSize }) => ({
  [theme.breakpoints.up('md')]: {
    fontSize: desktopSize || '1rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: tabletSize || desktopSize || '0.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: mobileSize || tabletSize || '0.85rem',
  },
}));

export const GradientText = styled(Typography)(({ theme }) => ({
  background: GRADIENTS.primary,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  letterSpacing: '-1px',
  lineHeight: 1.2,
}));

export const responsiveSpacing = (theme, large, medium, small) => ({
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(large),
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginBottom: theme.spacing(medium || large),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(small || medium || large),
  },
});

export const CenteredSection = styled(Box)(({ theme, mbLarge = 10, mbMedium = 8, mbSmall = 6 }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(mbLarge),
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(mbMedium),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(mbSmall),
  },
}));

export const BadgeContainer = styled(Box)(({ borderRadius = RADIUS.xlarge }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px',
  padding: '16px',
  borderRadius: borderRadius,
  background: 'rgba(255, 107, 53, 0.05)',
  border: BORDERS.primary,
}));

