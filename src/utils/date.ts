export const dateUtils = {
  today: (): string => {
    return new Date().toISOString().split('T')[0];
  },

  format: (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },

  daysUntilExpiry: (expiryDate: string): number => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);
    return Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  },

  isExpired: (expiryDate: string): boolean => {
    return dateUtils.daysUntilExpiry(expiryDate) < 0;
  },

  isExpiringSoon: (expiryDate: string, daysThreshold: number = 3): boolean => {
    const days = dateUtils.daysUntilExpiry(expiryDate);
    return days >= 0 && days <= daysThreshold;
  },

  getExpiryStatus: (expiryDate: string): 'expired' | 'expiring' | 'good' => {
    if (dateUtils.isExpired(expiryDate)) return 'expired';
    if (dateUtils.isExpiringSoon(expiryDate)) return 'expiring';
    return 'good';
  },

  getExpiryMessage: (expiryDate: string): string => {
    const days = dateUtils.daysUntilExpiry(expiryDate);
    if (days < 0) return `หมดอายุแล้ว ${Math.abs(days)} วันที่แล้ว`;
    if (days === 0) return 'หมดอายุวันนี้';
    if (days === 1) return 'หมดอายุพรุ่งนี้';
    return `หมดอายุใน ${days} วัน`;
  },
};
