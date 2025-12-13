// API Configuration
// Измените эти URLs на адреса вашего бэкенда

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://express-kkhanill.vercel.app';

export const API_ENDPOINTS = {
  // Платежи
  INIT_PAYMENT: `${API_BASE_URL}/api/tbank/init-payment`,
  GET_PAYMENT_STATE: `${API_BASE_URL}/api/tbank/get-state`,
  
  // Предзапись
  PRESALE_SIGNUP: `${API_BASE_URL}/api/presale-signup`,
};

export default API_ENDPOINTS;
