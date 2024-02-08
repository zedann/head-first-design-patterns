interface IResource {
  snippet(): string;
}
class Artist {
  public constructor() {}
  public bio(): string {
    return "artist bio";
  }
}
class ArtistResoure implements IResource {
  private artist: Artist;
  public constructor(artist: Artist) {
    this.artist = artist;
  }
  snippet(): string {
    return this.artist.bio();
  }
}
abstract class View {
  protected resource: IResource;
  public constructor(resource: IResource) {
    this.resource = resource;
  }
  public abstract show(): string;
}
class LongFormView extends View {
  public constructor(resource: IResource) {
    super(resource);
  }
  public show(): string {
    let html: string = "";
    html += this.resource.snippet();
    return html;
  }
}
