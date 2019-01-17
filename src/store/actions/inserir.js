export const Types = {
    MUDAR_VISIBILIDADE: 'inserir/MUDAR_VISIBILIDADE',
    ADICIONAR_LIVRO: 'inserir/ADICIONAR_LIVRO'
}

export const Creators = {
    mudarVisibilidade: () => ({
        type: Types.MUDAR_VISIBILIDADE,
    }),
    adicionarLivro: livro => ({
        type: Types.ADICIONAR_LIVRO,
        livro,
    }),
}