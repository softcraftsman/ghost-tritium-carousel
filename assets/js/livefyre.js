
var livefyre_loaded = false;
function load_livefyre() {
    if (config_livefyre_id !== '')
    {
        livefyre_loaded = true;
        var livefyre_id = config_livefyre_id;
        (function () {
            var articleId = fyre.conv.load.makeArticleId(null);
            fyre.conv.load({}, [{
                el: 'livefyre-comments',
                network: "livefyre.com",
                siteId: livefyre_id,
                articleId: articleId,
                signed: false,
                collectionMeta: {
                    articleId: articleId,
                    url: fyre.conv.load.makeCollectionUrl(),
                }
            }], function () { });
        }());
    }
};

load_livefyre();
