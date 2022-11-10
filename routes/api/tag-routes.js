const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({include: [{model: Product}]})
    res.status(200).json(tagData)
} catch (err){
  res.status(200).json(err)
}
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {include: [{model: Product}]})
    if(!tagData) {
      res.json("coudnt find tag with that ID")
    } else {
      res.status(200).json(tagData)
    }
} catch (err){
  res.status(200).json(err)
}
  // find all tags
  // be sure to include its associated Product data
});
  // be sure to include its associated Product data


router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData)
} catch (err){
  res.status(200).json(err)
}
  // find all tags
  // be sure to include its associated Product data
});


router.put('/:id', async(req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        },
      })
    res.status(200).json(`Succesfully updates ID ${req.params.id}`)
  } catch {
    res.status(500).json(err)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  const tagData = Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(`succefully deleted ID ${req.params.id}`)
  // delete on tag by its `id` value
});

module.exports = router;