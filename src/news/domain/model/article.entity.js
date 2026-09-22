import {Source} from "@/news/domain/model/source.entity.js";
import {StringValidator} from "@/shared/domain/model/string-validator.js";
import {DateTime} from "@/shared/domain/model/date-time.js";
import {Url} from "@/shared/domain/model/url.js";

/**
 * Properties for creating an Article entity.
 *
 * @typedef {Object} ArticleProps
 * @property {string} [title] - The title of the article.
 * @property {string} [description] - A brief summary of the article content.
 * @property {string|Url} [url] - The canonical URL of the article.
 * @property {string|Url} [urlToImage] - The URL to the main image of the article.
 * @property {import('@/news/domain/model/source.entity.js').SourceProps | Source | null} [source] - The source of the article, either as properties or an entity.
 * @property {string|Date|DateTime} [publishedAt] - The publication timestamp.
 */

/**
 * Domain entity representing a news article.
 *
 * @remarks
 * This entity encapsulates the core attributes and behavior of a news article
 * within the domain. It ensures data integrity through validation in its constructor.
 */
export class Article {
    /**
     * Creates a new Article instance.
     *
     * @param {ArticleProps} [props] - The properties to initialize the article with.
     * @throws {Error} If title is empty, a source is missing, or publishedAt is invalid/in the future.
     */
    constructor({author = '', title = '', description = '', url = '', urlToImage = '', source = null, publishedAt = ''}) {
        if (!StringValidator.isNotEmptyString(title)) throw new Error('Article title must be a non-empty string');
        if (!source) throw new Error('Article must have a source');

        let dateTime;
        try {
            dateTime = publishedAt instanceof DateTime ? publishedAt : new DateTime(publishedAt);
        } catch (e) {
            throw new Error('Article publishedAt must be a valid date');
        }

        if (dateTime.isFuture()) throw new Error('Article publishedAt cannot be in the future');

        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url instanceof Url ? url : new Url(url);
        this.urlToImage = urlToImage instanceof Url ? urlToImage : new Url(urlToImage);
        if (this.urlToImage.isEmpty()) {
            this.urlToImage = new Url('https://placehold.co/600x400?text=No+Image');
        }
        this.source = source instanceof Source ? source : new Source(source);
        this.publishedAt = dateTime;
    }

    /**
     * Formats the publication date for display purposes.
     *
     * @returns {string} The formatted date string (e.g., MM/DD/YYYY, HH:MM AM/PM).
     */
    getFormatedPublishedAt() {
        return this.publishedAt.format();
    }
}