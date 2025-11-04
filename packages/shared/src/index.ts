// Função super simples que compartilha true/false
export const isFeatureEnabled = (featureName: string): boolean => {
  const enabledFeatures = ["dark-mode", "notifications", "premium"];
  return enabledFeatures.includes(featureName);
};

// Outra função básica
export const validateEmail = (email: string): boolean => {
  return email.includes("@") && email.includes(".");
};

export const testBoolean = (): boolean => {
  return false;
};

// Constante compartilhada
export const APP_VERSION = "1.0.0";
