export function formattedValue(value) {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}