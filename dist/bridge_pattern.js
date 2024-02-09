"use strict";
class Artist {
    constructor() { }
    bio() {
        return "artist bio";
    }
}
class ArtistResoure {
    constructor(artist) {
        this.artist = artist;
    }
    snippet() {
        return this.artist.bio();
    }
}
class View {
    constructor(resource) {
        this.resource = resource;
    }
}
class LongFormView extends View {
    constructor(resource) {
        super(resource);
    }
    show() {
        let html = "";
        html += this.resource.snippet();
        return html;
    }
}
