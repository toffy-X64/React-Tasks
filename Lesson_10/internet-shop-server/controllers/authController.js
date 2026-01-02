import User from '../models/User.js';
import { 
  generateAccessToken, 
  generateRefreshToken,
  verifyRefreshToken 
} from '../utils/jwt.js';

/**
 * @route   POST /api/auth/register
 * @desc    Реєстрація нового користувача
 * @access  Public
 */
export const register = async (req, res, next) => {
  try {
    const { email, password, fullName, phone, address } = req.body;

    // Валідація
    if (!email || !password || !fullName) {
      return res.status(400).json({ 
        error: 'Email, пароль та ПІБ є обов\'язковими' 
      });
    }

    // Перевірка чи існує користувач
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Користувач з таким email вже існує' });
    }

    // Створення користувача
    const user = await User.create({
      email,
      password,
      fullName,
      phone: phone || '',
      address: address || '',
      role: 'customer' // Завжди customer при реєстрації
    });

    // Генерація токенів
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      user: user.toJSON(),
      accessToken
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Вхід користувача
 * @access  Public
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Валідація
    if (!email || !password) {
      return res.status(400).json({ error: 'Email та пароль є обов\'язковими' });
    }

    // Пошук користувача
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Невірний email або пароль' });
    }

    // Перевірка паролю
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Невірний email або пароль' });
    }

    // Генерація токенів
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      user: user.toJSON(),
      accessToken
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/auth/refresh
 * @desc    Оновлення access token через refresh token
 * @access  Public
 */
export const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token є обов\'язковим' });
    }

    // Верифікація refresh token
    const decoded = verifyRefreshToken(refreshToken);
    if (!decoded) {
      return res.status(401).json({ error: 'Невалідний refresh token' });
    }

    // Пошук користувача та перевірка чи збігається токен
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Невалідний refresh token' });
    }

    // Генерація нових токенів
    const newAccessToken = generateAccessToken(user._id);
    const newRefreshToken = generateRefreshToken(user._id);

    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
        accessToken: newAccessToken
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/auth/logout
 * @desc    Вихід користувача
 * @access  Private
 */
export const logout = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',   
    });

    res.json({ message: 'Успішний вихід' });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/auth/me
 * @desc    Отримання інформації про поточного користувача
 * @access  Private
 */
export const getMe = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    next(error);
  }
};
