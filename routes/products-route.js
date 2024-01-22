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
 *                              items:
 *                                type: object
 *                                properties:
 *                                  id:
 *                                    type: number
 *                                  title:
 *                                    type: string
 *                                  description:
 *                                    type: string
 *                                  category:
 *                                    type: string
 *                                  price:
 *                                    type: number
 *                                  image:
 *                                    type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error_message:
 *                              type: string
 *                          error_code:
 *                              type: string
 *
 *
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
 *                              required: true
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
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error_message:
 *                              type: string
 *                          error_code:
 *                              type: string
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
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error_message:
 *                              type: string
 *                          error_code:
 *                              type: string
 *
 *   delete:
 *     summary: Delete product by id.
 *     description: Delete product by id.
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
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error_message:
 *                              type: string
 *                          error_code:
 *                              type: string
 */

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products-controller");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
