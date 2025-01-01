export const openWhatsAppChat = (phone: string, message: string) => {
  const formattedPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
};

export const makePhoneCall = (phone: string) => {
  window.location.href = `tel:${phone}`;
};