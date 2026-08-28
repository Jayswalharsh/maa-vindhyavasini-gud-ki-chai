const WHATSAPP_NUMBER = "918409104406";

export function createWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function createProductEnquiryUrl(
  productName: string
): string {
  return createWhatsAppUrl(
    `Hello Maa Vindhyavasini, I want to enquire about ${productName}. Please share details about pack sizes, pricing and availability.`
  );
}

export function createGeneralEnquiryUrl(): string {
  return createWhatsAppUrl(
    "Hello Maa Vindhyavasini, I want to know more about your Gud Ki Chai products."
  );
}

export function createBulkEnquiryUrl(): string {
  return createWhatsAppUrl(
    "Hello Maa Vindhyavasini, I am interested in your products for a bulk order. Please share the available products, pack sizes, pricing and minimum order requirements."
  );
}