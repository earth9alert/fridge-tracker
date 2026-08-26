import React, { useState, useMemo } from 'react';
import { FridgeItem } from '../types/item';
import { findRecipesByItems, sortRecipesByMatch, Recipe } from '../data/recipes';
import './RecipeRecommendation.css';

interface RecipeRecommendationProps {
  items: FridgeItem[];
}

export const RecipeRecommendation: React.FC<RecipeRecommendationProps> = ({ items }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const itemNames = useMemo(() => items.map(item => item.name), [items]);

  const matchedRecipes = useMemo(() => {
    if (items.length === 0) return [];
    const matched = findRecipesByItems(itemNames);
    return sortRecipesByMatch(matched, itemNames);
  }, [items, itemNames]);

  const getMatchPercentage = (recipe: Recipe): number => {
    const matched = recipe.ingredients.filter(ingredient =>
      itemNames.some(itemName =>
        itemName.toLowerCase().includes(ingredient.name.toLowerCase()) ||
        ingredient.name.toLowerCase().includes(itemName.toLowerCase())
      )
    ).length;
    return Math.round((matched / recipe.ingredients.length) * 100);
  };

  // Show recipe section even if no perfect matches - show all recipes with % match
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="recipe-recommendation">
      <div className="recipe-header">
        <h2>👨‍🍳 แนะนำเมนูอาหาร</h2>
        <p className="recipe-subtitle">
          เมนูที่สามารถทำได้จากสิ่งของที่มีในตู้เย็น ({matchedRecipes.length} เมนู)
        </p>
      </div>

      {selectedRecipe ? (
        <div className="recipe-detail">
          <button
            className="btn-back"
            onClick={() => setSelectedRecipe(null)}
          >
            ← ย้อนกลับ
          </button>

          <h3>{selectedRecipe.name}</h3>

          <div className="recipe-meta">
            <span className="recipe-time">⏱️ {selectedRecipe.cookTime}</span>
            <span className="recipe-servings">👥 {selectedRecipe.servings}</span>
            <span className={`recipe-difficulty recipe-difficulty--${selectedRecipe.difficulty}`}>
              {selectedRecipe.difficulty === 'easy'
                ? '🟢 ง่าย'
                : selectedRecipe.difficulty === 'medium'
                ? '🟡 ปานกลาง'
                : '🔴 ยาก'}
            </span>
          </div>

          <div className="recipe-section">
            <h4>📋 วัตถุดิบ:</h4>
            <ul className="ingredient-list">
              {selectedRecipe.ingredients.map((ingredient, idx) => {
                const hasIngredient = itemNames.some(itemName =>
                  itemName.toLowerCase().includes(ingredient.name.toLowerCase()) ||
                  ingredient.name.toLowerCase().includes(itemName.toLowerCase())
                );
                return (
                  <li key={idx} className={hasIngredient ? 'has-ingredient' : ''}>
                    {hasIngredient ? '✅' : '❌'} {ingredient.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="recipe-section">
            <h4>👨‍🍳 วิธีปรุง:</h4>
            <ol className="instruction-list">
              {selectedRecipe.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="recipes-grid">
          {matchedRecipes.map((recipe) => {
            const matchPercentage = getMatchPercentage(recipe);
            return (
              <div key={recipe.id} className="recipe-card">
                <div className="recipe-card__header">
                  <h3>{recipe.name}</h3>
                  <span className="recipe-match-badge">{matchPercentage}%</span>
                </div>

                <p className="recipe-summary">
                  ⏱️ {recipe.cookTime} • 👥 {recipe.servings}
                </p>

                <p className="recipe-difficulty-badge">
                  {recipe.difficulty === 'easy'
                    ? '🟢 ง่าย'
                    : recipe.difficulty === 'medium'
                    ? '🟡 ปานกลาง'
                    : '🔴 ยาก'}
                </p>

                <div className="recipe-ingredients-preview">
                  <p className="preview-label">วัตถุดิบที่มี:</p>
                  <div className="ingredients-dots">
                    {recipe.ingredients.map((ingredient, idx) => {
                      const hasIngredient = itemNames.some(itemName =>
                        itemName.toLowerCase().includes(ingredient.name.toLowerCase()) ||
                        ingredient.name.toLowerCase().includes(itemName.toLowerCase())
                      );
                      return (
                        <span
                          key={idx}
                          className={`dot ${hasIngredient ? 'has' : 'missing'}`}
                          title={`${hasIngredient ? '✓' : '✕'} ${ingredient.name}`}
                        />
                      );
                    })}
                  </div>
                </div>

                <button
                  className="btn-primary btn-view-recipe"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  ดูรายละเอียด
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
