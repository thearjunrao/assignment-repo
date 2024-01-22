/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products.
 *     description: get all products.
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          products:
 *                              type: array
 *                          count:
 *                              type: number
 *       '500':
 *         description: Internal server error
 *   post:
 *     summary: Create Product.
 *     description: Create Product.
 *     requestBody:
 *          description: Create a new pet in the store
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          category:
 *                              type: string
 *                          price:
 *                              type: number
 *                          image:
 *                              type: string
 *                      required: true
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          category:
 *                              type: string
 *                          price:
 *                              type: number
 *                          image:
 *                              type: string
 *       '500':
 *         description: Internal server error
 *
 * /products/{id}:
 *   put:
 *     summary: Update product by id.
 *     description: Update product by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Product ID
 *     requestBody:
 *          description: Create a new pet in the store
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          category:
 *                              type: string
 *                          price:
 *                              type: number
 *                          image:
 *                              type: string
 *                      required: true
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          category:
 *                              type: string
 *                          price:
 *                              type: number
 *                          image:
 *                              type: string
 *       '500':
 *         description: Internal server error
 *   delete:
 *     summary: Update product by id.
 *     description: Update product by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Product ID
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          success:
 *                              type: boolean
 *       '500':
 *         description: Internal server error
 */

const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/products-controller");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
