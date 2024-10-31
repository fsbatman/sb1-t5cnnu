import React from 'react';
import { X } from 'lucide-react';
import { MenuItemType } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItemType[];
  onRemove: (index: number) => void;
  total: number;
}

function Cart({ isOpen, onClose, items, onRemove, total }: CartProps) {
  const handleOrder = () => {
    if (items.length === 0) return;
    
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Корзина</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-center text-gray-500">Корзина пуста</p>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-amber-900 font-medium">{item.price} ₽</p>
                    </div>
                    <button
                      onClick={() => onRemove(index)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Итого:</span>
              <span>{total} ₽</span>
            </div>
            <button
              onClick={handleOrder}
              disabled={items.length === 0}
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;