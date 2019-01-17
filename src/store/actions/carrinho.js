export const Types = {
    ADICIONAR_ITEM: 'buscar/ADICIONAR_ITEM',
    EXCLUIR_ITEM: 'buscar/EXCLUIR_ITEM',
}

export const Creators = {
    adicionarItem:(item) =>({
        type: Types.ADICIONAR_ITEM,
        item,
    }),

    excluirItem:(itemId) =>({
        type: Types.EXCLUIR_ITEM,
        itemId,
    }),
}