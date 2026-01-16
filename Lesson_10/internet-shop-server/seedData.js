import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import Category from './models/Category.js';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();

const seedUsers = [
  {
    email: 'admin@shop.com',
    password: 'qwe123qwe',
    fullName: 'Адміністратор',
    phone: '+380501234567',
    address: 'Київ, вул. Хрещатик, 1',
    role: 'admin'
  },
  {
    email: 'customer@shop.com',
    password: 'customer123',
    fullName: 'Іван Петренко',
    phone: '+380507654321',
    address: 'Львів, вул. Свободи, 10',
    role: 'customer'
  }
];

const seedCategories = [
  { name: 'Кросівки', description: 'Спортивні Кросівки Nike, Adidas, Puma та більше...' },
  { name: 'Футболки', description: 'Спортивні Футболки' },
  { name: 'Худі', description: 'Спортивні Худі від Nike, Adidas, Puma та більше...' },
  { name: 'Куртки', description: 'Спортивні Куртки' },
  { name: 'Штани', description: 'Спортивні Штани' },
  { name: 'Шорти', description: 'Спортивні Шорти' }
];

const seedData = async () => {
  try {
    await connectDB();

    console.log('🗑️  Очищення бази даних...');
    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();

    console.log('Створення користувачів...');
    const users = await User.create(seedUsers);
    console.log(`Створено ${users.length} користувачів`);

    console.log('Створення категорій...');
    const categories = await Category.create(seedCategories);
    console.log(`Створено ${categories.length} категорій`);

    // Товари для спортивного магазину
    const seedProducts = [
        // Кросівки
        { name: 'Nike Air Zoom Pegasus 39', description: 'Легкі бігові кросівки Nike для щоденних тренувань', price: 4999, discount: 10, stock: 20, image: 'https://placehold.co/500x350', category: categories[0]._id },
        { name: 'Adidas Ultraboost 22', description: 'Кросівки Adidas з технологією Boost для максимальної амортизації', price: 5999, discount: 0, stock: 15, image: 'https://placehold.co/500x350', category: categories[0]._id },
        { name: 'Puma RS-X³', description: 'Сучасні кросівки Puma RS-X³ з яскравим дизайном', price: 4499, discount: 5, stock: 25, image: 'https://placehold.co/500x350', category: categories[0]._id },
        { name: 'Reebok Nano X2', description: 'Кросівки Reebok для кросфіту та тренувань в залі', price: 4799, discount: 0, stock: 18, image: 'https://placehold.co/500x350', category: categories[0]._id },
        { name: 'Asics Gel-Kayano 28', description: 'Бігова модель Asics з підтримкою стопи і гелевою амортизацією', price: 5299, discount: 15, stock: 12, image: 'https://placehold.co/500x350', category: categories[0]._id },

        // Футболки
        { name: 'Nike Dri-FIT T-Shirt', description: 'Футболка Nike з технологією відведення вологи', price: 999, discount: 5, stock: 50, image: 'https://placehold.co/500x350', category: categories[1]._id },
        { name: 'Adidas Aeroready Tee', description: 'Легка спортивна футболка Adidas для тренувань', price: 899, discount: 0, stock: 40, image: 'https://placehold.co/500x350', category: categories[1]._id },
        { name: 'Puma Essential Logo Tee', description: 'Бавовняна футболка Puma з логотипом', price: 799, discount: 10, stock: 35, image: 'https://placehold.co/500x350', category: categories[1]._id },
        { name: 'Under Armour Tech 2.0', description: 'Футболка UA з антибактеріальним покриттям', price: 1099, discount: 0, stock: 25, image: 'https://placehold.co/500x350', category: categories[1]._id },
        { name: 'Reebok Workout Tee', description: 'Футболка Reebok для занять у залі та бігу', price: 899, discount: 5, stock: 30, image: 'https://placehold.co/500x350', category: categories[1]._id },

        // Худі
        { name: 'Nike Sportswear Hoodie', description: 'Класичне худі Nike для спорту та повсякденного носіння', price: 2499, discount: 0, stock: 20, image: 'https://placehold.co/500x350', category: categories[2]._id },
        { name: 'Adidas Essentials Hoodie', description: 'М’яке худі Adidas для щоденного використання', price: 2299, discount: 10, stock: 18, image: 'https://placehold.co/500x350', category: categories[2]._id },
        { name: 'Puma Rebel Hoodie', description: 'Стильне худі Puma з логотипом на грудях', price: 2199, discount: 5, stock: 15, image: 'https://placehold.co/500x350', category: categories[2]._id },
        { name: 'Reebok Classics Hoodie', description: 'Універсальне худі Reebok для тренувань і міста', price: 1999, discount: 0, stock: 22, image: 'https://placehold.co/500x350', category: categories[2]._id },
        { name: 'Under Armour Rival Fleece', description: 'Худі UA з м’якої флісової тканини', price: 2399, discount: 15, stock: 10, image: 'https://placehold.co/500x350', category: categories[2]._id },

        // Куртки
        { name: 'Nike Windrunner Jacket', description: 'Легка вітровка Nike для бігу та спорту', price: 2999, discount: 5, stock: 15, image: 'https://placehold.co/500x350', category: categories[3]._id },
        { name: 'Adidas Terrex Jacket', description: 'Спортивна куртка Adidas для активного відпочинку', price: 3999, discount: 0, stock: 10, image: 'https://placehold.co/500x350', category: categories[3]._id },
        { name: 'Puma Running Jacket', description: 'Куртка Puma для тренувань на свіжому повітрі', price: 3499, discount: 10, stock: 12, image: 'https://placehold.co/500x350', category: categories[3]._id },
        { name: 'Under Armour Storm Jacket', description: 'Водонепроникна куртка UA для бігу під дощем', price: 4299, discount: 0, stock: 8, image: 'https://placehold.co/500x350', category: categories[3]._id },
        { name: 'Reebok Training Jacket', description: 'Легка куртка Reebok для спорту та міста', price: 3199, discount: 15, stock: 10, image: 'https://placehold.co/500x350', category: categories[3]._id },

        // Штани
        { name: 'Nike Dri-FIT Pants', description: 'Спортивні штани Nike з відведенням вологи', price: 1499, discount: 0, stock: 30, image: 'https://placehold.co/500x350', category: categories[4]._id },
        { name: 'Adidas Tiro 21 Pants', description: 'Футбольні спортивні штани Adidas', price: 1299, discount: 5, stock: 25, image: 'https://placehold.co/500x350', category: categories[4]._id },
        { name: 'Puma Joggers', description: 'Комфортні спортивні штани Puma для тренувань', price: 1399, discount: 0, stock: 20, image: 'https://placehold.co/500x350', category: categories[4]._id },
        { name: 'Reebok Essentials Pants', description: 'Легкі штани Reebok для спорту і міста', price: 1199, discount: 10, stock: 15, image: 'https://placehold.co/500x350', category: categories[4]._id },
        { name: 'Under Armour Sportstyle Pants', description: 'Спортивні штани UA з еластичним поясом', price: 1499, discount: 0, stock: 18, image: 'https://placehold.co/500x350', category: categories[4]._id },

        // Шорти
        { name: 'Nike Flex Shorts', description: 'Легкі спортивні шорти Nike для тренувань', price: 799, discount: 0, stock: 40, image: 'https://placehold.co/500x350', category: categories[5]._id },
        { name: 'Adidas 4KRFT Sport Shorts', description: 'Шорти Adidas з еластичною талією', price: 899, discount: 10, stock: 35, image: 'https://placehold.co/500x350', category: categories[5]._id },
        { name: 'Puma Active Shorts', description: 'Шорти Puma для тренувань і бігу', price: 749, discount: 0, stock: 30, image: 'https://placehold.co/500x350', category: categories[5]._id },
        { name: 'Reebok Workout Shorts', description: 'Легкі шорти Reebok для спорту', price: 799, discount: 5, stock: 25, image: 'https://placehold.co/500x350', category: categories[5]._id },
        { name: 'Under Armour Raid Shorts', description: 'Спортивні шорти UA для тренувань на свіжому повітрі', price: 849, discount: 0, stock: 20, image: 'https://placehold.co/500x350', category: categories[5]._id },
    ];


    console.log('Створення товарів...');
    const products = await Product.create(seedProducts);
    console.log(`Створено ${products.length} товарів`);

    console.log(`
      SEED УСПІШНО ЗАВЕРШЕНО!
      Користувачі:
      admin@shop.com / admin123 (admin)
      customer@shop.com / customer123 (customer)

      Категорії: ${categories.length}
      Товари: ${products.length}
    `);

    process.exit(0);
  } catch (error) {
    console.error('❌ Помилка seed:', error);
    process.exit(1);
  }
};

seedData();
