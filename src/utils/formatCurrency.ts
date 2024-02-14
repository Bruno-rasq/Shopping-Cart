export const formatCurrency = (value: string, curr: string) => {
    return value.toLocaleString('pt-br', { 
      style: 'currency', 
      currency: curr 
    });
}