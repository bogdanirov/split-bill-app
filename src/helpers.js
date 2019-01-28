// Helpers JS functions

export const localCurrency = "RON";

export function formatDate(timestamp) {
    return new Date(timestamp*1000).toLocaleString();
}

export function formatPrice(amount) {
    return new Intl.NumberFormat('ro-RO', {
        style: "currency", 
        currency: localCurrency
    }).format(amount);
}