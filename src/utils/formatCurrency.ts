export const formatCurrency = (value: number, curr: string) => {
    return value.toLocaleString('pt-br', { 
      style: 'currency', 
      currency: curr 
    });
}