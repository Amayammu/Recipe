import React from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IconBadge, LargeOrangeChip } from '../styles/shared.styles';
import {
  PageContainer,
  ContentContainer,
  HeaderSection,
  HeaderBadge,
  MainTitle,
  Subtitle,
  ChipContainer,
  RecipeGrid,
  Footer,
  FooterText
} from './RecipeList.styles';

const RecipeList = () => {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      description: "Creamy tomato pasta",
      ingredients: ["Tomato", "Onion", "Pasta", "Salt"]
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "Spicy and flavorful Indian curry",
      ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onion", "Garlic", "Ginger"]
    },
    {
      id: 3,
      title: "Greek Salad",
      description: "Fresh Mediterranean salad with feta",
      ingredients: ["Cucumber", "Tomato", "Feta Cheese", "Olives", "Olive Oil", "Lemon"]
    },
    {
      id: 4,
      title: "Chocolate Brownies",
      description: "Rich and fudgy chocolate brownies",
      ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour", "Vanilla"]
    },
    {
      id: 5,
      title: "Caesar Salad",
      description: "Classic Caesar with crispy romaine",
      ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing", "Lemon"]
    },
    {
      id: 6,
      title: "Beef Tacos",
      description: "Seasoned ground beef tacos",
      ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Cheese", "Salsa", "Sour Cream"]
    }
  ];

  return (
    <PageContainer>
      <ContentContainer maxWidth="xl">
        <HeaderSection>
          <HeaderBadge>
            <IconBadge size={56} borderRadius="16px">
              <MenuBookIcon sx={{ color: '#ff6b35', fontSize: 36 }} />
            </IconBadge>
            <MainTitle variant="h2" component="h1">
              Recipe Collection
            </MainTitle>
          </HeaderBadge>

          <Subtitle variant="h6">
            Discover delicious recipes for every occasion
          </Subtitle>

          <ChipContainer>
            <LargeOrangeChip
              icon={<AutoAwesomeIcon sx={{ fontSize: 18 }} />}
              label={`${recipes.length} Recipes`}
            />
          </ChipContainer>
        </HeaderSection>

        <RecipeGrid 
          container 
          spacing={{ xs: 3, sm: 3.5, md: 4 }}
        >
          {recipes.map((recipe) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={recipe.id}
            >
              <RecipeCard
                title={recipe.title}
                description={recipe.description}
                ingredients={recipe.ingredients}
              />
            </Grid>
          ))}
        </RecipeGrid>

        <Footer>
          <FooterText variant="body2">
            © 2025 Recipe Collection.
          </FooterText>
        </Footer>
      </ContentContainer>
    </PageContainer>
  );
};

export default RecipeList;

