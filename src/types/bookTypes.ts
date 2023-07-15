export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    rating: number;
    comment: string;
    author: string;
    date: string;
  }
  