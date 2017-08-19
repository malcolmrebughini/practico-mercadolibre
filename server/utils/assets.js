function normalizeAssets(assets) {
  return assets ?
    Object.keys(assets)
      .reduce((arr, key) =>
        Array.isArray(assets[key]) ? arr.concat(assets[key]) : arr.concat([assets[key]]), []
      ) : [];
}

module.exports.normalizeAssets = normalizeAssets;
