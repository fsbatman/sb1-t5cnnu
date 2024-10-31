import React from 'react';
import { Plus } from 'lucide-react';
import { MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  onAdd: (item: MenuItemType) => void;
}

function MenuItem({ item, onAdd }: MenuItemProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-amber-900">{item.price} ₽</span>
          <button
            onClick={() => onAdd(item)}
            className="p-2 text-amber-600 hover:bg-amber-50 rounded-full transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;