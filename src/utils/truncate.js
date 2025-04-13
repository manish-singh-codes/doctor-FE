export const truncate = (str, max) =>{
    if (!str) return '';
    return str.length > max ? str.substring(0, max-1) + '...' : str;
}