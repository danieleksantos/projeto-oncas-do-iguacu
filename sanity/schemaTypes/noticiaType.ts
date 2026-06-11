import { defineField, defineType } from 'sanity';

export const noticiaType = defineType({
  name: 'noticia',
  title: 'Notícias',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Notícia',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Clique em "Generate" para criar a URL a partir do título.',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dataPublicacao',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo',
      description:
        'Texto curto que aparece no card da notícia (máximo 200 caracteres).',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Acessibilidade)',
          description:
            'Descreva a imagem para pessoas com deficiência visual (Ex: Onça pintada caminhando na mata).',
        },
        {
          name: 'legenda',
          type: 'string',
          title: 'Legenda e Créditos',
          description: 'Ex: Onça Cacau no Parque Nacional. Foto: João Silva',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo da Notícia',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
});
