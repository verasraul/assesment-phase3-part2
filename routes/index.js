const Router = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.get("/lambrecipes", controllers.getAllMyRecipes);
router.post("/lambrecipes/create-recipe", controllers.createRecipe);
router.get("/lambrecipes/:id", controllers.getRecipeById);
router.put("/lambrecipes/:id/update-recipe", controllers.updateRecipe);
router.delete("/lambrecipes/:id", controllers.deleteRecipe);

module.exports = router;