import {StringValidator} from "@/shared/domain/model/string-validator.js";
import {Url} from "@/shared/domain/model/url.js";

/**
 * Properties for creating a Source entity.
 *
 * @typedef {Object} SourceProps
 * @property {string} [id] - Unique identifier for the source (e.g., 'bbc-news').
 * @property {string} [name] - Display name of the news source.
 * @property {string} [description] - A short description of the news source.
 * @property {string|Url} [url] - The website URL of the news source.
 * @property {string} [category] - The category the news source belongs to.
 * @property {string} [language] - The primary language of the source (ISO code).
 * @property {string} [country] - The country of origin (ISO code).
 */

/**
 * Domain entity representing a news provider.
 *
 * @remarks
 * This model belongs to the domain layer and encapsulates the identity and
 * attributes of a news source. It remains independent of external API structures.
 */
export class Source {
    /**
     * Creates a new Source entity instance.
     *
     * @param {SourceProps} [sourceProps] - Properties to initialize the Source entity.
     * @throws {Error} If id or name is empty.
     */
    constructor({id = "", name = "", description = "", url = "", category = "", language = "", country = ""}) {
        if (!StringValidator.isNotEmptyString(id)) throw new Error('Source id must be a non-empty string');
        if (!StringValidator.isNotEmptyString(name)) throw new Error('Source name must be a non-empty string');

        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url instanceof Url ? url : new Url(url);
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo = "";
    }
}