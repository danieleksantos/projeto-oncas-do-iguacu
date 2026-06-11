import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Painel de Gestão Projeto Onças do Iguaçu')
    .items([
      S.documentTypeListItem('noticia').title('Notícias'),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['noticia'].includes(item.getId()!),
      ),
    ]);
