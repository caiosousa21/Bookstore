export const Types = {
    ADICIONAR_ITEM: 'carrinho/ADICIONAR_ITEM',
    EXCLUIR_ITEM: 'carrinho/EXCLUIR_ITEM',
    MUDAR_VISIBILIDADE: 'carrinho/MUDAR_VISIBILIDADE',
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

    mudarVisibilidade: () => ({
        type: Types.MUDAR_VISIBILIDADE,
    }),
}