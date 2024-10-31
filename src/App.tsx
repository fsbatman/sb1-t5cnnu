import React, { useState } from 'react';
import { Coffee, ShoppingCart, Clock, MapPin, Phone, Instagram } from 'lucide-react';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import { MenuItemType } from './types';

function App() {
  const [cart, setCart] = useState<MenuItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuItems: MenuItemType[] = [
    {
      id: 1,
      name: 'Капучино',
      description: 'Классический капучино с нежной молочной пенкой',
      price: 299,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
      category: 'coffee'
    },
    {
      id: 2,
      name: 'Латте',
      description: 'Эспрессо с горячим молоком и легкой пенкой',
      price: 329,
      image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&q=80&w=600',
      category: 'coffee'
    },
    {
      id: 3,
      name: 'Раф',
      description: 'Нежный кофейный напиток со сливками и ванилью',
      price: 359,
      image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&q=80&w=600',
      category: 'coffee'
    },
    {
      id: 4,
      name: 'Матча Латте',
      description: 'Японский зеленый чай матча с молоком',
      price: 379,
      image: 'https://images.unsplash.com/photo-1515823662972-da6a2ab327e6?auto=format&fit=crop&q=80&w=600',
      category: 'tea'
    }
  ];

  const addToCart = (item: MenuItemType) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-amber-800" />
              <h1 className="text-2xl font-bold text-amber-900">Кофейня</h1>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-amber-900 hover:bg-amber-50 rounded-full transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Ваш идеальный кофе
          </h2>
          <p className="text-xl text-white mb-8">
            Насладитесь изысканным вкусом наших напитков
          </p>
          <a href="#menu" className="bg-amber-600 text-white px-8 py-3 rounded-full inline-block w-fit hover:bg-amber-700 transition-colors">
            Посмотреть меню
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <Clock className="h-8 w-8 text-amber-600" />
            <div>
              <h3 className="font-semibold">Режим работы</h3>
              <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="h-8 w-8 text-amber-600" />
            <div>
              <h3 className="font-semibold">Адрес</h3>
              <p className="text-gray-600">ул. Пушкина, д. 10</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <Phone className="h-8 w-8 text-amber-600" />
            <div>
              <h3 className="font-semibold">Контакты</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Наше меню</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6" />
              <span className="font-semibold">Кофейня</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <span className="text-sm">© 2024 Кофейня. Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        total={totalAmount}
      />
    </div>
  );
}

export default App;