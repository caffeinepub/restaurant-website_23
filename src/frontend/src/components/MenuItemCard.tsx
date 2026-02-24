import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useUpdateMenuItem } from '../hooks/useQueries';
import type { MenuItem } from '../backend';

interface MenuItemCardProps {
  item: MenuItem;
  isAdminMode: boolean;
}

export default function MenuItemCard({ item, isAdminMode }: MenuItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState(item.price.toString());
  const updateMutation = useUpdateMenuItem();

  const handleSave = () => {
    const newPrice = parseFloat(editPrice);
    if (!isNaN(newPrice) && newPrice > 0) {
      updateMutation.mutate(
        { name: item.name, price: newPrice },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    }
  };

  const handleCancel = () => {
    setEditPrice(item.price.toString());
    setIsEditing(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold text-foreground mb-3">{item.name}</h3>
        
        <div className="mt-auto">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">$</span>
              <input
                type="number"
                step="0.5"
                min="0"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                className="w-20 px-2 py-1 border border-border rounded bg-background text-foreground"
                autoFocus
              />
              <button
                onClick={handleSave}
                disabled={updateMutation.isPending}
                className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                aria-label="Save"
              >
                <Check size={20} />
              </button>
              <button
                onClick={handleCancel}
                disabled={updateMutation.isPending}
                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                aria-label="Cancel"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
              {isAdminMode && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-colors"
                  aria-label="Edit price"
                >
                  <Edit2 size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
