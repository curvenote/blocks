import { Author } from "./types";


const DEFAULT_AUTHOR: Author = {
  id: '',
  name: null,
  userId: null,
  orcid: null,
  corresponding: null,
  email: null,
  roles: [],
  affiliations: []
}

export function createAuthor(initialState: {id: string} & Partial<Author>): Author {
  return {
    ...DEFAULT_AUTHOR,
    ...initialState,
  }
}