import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Edit2, Check, X } from 'lucide-react';
import { useGetContactInfo, useUpdateContactInfo } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function Contact() {
  const { data: contactInfo, isLoading } = useGetContactInfo();
  const updateMutation = useUpdateContactInfo();
  const { identity } = useInternetIdentity();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    address: '',
    phone: '',
    hours: '',
    email: '',
  });

  const handleEdit = () => {
    if (contactInfo) {
      setEditData({
        address: contactInfo.address,
        phone: contactInfo.phone,
        hours: contactInfo.hours,
        email: contactInfo.email,
      });
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    updateMutation.mutate(editData, {
      onSuccess: () => {
        setIsEditing(false);
      },
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Loading contact information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">📞 Contact</h1>
          <p className="text-xl text-muted-foreground">
            Call us for orders or visit our restaurant anytime!
          </p>
        </div>

        {/* Admin Edit Button */}
        {identity && !isEditing && (
          <div className="flex justify-end mb-8">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Edit2 size={20} />
              <span>Edit Contact Info</span>
            </button>
          </div>
        )}

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Address */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">📍 Address</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.address}
                    onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                  />
                ) : (
                  <p className="text-lg text-muted-foreground">{contactInfo?.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">📞 Phone</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                  />
                ) : (
                  <p className="text-lg text-muted-foreground">{contactInfo?.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">🕒 Opening Hours</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.hours}
                    onChange={(e) => setEditData({ ...editData, hours: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                  />
                ) : (
                  <p className="text-lg text-muted-foreground">{contactInfo?.hours}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">📧 Email</h3>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                  />
                ) : (
                  <p className="text-lg text-muted-foreground">{contactInfo?.email}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Actions */}
        {isEditing && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleSave}
              disabled={updateMutation.isPending}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Check size={20} />
              <span>{updateMutation.isPending ? 'Saving...' : 'Save Changes'}</span>
            </button>
            <button
              onClick={handleCancel}
              disabled={updateMutation.isPending}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
            >
              <X size={20} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
