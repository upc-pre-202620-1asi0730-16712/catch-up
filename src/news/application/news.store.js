import {reactive} from "vue";
import {NewsApi} from "@/news/infrastructure/news-api.js";
import {SourceAssembler} from "@/news/infrastructure/source.assembler.js";
import {ArticleAssembler} from "@/news/infrastructure/article.assembler.js";

const newsApi = new NewsApi();
const sourceAssembler = new SourceAssembler();

export const newsStore = reactive({
    sources: [],
    articles: [],
    errors: [],
    currentSource: null,

    setCurrentSource: (source) => {
        this.currentSource = source;
        this.loadArticlesForCurrentSource();
    },

    loadSources: () => {
        this.errors = [];
        newsApi.getSources()
            .then((response) => {
                this.sources = sourceAssembler.toEntitiesFromResponse(response);
                if (this.sources.length > 0 && !this.currentSource) {
                    this.setCurrentSource(this.sources[0]);
                }
            })
            .catch((message) => {
                this.errors.push(message);
                this.sources = [];
            });
    },

    loadArticlesForCurrentSource: () => {
        if (this.currentSource === null) return;
        newsApi.getArticlesForSourceId(this.currentSource.id).then(articles => {
            const articleAssembler = new ArticleAssembler(this.currentSource);
            this.articles = articleAssembler.toEntitiesFromResponse(articles);
        }).catch(message => {
            this.errors.push(message);
            this.articles = [];
        });
    },

});