import React from 'react';
import { Box } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { IconBadge, OrangeChip, SectionHeader } from '../styles/shared.styles';
import {
  StyledCard,
  StyledCardContent,
  TitleContainer,
  RecipeTitle,
  RecipeDescription,
  StyledDivider,
  IngredientsHeader,
  IngredientsList,
  IngredientItem,
  BulletPoint,
  IngredientText,
  ViewRecipeButton
} from './RecipeCard.styles';

const RecipeCard = ({ title, description, ingredients }) => {
  const handleViewRecipe = () => {
    alert(`Recipe: ${title}`);
  };

  return (
    <StyledCard elevation={0}>
      <StyledCardContent>
        <Box>
          <TitleContainer>
            <IconBadge>
              <RestaurantIcon sx={{ color: '#ff6b35', fontSize: 26 }} />
            </IconBadge>
            <RecipeTitle variant="h5" component="h2">
              {title}
            </RecipeTitle>
          </TitleContainer>

          <RecipeDescription variant="body1">
            {description}
          </RecipeDescription>

          <StyledDivider />

          <Box>
            <IngredientsHeader>
              <LocalDiningIcon sx={{ color: '#ff6b35', fontSize: 20 }} />
              <SectionHeader variant="subtitle1">
                Ingredients
              </SectionHeader>
              <OrangeChip label={ingredients.length} size="small" />
            </IngredientsHeader>

            <IngredientsList>
              {ingredients.map((ingredient, index) => (
                <IngredientItem 
                  key={`${title}-ingredient-${index}`}
                  isLast={index === ingredients.length - 1}
                >
                  <BulletPoint />
                  <IngredientText>
                    {ingredient}
                  </IngredientText>
                </IngredientItem>
              ))}
            </IngredientsList>
          </Box>
        </Box>

        <ViewRecipeButton
          variant="contained"
          fullWidth
          onClick={handleViewRecipe}
          disableElevation
        >
          View Recipe
        </ViewRecipeButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default RecipeCard;

