const router = require('express').Router();
const { Model } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
  // find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include:[{model: Product}],
    })
    res.status(200).json(categoryData)
  } catch (err){
    res.status(500).json(err)
  }
});
//get a category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}],
    })

    if(!categoryData) {
      res.json("Couldnt find a category with that ID")
    } else {
      res.status(200).json(categoryData);
    }
  } catch (err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});
//update a category by id

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        },
      }
    )
    res.status(200).json(`Succesfully Updated Id ${req.params.id}`)
  } catch (err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});
//deletecategory by id
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(`Succesfully deleted Id ${req.params.id}`)
  } catch (err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;