export const Types = {
    MUDAR_VISIBILIDADE_INSERIR: 'visibilidade/MUDAR_VISIBILIDADE_INSERIR',
    MUDAR_VISIBILIDADE_BUSCA: 'visibilidade/MUDAR_VISIBILIDADE_BUSCA',
}

export const Creators = {
    mudarVisibilidadeInserir: () => ({
        type: Types.MUDAR_VISIBILIDADE_INSERIR,
    }),

    mudarVisibilidadeBusca: () => ({
        type: Types.MUDAR_VISIBILIDADE_BUSCA,
    }),
}