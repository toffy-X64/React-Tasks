import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// GET /api/cart - Отримати кошик користувача
export const getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// POST /api/cart/items - Додати товар в кошик
export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity = 1 } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    await cart.addItem(productId, quantity);
    await cart.populate('items.product');

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/cart/items/:productId - Оновити кількість товару
export const updateCartItem = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ error: 'Кошик не знайдено' });
    }

    await cart.updateItemQuantity(productId, quantity);
    await cart.populate('items.product');

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/cart/items/:productId - Видалити товар з кошика
export const removeFromCart = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ error: 'Кошик не знайдено' });
    }

    await cart.removeItem(productId);
    await cart.populate('items.product');

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/cart - Очистити кошик
export const clearCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ error: 'Кошик не знайдено' });
    }

    await cart.clearCart();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// POST /api/cart/sync - Синхронізувати кошик з localStorage
export const syncCart = async (req, res, next) => {
  try {
    const { items } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = await Cart.create({ user: req.user._id, items: [] });
    }

    // Merge з існуючими товарами
    for (const item of items) {
      await cart.addItem(item.id, item.quantity);
    }

    await cart.populate('items.product');

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// POST /api/cart/format
export const formatCart = async (req, res, next) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.json({ items: [] });
    }

    const productIds = items.map(i => i.id);

    const products = await Product.find({
      _id: { $in: productIds }
    }).lean({ virtuals: true });

    const productsMap = new Map(
      products.map(p => [p._id.toString(), p])
    );

    const formattedItems = items
      .map(item => {
        const product = productsMap.get(item.id);
        if (!product) return null;

        return {
          product: {
            ...product,
            id: product._id
          },
          quantity: Math.max(1, item.quantity)
        };
      })
      .filter(Boolean);

    res.json({ items: formattedItems });

  } catch (error) {
    next(error);
  }
};
