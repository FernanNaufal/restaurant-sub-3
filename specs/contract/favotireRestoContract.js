/* eslint-disable no-undef */
const itActAsFavoriteCatalogModel = (favoriteCatalog) => {
  it('should return the catalog that has been added', async () => {
    favoriteCatalog.putCatalog({ id: 1 });
    favoriteCatalog.putCatalog({ id: 2 });

    expect(await favoriteCatalog.getCatalog(1)).toEqual({ id: 1 });
    expect(await favoriteCatalog.getCatalog(2)).toEqual({ id: 2 });
    expect(await favoriteCatalog.getCatalog(3)).toEqual(undefined);
  });

  it('should refuse a catalog from being added if it does not have the correct property', async () => {
    favoriteCatalog.putCatalog({ aProperty: 'property' });

    expect(await favoriteCatalog.getAllCatalogList()).toEqual([]);
  });

  it('can return all of the catalog that have been added', async () => {
    favoriteCatalog.putCatalog({ id: 1 });
    favoriteCatalog.putCatalog({ id: 2 });

    expect(await favoriteCatalog.getAllCatalogList()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite catalog', async () => {
    favoriteCatalog.putCatalog({ id: 1 });
    favoriteCatalog.putCatalog({ id: 2 });
    favoriteCatalog.putCatalog({ id: 3 });

    await favoriteCatalog.deleteCatalog(1);

    expect(await favoriteCatalog.getAllCatalogList()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a catalog even though the catalog has not been added', async () => {
    favoriteCatalog.putCatalog({ id: 1 });
    favoriteCatalog.putCatalog({ id: 2 });
    favoriteCatalog.putCatalog({ id: 3 });

    await favoriteCatalog.deleteCatalog(4);

    expect(await favoriteCatalog.getAllCatalogList()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActAsFavoriteCatalogModel };
