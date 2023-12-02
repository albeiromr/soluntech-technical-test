export namespace MovieModels {
  /**
   * Represents the hole movie service response
   */
  export interface RawServiceResponse {
    page: string;
    next: string;
    entries: number;
    results: RawMovie[];
  }
  /**
   * Represents the raw movie data returned by the service
   */
  export interface RawMovie {
    _id: string;
    id: string;
    primaryImage: PrimaryImage;
    titleType: TitleType;
    titleText: TitleText;
    originalTitleText: TitleText;
    releaseYear: ReleaseYear;
    releaseDate: ReleaseDate;
  }

  interface TitleText {
    text: string;
    __typename: string;
  }

  interface PrimaryImage {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: Caption;
    __typename: string;
  }

  interface Caption {
    plainText: string;
    __typename: string;
  }

  interface ReleaseDate {
    day: number;
    month: number;
    year: number;
    __typename: string;
  }

  interface ReleaseYear {
    year: number;
    endYear: null;
    __typename: string;
  }

  interface TitleType {
    displayableProperty: DisplayableProperty;
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    categories: Category[];
    canHaveEpisodes: boolean;
    __typename: string;
  }

  interface Category {
    value: string;
    __typename: string;
  }

  interface DisplayableProperty {
    value: Caption;
    __typename: string;
  }

  /**
   * Represents an individual movie with only the required filds for the application
   */
  export interface CleanMovie {
    id: string;
    img: PrimaryImage;
    title: string;
    type: string;
  }
}
