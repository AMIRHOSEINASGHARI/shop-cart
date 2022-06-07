const shortTheTitle = (title) => {
    const splitedTitle = title.split(' ');
    return `${splitedTitle[0]}${splitedTitle[1]}`
}

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

export {shortTheTitle , isInCart};